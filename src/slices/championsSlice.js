import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const fetchChampion = async (body) => {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 30000)
  const response = await fetch('https://tftcraft.com/comp', {
    signal: controller.signal,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  const data = await response.json()
  return data
}

export const fetchChampionAsync = createAsyncThunk(
  'champions/fetch',
  async (page = 1, { getState }) => {
    const state = getState()
    const { include, exclude, level, includeTraits, excludeTraits } =
      state.filters
    const filters = {
      include: [...include, ...includeTraits],
      exclude: [...exclude, ...excludeTraits],
      level,
      page
    }
    return await fetchChampion(filters)
  }
)

const initialState = {
  data: null,
  status: 'idle'
}
export const championsSlice = createSlice({
  name: 'champions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChampionAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchChampionAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.data = action.payload
      })
      .addCase(fetchChampionAsync.rejected, (state) => {
        state.status = 'rejected'
        state.data = []
      })
  }
})

// export const {} = championsSlice.actions

export default championsSlice.reducer

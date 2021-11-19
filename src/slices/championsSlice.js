import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const fetchChampion = async (body) => {
  const response = await fetch('https://d459-71-232-162-30.ngrok.io/comp', {
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
    const { include, exclude, level } = state.filters
    const filters = { include, exclude, level, page }
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
      })
  }
})

// export const {} = championsSlice.actions

export default championsSlice.reducer

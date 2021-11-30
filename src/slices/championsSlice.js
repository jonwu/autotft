import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const https = require('https');

const fetchChampion = async (body) => {
<<<<<<< HEAD
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  const response = await fetch('https://35.236.91.47:443/comp', {
=======
  const response = await fetch('https://1143-71-232-162-30.ngrok.io/comp', {
>>>>>>> 75e6e2c711c04e99c2389a9c9f8e0f7a4f7b068c
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      agent: httpsAgent
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
      })
  }
})

// export const {} = championsSlice.actions

export default championsSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

export const settingsSlice = createSlice({
  name: 'theme',
  initialState: {
    id: 0
  },
  reducers: {
    toggleTheme: (state) => {
      state.id = state.id === 1 ? 0 : 1
    }
  }
})

export const { toggleTheme } = settingsSlice.actions
export default settingsSlice.reducer

import { configureStore } from '@reduxjs/toolkit'
import counter from 'slices/counter/counterSlice'
import filters from 'slices/filtersSlice'
import champions from 'slices/championsSlice'
import theme from 'slices/themeSlice'

export const store = configureStore({
  reducer: {
    counter,
    filters,
    champions,
    theme
  }
})

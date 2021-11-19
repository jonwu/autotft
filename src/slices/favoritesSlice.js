import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: { data: [] },
  reducers: {
    addFavorite: (state, action) => {
      state.data = [...state.data, action.payload]
    },
    deleteFavorite: (state, action) => {
      state.data = state.data.filter(
        (v) => JSON.stringify(v) !== JSON.stringify(action.payload)
      )
    },
    toggleFavorite: (state, action) => {
      const found = state.data.find((v) => {
        return JSON.stringify(v) === JSON.stringify(action.payload)
      })
      if (found == null) {
        state.data = [...state.data, action.payload]
      } else {
        state.data = state.data.filter(
          (v) => JSON.stringify(v) !== JSON.stringify(action.payload)
        )
      }
    }
  }
})

export const useHasFavorite = (item) => {
  return useSelector((state) => {
    return state.favorites.data.find((v) => {
      return JSON.stringify(v) === JSON.stringify(item)
    })
  })
}

export const useFavoriteCount = () => {
  return useSelector((state) => {
    return state.favorites.data.length
  })
}
export const { toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer

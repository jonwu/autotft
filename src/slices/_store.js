import { configureStore } from '@reduxjs/toolkit'
import counter from 'slices/counter/counterSlice'
import filters from 'slices/filtersSlice'
import champions from 'slices/championsSlice'
import theme from 'slices/themeSlice'
import favorites from 'slices/favoritesSlice'
import { combineReducers } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'

import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites']
}

const reducer = combineReducers({
  counter,
  filters,
  champions,
  theme,
  favorites
})
const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)

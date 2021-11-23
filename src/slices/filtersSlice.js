import { createSlice } from '@reduxjs/toolkit'
import champions from 'constants/champions.json'

const champs = Object.entries(champions)

export const getCostUnits = (cost) => {
  return champs
    .filter(([key, data]) => data.cost === cost)
    .map(([key, data]) => key)
}

const initialState = {
  level: 5, // 3-9
  exclude: [...getCostUnits(5), ...getCostUnits(4)],
  include: [],
  isFavorite: false
}

const checkAll = (arr, target) => target.every((v) => arr.includes(v))

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    selectLevel: (state, action) => {
      state.level = action.payload

      switch (action.payload) {
        case 4:
          state.exclude = [...getCostUnits(5), ...getCostUnits(4)].filter(
            (v) => !state.include.includes(v)
          )
          break
        case 5:
          state.exclude = [...getCostUnits(5), ...getCostUnits(4)].filter(
            (v) => !state.include.includes(v)
          )
          break
        case 6:
        case 7:
        case 8:
          state.exclude = []
          break
      }
    },
    toggleIsFavorite: (state) => {
      state.isFavorite = !state.isFavorite
    },
    clearExclude: (state) => {
      state.exclude = []
    },
    clearInclude: (state) => {
      state.include = []
    },
    addManyExclude: (state, action) => {
      if (checkAll(state.exclude, action.payload)) {
        action.payload.forEach((payload) => {
          state.exclude = state.exclude.filter((value) => value != payload)
        })
      } else {
        action.payload.forEach((payload) => {
          if (state.exclude.includes(payload)) return
          state.include = state.include.filter((value) => value != payload)
          state.exclude = [...state.exclude, payload]
        })
      }
    },
    addExclude: (state, action) => {
      if (state.exclude.includes(action.payload)) return
      state.include = state.include.filter((value) => value != action.payload)
      state.exclude = [...state.exclude, action.payload]
    },
    removeExclude: (state, action) => {
      state.exclude = state.exclude.filter((value) => value != action.payload)
    },
    toggleExclude: (state, action) => {
      if (state.exclude.includes(action.payload)) {
        state.exclude = state.exclude.filter((value) => value != action.payload)
      } else {
        state.include = state.include.filter((value) => value != action.payload)
        state.exclude = [...state.exclude, action.payload]
      }
    },
    toggleInclude: (state, action) => {
      if (state.include.includes(action.payload)) {
        state.include = state.include.filter((value) => value != action.payload)
      } else {
        state.exclude = state.exclude.filter((value) => value != action.payload)
        state.include = [...state.include, action.payload]
      }
    },
    addInclude: (state, action) => {
      if (state.include.includes(action.payload)) return
      state.exclude = state.exclude.filter((value) => value != action.payload)
      state.include = [...state.include, action.payload]
    },
    removeInclude: (state, action) => {
      state.include = state.include.filter((value) => value != action.payload)
    }
  }
})

export const {
  selectLevel,
  addExclude,
  removeExclude,
  addInclude,
  removeInclude,
  toggleInclude,
  toggleExclude,
  toggleIsFavorite,
  addManyExclude,
  clearExclude,
  clearInclude
} = filtersSlice.actions

export default filtersSlice.reducer

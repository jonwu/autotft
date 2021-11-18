import { createSlice } from '@reduxjs/toolkit'
import champions from 'constants/champions.json'

const champs = Object.entries(champions)

const getCostUnits = (cost) => {
  return champs
    .filter(([key, data]) => data.cost === cost)
    .map(([key, data]) => key)
}

const initialState = {
  level: 5, // 3-9
  exclude: [...getCostUnits(5), ...getCostUnits(4)],
  include: []
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    selectLevel: (state, action) => {
      state.level = action.payload

      switch (action.payload) {
        case 4:
          state.exclude = [
            ...getCostUnits(5),
            ...getCostUnits(4),
            ...getCostUnits(3)
          ]
          break
        case 5:
        case 6:
          state.exclude = [...getCostUnits(5), ...getCostUnits(4)]
          break
        case 7:
          state.exclude = [...getCostUnits(1)]
          break
        case 8:
          state.exclude = [...getCostUnits(1), ...getCostUnits(2)]
          break
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
  toggleExclude
} = filtersSlice.actions

export default filtersSlice.reducer

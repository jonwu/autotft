import React from 'react'
import View from 'uikit/View'
import { useThemeKit } from 'hooks/useThemeKit'
import ListView from 'uikit/ListView'
import TouchableOpacity from 'uikit/TouchableOpacity'
import { selectLevel } from 'slices/filtersSlice'
import { useDispatch, useSelector } from 'react-redux'

const LEVELS = [4, 5, 6, 7, 8]

const LevelItem = ({ value }) => {
  const { theme, gstyles } = useThemeKit()
  const level = useSelector((state) => state.filters.level)
  const isSelected = level === value
  const dispatch = useDispatch()
  return (
    <TouchableOpacity
      onClick={() => {
        dispatch(selectLevel(value))
      }}
    >
      <View
        style={{
          minWidth: 100,
          paddingTop: theme.spacing_4,
          paddingBottom: theme.spacing_4,
          paddingLeft: theme.spacing_2,
          backgroundColor: isSelected ? theme.red(0.75) : undefined,
          // alignItems: 'center'
          justifyContent: 'center'
        }}
      >
        <div
          style={{ ...gstyles.p1, color: theme.text() }}
        >{`Level ${value}`}</div>
      </View>
    </TouchableOpacity>
  )
}
const Levels = () => {
  const { theme, gstyles } = useThemeKit()
  return (
    <ListView
      data={LEVELS}
      renderItem={(item) => <LevelItem value={item} />}
      renderSeparatorComponent={() => (
        <div style={{ height: 1, backgroundColor: theme.text(0.15) }} />
      )}
    />
  )
}

export default Levels

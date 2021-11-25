import React from 'react'
import View from 'uikit/View'
import { useThemeKit } from 'hooks/useThemeKit'
import synergies from 'constants/synergies.json'
import ListView from 'uikit/ListView'
import lodash from 'lodash'
import TouchableOpacity from 'uikit/TouchableOpacity'
import { useDispatch } from 'react-redux'

const TraitItem = ({ item, selected, add, remove }) => {
  const { theme, gstyles } = useThemeKit()
  const [name, count] = item
  const isSelected = selected.includes(name)
  const dispatch = useDispatch()
  return (
    <TouchableOpacity
      onClick={() => {
        if (isSelected) {
          dispatch(remove(name))
        } else {
          dispatch(add(name))
        }
      }}
    >
      <View
        style={{
          padding: theme.spacing_2,
          backgroundColor: isSelected ? theme.red() : undefined
        }}
      >
        <div
          style={{
            ...gstyles.p1,
            color: isSelected ? theme.light() : theme.text()
          }}
        >
          {name}
        </div>
      </View>
    </TouchableOpacity>
  )
}
const Traits = ({ selected, add, remove }) => {
  const { theme, gstyles } = useThemeKit()
  const data = Object.entries(synergies).sort()
  const chunks = lodash.chunk(data, data.length / 4)
  console.log(chunks)

  return (
    <ListView
      data={chunks}
      horizontal
      renderSeparatorComponent={() => (
        <div style={{ width: 1, backgroundColor: theme.text(0.15) }} />
      )}
      renderItem={(row) => (
        <ListView
          data={row}
          renderSeparatorComponent={() => (
            <div style={{ height: 1, backgroundColor: theme.text(0.15) }} />
          )}
          renderItem={(item) => (
            <TraitItem
              item={item}
              selected={selected}
              add={add}
              remove={remove}
            />
          )}
        />
      )}
    />
  )
}

export default Traits

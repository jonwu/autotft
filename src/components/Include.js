import React from 'react'
import lodash from 'lodash'
import View from 'uikit/View'
import { useThemeKit } from 'hooks/useThemeKit'
import champions from 'constants/champions.json'
import ListView from 'uikit/ListView'
import TouchableOpacity from 'uikit/TouchableOpacity'
import { useDispatch } from 'react-redux'

const Item = ({ item, add, remove, selected }) => {
  const { theme, gstyles } = useThemeKit()
  const [name, data] = item
  let color = undefined
  switch (data.cost) {
    case 1:
      color = theme.lightgray()
      break
    case 2:
      color = theme.green(0.5)
      break
    case 3:
      color = theme.blue(0.5)
      break
    case 4:
      color = theme.blurple(0.5)
      break
    case 5:
      color = theme.yellow(0.5)
      break
    default:
      break
  }
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
          alignItems: 'center',
          justifyContent: 'center',
          width: 64,
          height: 64,
          padding: theme.spacing_4,
          paddingTop: theme.spacing_2,
          backgroundColor: isSelected ? theme.red(0.75) : undefined
        }}
      >
        <img
          src={data.img}
          style={{
            height: 50,
            width: 50,
            backgroundColor: theme.bg2(),
            ...gstyles.border,
            borderWidth: 1,
            borderColor: color
          }}
        />
        <div style={{ ...gstyles.footnote, color: theme.text() }}>{name}</div>
      </View>
    </TouchableOpacity>
  )
}
const Row = ({ item, add, remove, selected }) => {
  const { theme, gstyles } = useThemeKit()

  return (
    <ListView
      horizontal
      data={item}
      renderItem={(item) => (
        <Item item={item} add={add} remove={remove} selected={selected} />
      )}
    />
  )
}
const Include = ({ add, remove, selected }) => {
  const data = Object.entries(champions)
    .sort()
    .sort((a, b) => a[1].cost - b[1].cost)

  const chunks = lodash.chunk(data, 10)
  const { theme, gstyles } = useThemeKit()

  return (
    <ListView
      data={chunks}
      renderItem={(item) => (
        <Row item={item} add={add} remove={remove} selected={selected} />
      )}
    />
  )
}

export default Include

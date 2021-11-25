import React from 'react'
import lodash from 'lodash'
import View from 'uikit/View'
import { useThemeKit } from 'hooks/useThemeKit'
import champions from 'constants/champions.json'
import ListView from 'uikit/ListView'
import TouchableOpacity from 'uikit/TouchableOpacity'
import { useDispatch } from 'react-redux'
import { addManyExclude, clearExclude, getCostUnits } from 'slices/filtersSlice'

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
          backgroundColor: isSelected ? theme.red() : undefined
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
        <div
          style={{
            ...gstyles.footnote,
            color: isSelected ? theme.light() : theme.text()
          }}
        >
          {name}
        </div>
      </View>
    </TouchableOpacity>
  )
}

const HeaderItem = ({ text, onClick }) => {
  const { theme, gstyles } = useThemeKit()
  return (
    <TouchableOpacity
      onClick={onClick}
      style={{
        margin: theme.spacing_3
      }}
    >
      <View>
        <div
          style={{
            ...gstyles.p1_semibold,
            color: theme.red(),
            textDecoration: 'underline'
          }}
        >
          {text}
        </div>
      </View>
    </TouchableOpacity>
  )
}
const Header = () => {
  const { theme, gstyles } = useThemeKit()
  const dispatch = useDispatch()
  return (
    <View row style={{ alignSelf: 'flex-end' }}>
      <HeaderItem
        text={'1 Cost'}
        onClick={() => dispatch(addManyExclude(getCostUnits(1)))}
      />
      <HeaderItem
        text={'2 Cost'}
        onClick={() => dispatch(addManyExclude(getCostUnits(2)))}
      />
      <HeaderItem
        text={'3 Cost'}
        onClick={() => dispatch(addManyExclude(getCostUnits(3)))}
      />
      <HeaderItem
        text={'4 Cost'}
        onClick={() => dispatch(addManyExclude(getCostUnits(4)))}
      />
      <HeaderItem
        text={'5 Cost'}
        onClick={() => dispatch(addManyExclude(getCostUnits(5)))}
      />
      <HeaderItem text={'Clear All'} onClick={() => dispatch(clearExclude())} />
    </View>
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
const Include = ({ add, remove, selected, isExclude }) => {
  const data = Object.entries(champions)
    .sort()
    .sort((a, b) => a[1].cost - b[1].cost)

  const chunks = lodash.chunk(data, 10)
  const { theme, gstyles } = useThemeKit()

  return (
    <ListView
      data={chunks}
      renderHeaderComponent={() => {
        if (!isExclude) return null
        return <Header />
      }}
      renderItem={(item) => (
        <Row item={item} add={add} remove={remove} selected={selected} />
      )}
    />
  )
}

export default Include

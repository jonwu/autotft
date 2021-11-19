import React from 'react'
import lodash from 'lodash'
import View from 'uikit/View'
import ListView from 'uikit/ListView'
import { useThemeKit } from 'hooks/useThemeKit'
import champions from 'constants/champions.json'
import synergies from 'constants/synergies.json'
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu'
import TouchableOpacity from 'uikit/TouchableOpacity'
import {
  addExclude,
  addInclude,
  toggleExclude,
  toggleInclude
} from 'slices/filtersSlice'
import { useDispatch, useSelector } from 'react-redux'

import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import { toggleFavorite, useHasFavorite } from 'slices/favoritesSlice'
const Menu = ({ id, item }) => {
  const { theme, gstyles } = useThemeKit()
  return (
    <ContextMenu id={id}>
      <View style={{ ...gstyles.card }}>
        <View>
          <div style={{ ...gstyles.p1, color: theme.text() }}>hi</div>
        </View>
        <MenuItem data={{ foo: 'bar' }} onClick={() => {}}>
          ContextMenu Item 2
        </MenuItem>
        <MenuItem divider />
        <MenuItem data={{ foo: 'bar' }} onClick={() => {}}>
          ContextMenu Item 3
        </MenuItem>
      </View>
    </ContextMenu>
  )
}

const ChampionItemOption = ({ text, onClick }) => {
  const { theme, gstyles } = useThemeKit()

  return (
    <TouchableOpacity onClick={onClick}>
      <View style={{ padding: theme.spacing_5, width: 100 }}>
        <div style={{ ...gstyles.footnote, color: theme.text() }}>{text}</div>
      </View>
    </TouchableOpacity>
  )
}
const ChampionItem = ({ item }) => {
  const { theme, gstyles } = useThemeKit()
  if (champions[item] == null) return
  const [isHover, setIsHover] = React.useState(false)
  const dispatch = useDispatch()
  const hasInclude = useSelector((state) =>
    state.filters.include.includes(item)
  )
  const hasExclude = useSelector((state) =>
    state.filters.exclude.includes(item)
  )
  return (
    <View
      style={{ position: 'relative' }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 50
        }}
      >
        <img
          src={champions[item].img}
          style={{ width: 40, height: 40, borderRadius: 40 }}
        />
        <div
          style={{
            ...gstyles.footnote,
            color: theme.text(),
            overflow: 'hidden',
            whiteSpace: 'nowrap'
          }}
        >
          {item}
        </div>
      </View>

      {isHover && (
        <View
          style={{
            zIndex: 2,
            padding: 0,
            position: 'absolute',
            paddingLeft: 0,
            top: 50,
            paddingTop: 8
          }}
        >
          <View style={{ ...gstyles.card, padding: 0 }}>
            <ChampionItemOption
              text={`Include ${item} ${hasInclude ? ' (Remove)' : ''}`}
              onClick={() => {
                dispatch(toggleInclude(item))
                setIsHover(false)
              }}
            />
            <div style={{ height: 1, backgroundColor: theme.text(0.15) }} />
            <ChampionItemOption
              text={`Exclude ${item} ${hasExclude ? ' (Remove)' : ''}`}
              onClick={() => {
                dispatch(toggleExclude(item))
                setIsHover(false)
              }}
            />
            <div style={{ height: 1, backgroundColor: theme.text(0.15) }} />
            <div
              style={{
                ...gstyles.footnote,
                color: theme.text(0.5),
                padding: theme.spacing_5
              }}
            >
              {champions[item].traits.join('/')}
            </div>
          </View>
        </View>
      )}
    </View>
  )
}

const Favorites = ({ item }) => {
  const { theme, gstyles } = useThemeKit()
  const hasFavorite = useHasFavorite(item)

  const dispatch = useDispatch()
  return (
    <TouchableOpacity
      onClick={() => {
        dispatch(toggleFavorite(item))
      }}
      style={{ paddingLeft: theme.spacing_2, paddingTop: theme.spacing_5 }}
    >
      {hasFavorite ? (
        <MdOutlineFavorite size={24} color={theme.red()} />
      ) : (
        <MdOutlineFavoriteBorder size={24} color={theme.text(0.1)} />
      )}
    </TouchableOpacity>
  )
}
const Cell = ({ item }) => {
  const { theme, gstyles } = useThemeKit()

  const reducedTraits = item.reduce((data, value) => {
    if (champions[value] == null) return data
    const { traits } = champions[value]
    if (traits == null) return data

    traits.forEach((trait) => {
      if (data[trait]) {
        data[trait] += 1
      } else {
        data[trait] = 1
      }
    })

    return data
  }, {})

  const sortedTraits = Object.entries(reducedTraits)
    .filter(([key, value]) => value >= synergies[key])
    .sort(function (a, b) {
      return b[1] - a[1]
    })

  const chunksTrait = lodash.chunk(sortedTraits, 5)
  return (
    <View style={{ padding: theme.spacing_2 }} row>
      <ListView
        data={item}
        horizontal
        renderSeparatorComponent={() => {
          return <div style={{ width: theme.spacing_3 }} />
        }}
        renderItem={(item, i) => {
          const id = `${item} - ${i}`
          return <ChampionItem item={item} />
        }}
      />
      <div style={{ flex: 1 }} />
      <ListView
        data={chunksTrait}
        style={{ alignItems: 'flex-end' }}
        renderItem={(item, x) => {
          return (
            <ListView
              data={item}
              horizontal
              renderSeparatorComponent={() => {
                return <div style={{ width: theme.spacing_2 }} />
              }}
              renderItem={(data, i) => {
                const [trait, count] = data
                let testStyle = gstyles.caption
                let textColor = theme.text()
                if (x === 0 && i <= 1) {
                  testStyle = gstyles.p1_semibold
                }
                if (x > 0) {
                  textColor = theme.text(0.5)
                  testStyle = gstyles.footnote
                }

                return (
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <div
                      style={{
                        ...testStyle,
                        color: textColor,
                        overflow: 'hidden',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {count} {trait}
                    </div>
                  </View>
                )
              }}
            />
          )
        }}
      />
      <Favorites item={item} />
    </View>
  )
}

export default Cell

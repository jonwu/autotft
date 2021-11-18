import React from 'react'
import View from 'uikit/View'
import lodash from 'lodash'
import { useThemeKit } from 'hooks/useThemeKit'
import TouchableOpacity from 'uikit/TouchableOpacity'
import { toggleTheme } from 'slices/themeSlice'
import { useDispatch, useSelector } from 'react-redux'
import Container from 'uikit/Container'
import ListView from 'uikit/ListView'
import './App.css'

import Levels from 'components/Levels'
import Include from 'components/Include'
import Button from 'uikit/Button'
import {
  addExclude,
  removeExclude,
  addInclude,
  removeInclude
} from 'slices/filtersSlice'
import champions from 'constants/champions.json'
import synergies from 'constants/synergies.json'
import { fetchChampionAsync } from 'slices/championsSlice'

const App = () => {
  const { theme, gstyles } = useThemeKit()
  const dispatch = useDispatch()
  React.useEffect(() => {
    document.body.style.backgroundColor = theme.bg()
  }, [theme])

  React.useEffect(() => {
    dispatch(fetchChampionAsync())
  }, [])

  return (
    <View
      style={{
        backgroundColor: theme.bg(),
        height: '100vh',
        alignItems: 'center',
        paddingTop: 100
      }}
    >
      <View style={{ width: 1080, backgroundColor: theme.bg() }}>
        <Filters />
      </View>
      <View
        style={{ width: 1080, backgroundColor: theme.bg2(), borderRadius: 4 }}
      >
        <Results />
      </View>
    </View>
  )
}

const FilterOption = ({ text, toggledText, setToggleText, content, id }) => {
  const { theme, gstyles } = useThemeKit()
  const toggled = toggledText === id
  return (
    <View style={{ zIndex: 1 }}>
      <TouchableOpacity onClick={() => setToggleText(toggled ? null : id)}>
        <View
          style={{
            ...gstyles.card,
            backgroundColor: theme.bg2(),
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing_4,
            marginRight: theme.spacing_2
          }}
        >
          <div style={{ ...gstyles.p1, color: theme.text() }}>{text}</div>
        </View>
      </TouchableOpacity>
      {toggled && (
        <>
          <View style={{ position: 'relative' }}>
            <View
              style={{
                ...gstyles.card,
                padding: 0,
                position: 'absolute',
                top: theme.spacing_4
              }}
            >
              {content}
            </View>
          </View>
        </>
      )}
    </View>
  )
}
const Filters = () => {
  const { theme, gstyles } = useThemeKit()
  const [toggledText, setToggleText] = React.useState(null)
  const dispatch = useDispatch()
  const include = useSelector((state) => state.filters.include)
  const exclude = useSelector((state) => state.filters.exclude)
  const level = useSelector((state) => state.filters.level)
  const status = useSelector((state) => state.champions.status)

  const includeStr = include.length === 0 ? '' : ` (${include.length})`
  const excludeStr = exclude.length === 0 ? '' : ` (${exclude.length})`
  return (
    <>
      {toggledText != null && (
        <View
          onClick={() => setToggleText(null)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
          }}
        />
      )}
      <View
        row
        style={{
          paddingTop: theme.spacing_4,
          paddingBottom: theme.spacing_4
        }}
      >
        <FilterOption
          id={'level'}
          text={`Level ${level}`}
          toggledText={toggledText}
          setToggleText={setToggleText}
          content={<Levels />}
        />
        <FilterOption
          id={'include'}
          text={`Choose Carry Champions${includeStr}`}
          toggledText={toggledText}
          setToggleText={setToggleText}
          content={
            <Include
              selected={include}
              add={addInclude}
              remove={removeInclude}
            />
          }
        />
        <FilterOption
          id={'exclude'}
          text={`Exclude Champions${excludeStr}`}
          toggledText={toggledText}
          setToggleText={setToggleText}
          content={
            <Include
              selected={exclude}
              add={addExclude}
              remove={removeExclude}
            />
          }
        />
        <View style={{ flex: 1 }} />
        <Button
          disabled={status === 'loading'}
          onClick={() => {
            dispatch(fetchChampionAsync())
          }}
          style={{ backgroundColor: theme.red(), borderRadius: 4 }}
          text={'update'}
          small
        />
        {/* <FilterOption
          text={'+ Augment'}
          toggledText={toggledText}
          setToggleText={setToggleText}
        />
        <FilterOption
          text={'Synergy Cap: No Limit'}
          toggledText={toggledText}
          setToggleText={setToggleText}
        /> */}
      </View>
    </>
  )
}
const Results = () => {
  const champions = useSelector((state) => state.champions.data)

  if (champions == null) return null
  // console.log(champions)
  return (
    <ListView data={champions} renderItem={(item) => <Cell item={item} />} />
  )
}

const traitsMap = {
  academy: {
    name: 'Academy',
    img: 'https://lolchess.gg/images/tft/traiticons-white/6.0/Academy.svg'
  },
  bodyguard: {
    name: 'Bodyguard',
    img: 'https://lolchess.gg/images/tft/traiticons-white/6.0/Bodyguard.svg'
  },
  brusier: {
    name: 'Brusier',
    img: 'https://lolchess.gg/images/tft/traiticons-white/6.0/Bruiser.svg'
  },
  protector: {
    name: 'Protector',
    img: 'https://lolchess.gg/images/tft/traiticons-white/6.0/Protector.svg'
  },
  scrap: {
    name: 'Scrap',
    img: 'https://lolchess.gg/images/tft/traiticons-white/6.0/Scrap.svg'
  }
}
const map = {
  katarina: {
    name: 'Katarina',
    img: '//cdn.lolchess.gg/upload/images/champions/Katarina_1634785266.png'
  },
  darius: {
    name: 'Darius',
    img: '//cdn.lolchess.gg/upload/images/champions/Darius_1634784329.png'
  },
  blitzcrank: {
    name: 'Blitzcrank',
    img: '//ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Blitzcrank.png'
  },
  garen: {
    name: 'Garen',
    img: '//cdn.lolchess.gg/upload/images/champions/Garen_1634784140.png'
  },
  ekko: {
    name: 'Ekko',
    img: '//ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/Ekko.png'
  }
}

const Cell = ({ item }) => {
  const { theme, gstyles } = useThemeKit()

  const reducedTraits = item.reduce((data, value) => {
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
        renderItem={(key) => {
          // const champ = map[key]
          return (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 50
              }}
            >
              <img
                src={champions[key].img}
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
                {key}
              </div>
            </View>
          )
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
                      // height: 100,
                      // width: 64,
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {/* <img style={{ width: 25, height: 25 }} /> */}
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
    </View>
  )
}
export default App

import React from 'react'
import View from 'uikit/View'
import ListView from 'uikit/ListView'
import { useThemeKit } from 'hooks/useThemeKit'
import TouchableOpacity from 'uikit/TouchableOpacity'
import { toggleTheme } from 'slices/themeSlice'
import { useDispatch, useSelector } from 'react-redux'

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

import { fetchChampionAsync } from 'slices/championsSlice'
import Cell from 'components/Cell'

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
      </View>
    </>
  )
}
const Results = () => {
  const champions = useSelector((state) => state.champions.data)
  const { theme, gstyles } = useThemeKit()

  if (champions == null) return null
  return (
    <ListView
      data={champions}
      renderItem={(item) => <Cell item={item} />}
      renderSeparatorComponent={() => (
        <div style={{ height: 1, backgroundColor: theme.text(0.05) }} />
      )}
    />
  )
}

export default App

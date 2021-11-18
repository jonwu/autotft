import React from 'react'
import View from 'uikit/View'
import { useThemeKit } from 'hooks/useThemeKit'

const Container = ({ left, right, mid }) => {
  const { theme } = useThemeKit()
  return (
    <View
      row
      style={{
        justifyContent: 'center'
      }}
    >
      <View row style={{ width: 1080 + 360 }}>
        {left && (
          <View
            style={{
              width: 360,
              padding: theme.spacing_2 + theme.spacing_1,
              boxSizing: 'border-box'
            }}
          >
            {left}
          </View>
        )}
        <View
          style={{
            maxWidth: 1080,
            position: 'relative',
            flex: 1,
            padding: theme.spacing_2 + theme.spacing_1,
            boxSizing: 'border-box'
          }}
        >
          {mid}
        </View>
        {right && (
          <View
            style={{
              width: 360,
              padding: theme.spacing_2 + theme.spacing_1,
              boxSizing: 'border-box',
              position: 'relative'
            }}
          >
            {right}
          </View>
        )}
      </View>
    </View>
  )
}

export const MidContainer = ({ children }) => {
  const { theme } = useThemeKit()
  return (
    <View
      row
      style={{
        justifyContent: 'center'
      }}
    >
      <View
        style={{
          width: 1080,
          padding: theme.spacing_2 + theme.spacing_1,
          boxSizing: 'border-box'
        }}
      >
        {children}
      </View>
    </View>
  )
}

export default Container

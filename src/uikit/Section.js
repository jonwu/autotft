import React from 'react'
import View from 'uikit/View'
import { useThemeKit } from 'hooks/useThemeKit'

const Section = ({ text, description, bold, line }) => {
  const { theme, gstyles } = useThemeKit()
  const textStyles = bold ? gstyles.p1_semibold : gstyles.p1
  return (
    <View style={{ marginBottom: theme.spacing_1 }}>
      <View style={{ alignSelf: 'flex-start' }}>
        <div
          style={{
            ...gstyles.h3_bold,
            color: theme.text(0.8),
            paddingRight: theme.spacing_1
          }}
        >
          {text}
        </div>
      </View>
      {description && (
        <div
          style={{
            ...textStyles,
            color: theme.text(0.8),
            marginTop: theme.spacing_2
          }}
        >
          {description}
        </div>
      )}
    </View>
  )
}

export default Section

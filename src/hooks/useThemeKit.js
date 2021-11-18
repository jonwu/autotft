import React from 'react'
import { ThemeContext } from 'uikit/ThemeProvider'

export const useThemeKit = () => {
  const { theme, gstyles } = React.useContext(ThemeContext)
  return {
    theme,
    gstyles
  }
}

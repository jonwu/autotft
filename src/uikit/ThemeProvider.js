import React from 'react'
import Themes from 'utils/theme'
import generateGlobalStyles from 'utils/gstyles'
import { useSelector } from 'react-redux'

export const ThemeContext = React.createContext({
  theme: null,
  gstyles: null
})

const ThemeProvider = ({ children }) => {
  const themeId = useSelector((state) => state.theme.id)
  const theme = Themes[themeId]
  const gstyles = generateGlobalStyles(theme)
  return (
    <ThemeContext.Provider value={{ theme, gstyles }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

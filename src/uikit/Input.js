import React from 'react'
import { useThemeKit } from 'hooks/useThemeKit'
import styles from './Input.module.css'

const Input = ({ style, ...props }) => {
  const { theme, gstyles } = useThemeKit()
  return (
    <input
      className={styles.input}
      style={{
        paddingTop: theme.spacing_4,
        paddingBottom: theme.spacing_4,
        paddingLeft: theme.spacing_2,
        paddingRight: theme.spacing_2,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: theme.text(0.1),
        borderRadius: 8,
        backgroundColor: theme.bg3(),
        color: theme.text(),
        ...gstyles.p1,
        ...style
      }}
      {...props}
    />
  )
}

export default Input

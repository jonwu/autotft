import React from 'react'
import { useThemeKit } from 'hooks/useThemeKit'
import styles from './Input.module.css'

const TextArea = React.forwardRef(({ style, ...props }, ref) => {
  const { theme, gstyles } = useThemeKit()
  return (
    <textarea
      type="text"
      ref={ref}
      className={styles.textarea}
      style={{
        paddingTop: theme.spacing_4,
        paddingBottom: theme.spacing_4,
        paddingLeft: theme.spacing_2,
        paddingRight: theme.spacing_2,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: theme.text(0.1),
        borderRadius: 8,
        color: theme.text(),
        resize: 'none',
        fontFamily: 'inherit',
        backgroundColor: theme.bg3(),
        ...gstyles.p1,
        ...style
      }}
      {...props}
    />
  )
})

export default TextArea

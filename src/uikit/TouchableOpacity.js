import React from 'react'
import View from 'uikit/View'
import styles from './TouchableOpacity.module.css'

const TouchableOpacity = ({ children, disabled, style, to, ...props }) => {
  const tranformedProps = {
    'aria-disabled': disabled,
    className: disabled ? undefined : styles.touchable,
    style: {
      cursor: disabled ? 'auto' : 'pointer',
      opacity: disabled ? 0.1 : undefined,
      textDecoration: 'none',
      ...style
    },
    ...props
  }
  return <a {...tranformedProps}>{children}</a>
}

export default TouchableOpacity

import React from 'react'
import View from 'uikit/View'
import { useThemeKit } from 'hooks/useThemeKit'
import TouchableOpacity from './TouchableOpacity'

const Button = ({
  style,
  text,
  onClick,
  disabled,
  to,
  small,
  left,
  textStyle,
  ...props
}) => {
  const { theme, gstyles } = useThemeKit()
  const ogTextStyle = small ? gstyles.p1_bold : gstyles.p1_bold
  return (
    <TouchableOpacity disabled={disabled} onClick={onClick} to={to}>
      <View
        row
        style={{
          alignSelf: 'flex-start',
          alignItems: 'center',
          justifyContent: 'center',
          height: small ? 40 : 64,
          paddingLeft: theme.spacing_2,
          paddingRight: theme.spacing_2,
          // borderRadius: 4,
          backgroundColor: theme.red(),
          ...style
        }}
        {...props}
      >
        {left && <div style={{ marginRight: theme.spacing_4 }}>{left}</div>}
        <div style={{ ...ogTextStyle, color: theme.light(), ...textStyle }}>
          {text.toUpperCase()}
        </div>
      </View>
    </TouchableOpacity>
  )
}

export default Button

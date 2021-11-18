import React from 'react'

const View = ({ style, row, children, ...props }) => {
  const flexStyle = {
    display: 'flex',
    flexDirection: row ? 'row' : 'column'
  }
  return (
    <div {...props} style={{ ...flexStyle, ...style }}>
      {children}
    </div>
  )
}

export default View

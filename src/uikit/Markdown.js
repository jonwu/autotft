import React from 'react'
import { useThemeKit } from 'hooks/useThemeKit'
import ReactMarkdown from 'react-markdown'
import './Markdown.module.css'

const Markdown = ({ children }) => {
  const { theme, gstyles } = useThemeKit()

  const renderers = {
    paragraph: theme.id === 0 ? 'p1' : 'p2'
  }

  return (
    <ReactMarkdown className={'line-break'} renderers={renderers}>
      {children}
    </ReactMarkdown>
  )
}

export default Markdown

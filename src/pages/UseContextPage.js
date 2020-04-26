import React, { useContext } from 'react'
import { ThemeContext } from '../Context'
export default function UseContextPage(props) {
  const { themeColor } = useContext(ThemeContext)
  return (
    <div>
      <p className={themeColor}>UseContextPage</p>
    </div>
  )
}

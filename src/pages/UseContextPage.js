import React, { useContext } from 'react'
import { ThemeContext, UserContext } from '../Context'
export default function UseContextPage(props) {
  const { themeColor } = useContext(ThemeContext)
  const { name } = useContext(UserContext)
  return (
    <div>
      <p className={themeColor}>UseContextPage</p>
      <p>姓名:{name}</p>
    </div>
  )
}

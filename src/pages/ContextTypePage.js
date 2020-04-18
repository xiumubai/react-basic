import React, { Component } from 'react'
const ThemeContext = React.createContext()

class ContextTypePage extends Component {
  static contextType = ThemeContext
  render() {
    const { themeColor } = this.context || {}
    console.log(themeColor)

    return <div className={themeColor}>ContextTypePage</div>
  }
}

export default ContextTypePage

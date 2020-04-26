import React, { Component } from 'react'
import { ThemeContext } from '../Context'
class ContextTypePage extends Component {
  static contextType = ThemeContext
  render() {
    console.log(this)
    // const { themeColor } = this.props
    const { themeColor } = this.context

    return <div className={themeColor}>ContextTypePage</div>
  }
}

export default ContextTypePage

import React, { Component } from 'react'
import { ThemeContext } from '../Context'
class ContextTypePage extends Component {
  // 用创建的Context申明一下type
  static contextType = ThemeContext
  render() {
    console.log(this)
    // const { themeColor } = this.props
    // 可以在this.context中获取传递的值
    const { themeColor } = this.context

    return <div className={themeColor}>ContextTypePage</div>
  }
}

export default ContextTypePage

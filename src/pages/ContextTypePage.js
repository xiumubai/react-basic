import React, { Component } from 'react'

class ContextTypePage extends Component {
  render() {
    const { themeColor } = this.props

    return <div className={themeColor}>ContextTypePage</div>
  }
}

export default ContextTypePage

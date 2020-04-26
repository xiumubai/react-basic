import React, { Component } from 'react'
import ContextTypePage from './ContextTypePage'

class ContextPages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: {
        themeColor: 'red',
      },
    }
  }
  render() {
    const { theme } = this.state

    return (
      <div>
        <h3>ContextPages</h3>
        <ContextTypePage {...theme} />
      </div>
    )
  }
}

export default ContextPages

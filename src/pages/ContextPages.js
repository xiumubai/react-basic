import React, { Component } from 'react'
import ContextTypePage from './ContextTypePage'
import UseContextPage from './UseContextPage'
import { ThemeContext } from '../Context'

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
        {/* <ContextTypePage {...theme} /> */}
        {/* 使用Context.Provider传递值 */}
        <ThemeContext.Provider value={theme}>
          <ContextTypePage />
          <UseContextPage />
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default ContextPages

import React, { Component } from 'react'
import ContextTypePage from './ContextTypePage'
import UseContextPage from './UseContextPage'
import Consumerpage from './Consumerpage'
import { ThemeContext, UserContext } from '../Context'

class ContextPages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: {
        themeColor: 'red',
      },
      user: {
        name: 'janney',
      },
    }
  }
  render() {
    const { theme, user } = this.state

    return (
      <div>
        <h3>ContextPages</h3>
        {/* <ContextTypePage {...theme} /> */}
        {/* 使用Context.Provider传递值 */}
        <ThemeContext.Provider value={theme}>
          <UserContext.Provider value={user}>
            <ContextTypePage />
            <UseContextPage />
            <Consumerpage />
          </UserContext.Provider>
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default ContextPages

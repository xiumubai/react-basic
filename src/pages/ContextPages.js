import React, { Component } from 'react'
import ContextTypePage from './ContextTypePage'
const ThemeContext = React.createContext()

class ContextPages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      themeColor: 'red',
    }
  }
  render() {
    const { themeColor } = this.state

    return (
      <div>
        {/* <ContextTypePage {...themeColor} /> */}
        <ThemeContext.Provider value={themeColor}>
          <ContextTypePage />
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default ContextPages

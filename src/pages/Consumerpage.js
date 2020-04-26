import React, { Component } from 'react'
import { ThemeContext, UserContext } from '../Context'

class Consumerpage extends Component {
  render() {
    return (
      <div>
        <ThemeContext.Consumer>
          {(theme) => (
            <div className={theme.themeColor}>
              {
                <UserContext.Consumer>
                  {(user) => <p>{user.name}</p>}
                </UserContext.Consumer>
              }
            </div>
          )}
        </ThemeContext.Consumer>
      </div>
    )
  }
}

export default Consumerpage

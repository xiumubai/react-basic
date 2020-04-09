import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class RouterPage extends Component {
  render() {
    return (
      <div>
        <h3>RouterPage</h3>
        <Router>
          <Link to='/'>home</Link>&nbsp;<Link to='/user'>user</Link>
          <Switch>
            <Route
              exact
              path='/'
              component={Home}
              // children={() => <div>children</div>}
              // render={() => <div>render</div>}
            />
            <Route path='/user' component={User} />
            <Route component={Empty} />
          </Switch>
        </Router>
      </div>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        <h3>Home</h3>
      </div>
    )
  }
}

class User extends Component {
  render() {
    return (
      <div>
        <h3>User</h3>
      </div>
    )
  }
}

class Empty extends Component {
  render() {
    return (
      <div>
        <h3>Empty-404</h3>
      </div>
    )
  }
}

export default RouterPage

import React, { Component } from 'react'
import store from '../store'

class ReduxPage extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate()
    })
  }
  render() {
    console.log(store)
    return (
      <div>
        <h3>reduxPage</h3>
        <p>{store.getState()}</p>
        <button onClick={() => store.dispatch({ type: 'ADD' })}>ADD</button>
        <button onClick={() => store.dispatch({ type: 'MINUS' })}>MINUS</button>
      </div>
    )
  }
}

export default ReduxPage

import React, { Component, PureComponent } from 'react'

class PureComponentPage extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  setCount = () => {
    this.setState({
      count: 100,
    })
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextState.count, this.state.count)

  //   return nextState.count !== this.state.count
  // }
  render() {
    console.log('reder')

    const { count } = this.state
    return (
      <div>
        <h3>PureComponentPage</h3>
        <button onClick={this.setCount}>{count}</button>
      </div>
    )
  }
}

export default PureComponentPage

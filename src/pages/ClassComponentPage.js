import React, { Component } from 'react'

class ClassComponentPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
    }
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date(),
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    const { date } = this.state
    return (
      <div>
        <h3>ClassComponent</h3>
        <p>{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}

export default ClassComponentPage

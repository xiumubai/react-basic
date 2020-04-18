import React, { Component } from 'react'
import './button.css'

class ButtonBgm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '',
    }
  }
  onChangeColor = () => {
    this.setState({
      color: 'red',
    })
  }
  changeColor() {}
  render() {
    const { color } = this.state
    return (
      <div className={color}>
        <button onClick={this.onChangeColor}>buttonBgm</button>
      </div>
    )
  }
}

export default ButtonBgm

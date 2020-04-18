import React, { Component } from 'react'
import './mask.css'

class Mask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: props.selected,
    }
    console.log(props)
  }
  handleMask = () => {
    this.props.handleMaskFn()
  }
  render() {
    const { selected } = this.state
    return (
      <div
        className={`select-mask ${selected ? 'mask' : ''}`}
        onClick={this.handleMask}
      >
        {this.props.children}
      </div>
    )
  }
}

export default Mask

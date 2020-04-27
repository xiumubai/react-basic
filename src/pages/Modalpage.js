import React, { Component } from 'react'
import Dialog from '../components/Dialog'

class Modalpage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDialog: false,
    }
  }
  render() {
    const { showDialog } = this.state
    return (
      <div>
        <h3>Modalpage</h3>
        <button onClick={() => this.setState({ showDialog: !showDialog })}>
          toggle
        </button>
        {showDialog && <Dialog showDialog={showDialog} />}
      </div>
    )
  }
}

export default Modalpage

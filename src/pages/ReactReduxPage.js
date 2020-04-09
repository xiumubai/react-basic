import React, { Component } from 'react'
import { connect } from 'react-redux'

export default connect((state) => ({ num: state }), {
  add: () => ({ type: 'ADD' }),
  minus: () => ({ type: 'MINUS' }),
})(
  class ReactReduxPage extends Component {
    render() {
      console.log(this.props)
      const { num, add, minus } = this.props
      return (
        <div>
          <h3>react-reduxPage</h3>
          <p>{num}</p>
          <button onClick={() => add({ type: 'ADD' })}>ADD</button>
          <button onClick={() => minus({ type: 'MINUS' })}>MINUS</button>
        </div>
      )
    }
  }
)

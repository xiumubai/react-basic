import React, { Component } from 'react'
import { createPortal } from 'react-dom'

class Dialog extends Component {
  constructor(props) {
    super(props)
    const doc = window.document
    this.node = doc.createElement('div')
    doc.body.appendChild(this.node)
  }
  componentWillUnmount() {
    window.document.body.removeChild(this.node)
  }
  render() {
    const { hideDialog } = this.props
    return createPortal(
      <div className='dialog'>
        <h3>Modal</h3>
        {this.props.children}
        {typeof hideDialog === 'function' && (
          <button onClick={hideDialog}>关闭弹窗</button>
        )}
      </div>,
      this.node
    )
  }
}

export default Dialog

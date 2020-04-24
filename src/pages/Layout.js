import React, { Component } from 'react'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false,
    }
  }
  componentDidMount() {
    const { title = '商城' } = this.props
    document.title = title
  }
  handleMask = () => {
    this.setState({
      selected: !this.state.selected,
    })
  }
  render() {
    const { children } = this.props
    console.log(children)
    return (
      <div>
        {/* {showTopBar && <TopBar />}
        {children.content}
        {children.txt}
        <button onClick={children.btnClick}>btnClick</button>
      */}
      </div>
    )
  }
}

export default Layout

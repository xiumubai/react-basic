import React, { Component } from 'react'
import TopBar from '../components/TopBar'
import BottomBar from '../components/BottomBar'

class Layout extends Component {
  componentDidMount() {
    const { title = '商城' } = this.props
    document.title = title
  }
  render() {
    const { children, showTopBar, showBottomBar } = this.props
    console.log(children)

    return (
      <div>
        {showTopBar && <TopBar />}
        {children.content}
        {children.txt}
        <button onClick={children.btnClick}>btnClick</button>
        {showBottomBar && <BottomBar />}
      </div>
    )
  }
}

export default Layout

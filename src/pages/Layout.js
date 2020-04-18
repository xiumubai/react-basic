import React, { Component } from 'react'
import TopBar from '../components/TopBar'
import BottomBar from '../components/BottomBar'
import Mask from './Mask'

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
    const { children, showTopBar, showBottomBar } = this.props
    console.log(children)
    const { selected } = this.state
    return (
      <div>
        {/* {showTopBar && <TopBar />}
        {children.content}
        {children.txt}
        <button onClick={children.btnClick}>btnClick</button>
        {showBottomBar && <BottomBar />} */}
        <button onClick={this.handleMask}>展示遮罩层</button>
        {selected ? (
          <Mask selected={selected} handleMaskFn={this.handleMask}>
            这是遮罩层
          </Mask>
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default Layout

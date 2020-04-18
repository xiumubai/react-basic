import React, { Component } from 'react'
import PropTyps from 'prop-types'

class LifeCircleComponent extends Component {
  static defaultProps = {
    msg: 'msg',
  }
  static propsTypes = {
    msg: PropTyps.string,
  }
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
    console.log('constructor')
  }

  static getDerivedStateFromProps(prop, state) {
    console.log('getDerivedStateFromProps')
    const { count } = state
    return count > 5 ? { count: 0 } : null
  }

  // UNSAFE_componentWillMount() {
  //   console.log('componentWillMount')
  // }
  componentDidMount() {
    console.log('componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextState)
    // return true
  }

  getSnapshotBeforeUpdate(prveProps, prveState) {
    console.log('getSnapShotBeforeUpdate', prveState)
    return {
      msg: '我是getSnapshotBeforeUpdate',
    }
  }
  // UNSAFE_componentWillUpdate() {
  //   console.log('componentWillUpdate')
  // }
  componentDidUpdate(prveProps, prveState, snapshot) {
    console.log('componentDidUpdate', prveProps, prveState, snapshot)
  }
  setCount = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  render() {
    // console.log(this.props)
    console.log('render')
    const { count } = this.state
    return (
      <div>
        <h3>LifeCircleComponent</h3>
        <p>{count}</p>
        <button onClick={this.setCount}>改变count</button>
        {/* {count % 2 && <Child count={count} />} */}
        <Child count={count} />
      </div>
    )
  }
}

class Child extends Component {
  componentWillUnmount() {
    console.log('child componentWillUnmount')
  }

  // 组件首次渲染的时候不会在执行，只有在已挂载组件收到新的props的时候，才会进行更新
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log('child componentWillReceiveProps', nextProps)
  // }

  render() {
    console.log('child render')
    const { count } = this.props
    return (
      <div>
        <h3>Child</h3>
        <p>{count}</p>
      </div>
    )
  }
}

export default LifeCircleComponent

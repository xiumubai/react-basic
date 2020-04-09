import React, { Component } from 'react'

class SetStatePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  componentDidMount() {
    // this.changeValue(1)
    document
      .getElementById('counter')
      .addEventListener('click', this.setCounter)
  }
  changeValue(num) {
    // setState在合成事件和生命周期中是异步的，执行批量更新，可以优化性能

    // 无callback：
    // this.setState({
    //   count: this.state.count + num,
    // })
    // console.log(this.state.count)

    // 有callback：callback在更新之后立马就执行
    // this.setState(
    //   {
    //     count: this.state.count + num,
    //   },
    //   () => {
    //     console.log(this.state.count)
    //   }
    // )

    // setState的链式调用

    this.setState((state) => {
      return {
        count: state.count + num,
      }
    })
  }
  setCounter = () => {
    // setState在setTimeOut和原生事件中中是同步的

    // setTimeout(() => {
    //   this.changeValue(1)
    // }, 0)
    this.changeValue(1)
    this.changeValue(2)
    this.changeValue(3)
  }
  render() {
    return (
      <div>
        <h3>SetStateComponent</h3>
        <p onClick={this.setCounter}>合成事件：{this.state.count}</p>
        <p id='counter'>原生事件：{this.state.count}</p>
      </div>
    )
  }
}

export default SetStatePage

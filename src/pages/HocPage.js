import React, { Component } from 'react'
import '../index.css'

function Child(props) {
  return <div>Child</div>
}

// 高阶组件
const foo = (Comp) => (props) => {
  return (
    <div className='border'>
      <Comp></Comp>
    </div>
  )
}

// 新组件
const Foo = foo(Child)

class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>HocPage</h3>
        <Foo />
      </div>
    )
  }
}

export default HocPage

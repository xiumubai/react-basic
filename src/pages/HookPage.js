import React, { useState, useEffect } from 'react'

export default function HookPage(props) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('count effect')
  }, [count])

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <p>{useClock().toLocaleTimeString()}</p>
    </div>
  )
}

// 自定义一个hook，命名以use开头
// 好处：组件之间可以重用逻辑，不增加额外的组件
// 函数内部可以调用其他的hook
function useClock() {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    console.log('date effect')
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  return date
}

// **hook的使用规则**

// - 只能在函数最外层调⽤用 Hook。不不要在循环、条件判断或者⼦子函数中调⽤用。
// - 只能在React 的函数组件中调⽤用 Hook。不要在其他 JavaScript 函数中调⽤用。（还有一个地⽅可以调⽤Hook —— 就是自定义的 Hook 中）

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

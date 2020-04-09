import React, { useState, useMemo } from 'react'

export default function UseMemopage(props) {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState('')
  const cpt = useMemo(() => {
    console.log('cpt')
    let sum = 0
    for (let i = 0; i < count; i++) {
      sum += i
    }
    return sum
  }, [count])

  return (
    <div>
      <h3>UseMemopage</h3>
      <p>count:{count}</p>
      <p>cpt:{cpt}</p>
      <button onClick={() => setCount(count + 1)}>ADD</button>
      <div></div>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
    </div>
  )
}

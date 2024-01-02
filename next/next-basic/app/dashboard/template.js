'use client'
import { useState } from 'react'
/**
 * 每次切换子路由都会重新渲染
 * page = children
 */
export default function Template({ children }) {
  const [count, setCount] = useState(0)
  return (
    <>
      <h2>Template {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>{children}</div>
    </>
  )
}

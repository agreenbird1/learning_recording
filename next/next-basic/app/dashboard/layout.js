'use client'

import { useState } from 'react'
import Link from 'next/link'

/**
 * layout 定义当前路由下的不变的内容，即子路由切换时候的公共部分
 * 相当于当前路由下的wrapper，子页面的公共部分
 * 如果当前文件夹下有 template，则 children = template，否则 children = page
 */
export default function DashboardLayout({ children }) {
  const [count, setCount] = useState(0)
  return (
    <section>
      <div>
        <Link href="/dashboard/about">About</Link>
        <br />
        <Link href="/dashboard/settings">Settings</Link>
      </div>
      <h1>Layout {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {children}
    </section>
  )
}

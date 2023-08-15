import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)

  // 类似 watch， 第二个参数是依赖的 state 的值所成的数组
  useEffect(() => {
    console.log('count 的值被更新啦！', count)
  }, [count])

  // 如果不传入第二个参数，则会在每次更新时都执行
  useEffect(() => {
    console.log('useEffect 每次更新！')
  })

  // 如果传入一个空数组，则首次更新
  useEffect(() => {
    console.log('首次更新')

    return () => {
      console.log('且也只在组件销毁最后时执行一次')
    }
  }, [])

  // cleanup 代码
  useEffect(() => {
    console.log('cleanup')

    // 返回的就是 cleanup 函数
    return () => {
      // 在下次的 useEffect 函数执行之前,会先执行上一次的 cleanup 函数(如果有)
      console.log('clean up start')
    }
  })

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count + 1</button>
      <button onClick={() => setCount1(count1 + 1)}>count1 + 1</button>
    </div>
  )
})

export default App

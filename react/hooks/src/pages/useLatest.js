import { useState, useEffect } from 'react'
import useLatest from '../hooks/useLatest'

function useLatestPage() {
  const [count, setCount] = useState(0)
  // useRef 在组件渲染时候值不会变。
  // 且渲染不随 useRef 的值的变化而变化，只是一个普通的对象
  const ref = useLatest(count)

  // 问题
  // setCount会触发组件重新渲染
  // 当组件重新渲染时候重新执行 useState(0)，count 被置为0
  // 所以再次进入定时器，count仍然为0
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('count:', count)
      console.log('ref count:', ref.current)
      setCount(ref.current + 1)
    }, 1000)
    return () => {
      console.log('clearInterval')
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <div>自定义Hooks：useLatestt</div>
      <div>count: {count}</div>
    </>
  )
}

export default useLatestPage

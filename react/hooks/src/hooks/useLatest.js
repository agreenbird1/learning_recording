import { useRef } from 'react'

/**
 * 永远返回最新的值，可以避免闭包问题。
 */
const useLatest = (value) => {
  const ref = useRef(value)
  ref.current = value

  return ref
}

export default useLatest

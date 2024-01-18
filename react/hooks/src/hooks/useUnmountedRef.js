import { useEffect, useRef } from 'react'

/**
 * 用于判断组件是否卸载
 */
const useUnmountedRef = () => {
  const unmountedRef = useRef(false)
  useEffect(() => {
    unmountedRef.current = false
    console.log('unmountedRef', unmountedRef.current)
    return () => {
      unmountedRef.current = true
      console.log('unmountedRef', unmountedRef.current)
    }
  })
  return unmountedRef
}

export default useUnmountedRef

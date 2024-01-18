import { useReducer } from 'react'

const useUpdate = () => {
  // update 就是 dispatch 函数
  // 重新执行，页面重新渲染
  const [, update] = useReducer((state) => ++state, 0)

  return update
}

export default useUpdate

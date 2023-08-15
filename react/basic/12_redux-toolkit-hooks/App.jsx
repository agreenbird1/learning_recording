import React, { memo } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { addNumber, subNumber } from './store/modules/counter'

const Home = memo(() => {
  // 尽管使用了 memo ，但是还是会在父组件重新渲染时候执行
  // 主要是因为 counterReducer 会整体对 state 进行改变
  // 导致重新渲染
  const message  = useSelector((state) => state.counterReducer.message, shallowEqual)
  // shallowEqual 会对返回的值进行浅层比较
  console.log('Home');
  return <div>{message}</div>
})

const App = memo(() => {
  const { count } = useSelector((state) => state.counterReducer)
  const dispatch = useDispatch()
  console.log('App');
  const handleNumber = (val) => {
    val > 0 && dispatch(addNumber(val))
    val < 0 && dispatch(subNumber(val))
  }

  return (
    <>
      <div>当前计数器为{count}</div>
      <button onClick={() => handleNumber(1)}>+1</button>
      <button onClick={() => handleNumber(-1)}>-1</button>
      <hr />
      <Home />
    </>
  )
})

export default App

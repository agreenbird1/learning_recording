import React, { memo } from 'react'
import { connect } from 'react-redux'
import { addNumber, subNumber } from './store/modules/counter'

const App = memo((props) => {
  // addNumber, subNumber 是 mapDispatchToProps 映射而来
  const { count, addNumber, subNumber } = props
  return (
    <>
      <div>当前计数器为{count}</div>
      <button onClick={() => addNumber(1)}>+1</button>
      <button onClick={() => subNumber(1)}>-1</button>
    </>
  )
})

const mapStateToProps = (state) => ({
  count: state.counterReducer.count,
})

const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumber(num))
  },
  subNumber(num) {
    dispatch(subNumber(num))
  },
})
// connect 函数实现
export default connect(mapStateToProps, mapDispatchToProps)(App)

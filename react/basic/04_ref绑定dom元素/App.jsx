import React, { useRef, forwardRef } from 'react'

class ClassComponent extends React.PureComponent {
  render() {
    return <div>ClassComponent</div>
  }
}

// 函数式组件，使用 forwardRef() 包裹。
// 同时需要传递 ref 参数到组件内部需要获取的DOM元素上
// 原因：函数式组件没有实例，所以需要通过 ref 参数传递到内部需要获取的DOM元素上
const FunctionComponent = forwardRef((props, ref) => {
  return <div ref={ref}>FunctionComponent</div>
})

// 注意，在class组件中，使用 createRef() 创建ref
// 在函数组件中，使用 useRef() 创建ref
function App() {
  const inputRef = useRef(null)
  const classRef = useRef(null)
  const functionRef = useRef(null)

  const inputFocus = () => {
    console.log(inputRef)
    // current 挂在为当前指向的DOM元素
    inputRef.current.focus()
  }
  const getClassComponent = () => {
    console.log('获取class组件实例', classRef)
  }

  const getFunctionComponent = () => {
    console.log('获取函数组件实例', functionRef)
  }
  return (
    <div className="App">
      <input ref={inputRef} type="text" />
      <button onClick={inputFocus}>Focus</button>

      <br />
      <ClassComponent ref={classRef} />
      <button onClick={getClassComponent}>获取class组件实例</button>

      <br />
      <FunctionComponent ref={functionRef} />
      <button onClick={getFunctionComponent}>获取函数组件实例</button>
    </div>
  )
}

export default App

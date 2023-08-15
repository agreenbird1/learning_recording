// 高阶组件的用处：在不改变原组件的情况下，对组件进行扩展
// 高阶组件的定义：接收一个组件作为参数，返回一个新的组件
// 高阶组件的作用：复用组件逻辑
// 高阶组件的缺点：会导致组件层级变深，不利于组件的复用
const componentTitle = function (Component) {
  return function Wrapper(props) {
    return (
      <div>
        <h1>wrapper</h1>
        <Component />
      </div>
    )
  }
}

function App() {
  const TitleComponent = componentTitle(function () {
    return <h2>hello, component</h2>
  })

  return (
    <div className="App">
      <TitleComponent />
    </div>
  )
}

export default App

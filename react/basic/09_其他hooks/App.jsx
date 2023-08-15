import React, {
  memo,
  useState,
  useCallback,
  createContext,
  useContext,
  useRef
} from 'react'

const IncrementCpn = memo((props) => {
  const { increment } = props
  return (
    <>
      <button onClick={increment}>+1</button>
    </>
  )
})

const UseCallbackCpn = memo(() => {
  const [count, setCount] = useState(0)

  // 优化
  // 使用 useRef
  const countRef = useRef() // 返回一个不会变化的对象
  countRef.current = count // 这样每次返回的指向就是不变化的

  // 只有在依赖的 effect 更新的时候才会重新生成一个 increment
  // 这样，当这个 UseCallbackCpn 里面的其他 effect 更新的时候
  // 就不会使得 IncrementCpn 重新渲染（props）没有变化
  const increment = useCallback(() => {
    setCount(countRef.current + 1)
    // 因为 countRef 是同一个，increment 也没有变化
    // 那么 IncrementCpn 也不会变化
  }, [])
  // }, [count]) // 正常传入时候


  return (
    <>
      <h2>hello useCallback</h2>
      <h1>i am count: {count}</h1>
      <IncrementCpn increment={increment} />
    </>
  )
})

// useContext
const themeContext = createContext(null)

const Panel = memo(() => {
  const theme = useContext(themeContext)

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#000',
        width: '100px',
        height: '100px',
        border: '1px solid #ccc',
      }}
    ></div>
  )
})

const App = memo(() => {
  const [theme, setTheme] = useState('light')

  return (
    <>
      {/* 传递一个 useState 的值，后续改变时子元素会重新渲染 */}
      <themeContext.Provider value={theme}>
        <Panel />
      </themeContext.Provider>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        change theme
      </button>

      <UseCallbackCpn />
    </>
  )
})

export default App

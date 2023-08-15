import './App.css'
import HelloWorld from './components/HelloWorld'
import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const addCount = (num) => {
    setCount(count + num)
  }
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld
          content="hello world"
          count={count}
          addCount={(num) => addCount(num)}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App

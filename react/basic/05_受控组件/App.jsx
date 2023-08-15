import React, { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState('hello 受控组件')
  const [checked, setChecked] = useState(false)
  return (
    <div className="App">
      {/*
        简单来说
        受控组件：value值由state控制
        非受控组件：value值由DOM元素自身控制

        value属性用于controls元素的值，例如文本输入框、选择框等。
        如果只是想指定默认值，可以使用defaultValue/defaultChecked属性。
      */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <label htmlFor="checkBox">
        <input
          id="checkBox"
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        哈哈哈
      </label>
    </div>
  )
}

export default App

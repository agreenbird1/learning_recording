import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // 严格模式下 useEffect 执行了两次
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

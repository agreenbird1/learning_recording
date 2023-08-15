import React from 'react'
import NavBar from './components/NavBar'
import ThemeContext from './contexts/ThemeContext'

function App() {
  const left = <div>Left</div>
  const right = <div>Right</div>
  const center = <div>Center</div>
  return (
    <div className="App">
      <ThemeContext.Provider value={1}>
        <h1>App</h1>
        <NavBar left={left} right={right} center={center} />
      </ThemeContext.Provider>
    </div>
  )
}

export default App

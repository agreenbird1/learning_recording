import React, { useState } from 'react'
import NavBar from './components/NavBar'

function App() {
  const left = <div>Left</div>
  const right = <div>Right</div>
  const center = <div>Center</div>
  return (
    <div className="App">
      <h1>App</h1>
      <NavBar left={left} right={right} center={center} />
    </div>
  )
}

export default App

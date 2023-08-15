import React, { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import '../css/NavBar.css'

export default function NavBar({ left, right, center }) {
  const theme = useContext(ThemeContext)
  return (
    <div className="nav-bar">
      <div className="left">{left}</div>
      <div className="center">{center}</div>
      <div className="right">{right}</div>
      <h2>{theme}</h2>
    </div>
  )
}

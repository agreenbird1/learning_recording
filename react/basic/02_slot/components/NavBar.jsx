import React from 'react'
import '../css/NavBar.css'

export default function NavBar({ left, right, center }) {
  return (
    <div className="nav-bar">
      <div className="left">{left}</div>
      <div className="center">{center}</div>
      <div className="right">{right}</div>
    </div>
  )
}

import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/home/recommend">recommend</Link>
      &nbsp;
      <Link to="/home/ranking">ranking</Link>
      {/* 子路由占位符，类似 router-view */}
      <Outlet />
    </div>
  )
}

export default Home

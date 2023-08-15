import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Login() {
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()
  return (
    <div>
      <h1>Login page</h1>
      {/* 可以跳转，即是页面 push */}
      {isLogin && <Navigate to="/" />}
      <button onClick={() => setIsLogin(true)}>登录</button>
      <button onClick={() => navigate('/')}>直接跳转 =={'>'} navigate</button>
    </div>
  )
}

export default Login

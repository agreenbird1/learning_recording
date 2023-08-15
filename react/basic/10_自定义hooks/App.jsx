import React, { memo, useEffect, useState } from 'react'

// 公用的关于 hook 的逻辑进行抽离
const useLogLife = (name) => {
  useEffect(() => {
    console.log(name, '组件被挂载！')
    // 销毁时执行
    return () => {
      console.log(name, '组件被销毁！')
    }
  }, [name])
}

const About = memo(() => {
  useLogLife('About')
  return <div>about</div>
})

const Home = memo(() => {
  useLogLife('Home')
  return <div>Home</div>
})

const App = memo(() => {
  const [isShow, setShow] = useState(true)

  return (
    <>
      <button onClick={() => setShow(!isShow)}>change</button>
      {isShow && <About/>}
      {isShow && <Home/>}
    </>
  )
})

export default App

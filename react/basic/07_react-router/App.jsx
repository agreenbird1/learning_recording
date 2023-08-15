import {
  // Routes,
  // Route,
  Link,
  NavLink,
  // Navigate,
  useRoutes,
} from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import Login from './pages/Login'
// import NotFound from './pages/404'
// import HomeRecommend from './pages/HomeRecommend'
// import HomeRanking from './pages/HomeRanking'
// import Detail from './pages/Detail'
import routes from './router'

function App() {
  return (
    <div className="App">
      <header>
        header &nbsp; <Link to="about">about</Link>&nbsp;
        {/* NavLink 可以自定义样式，className、style同理，默认选中时候添加active类 */}
        <NavLink
          to="/home"
          style={({ isActive }) => ({ color: isActive ? 'red' : '#000 ' })}
        >
          home
        </NavLink>
        &nbsp;
        <Link to="/login">login</Link>
      </header>
      <hr />
      <main>
        {/* <Routes> */}
        {/* 路由重定向 */}
        {/* <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<Home />}>
            <Route
              path="/home"
              element={<Navigate to="/home/recommend" />}
            ></Route> */}
        {/* 路由的嵌套 */}
        {/* <Route path="/home/recommend" element={<HomeRecommend />}></Route>
            <Route path="/home/ranking" element={<HomeRanking />}></Route>
          </Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes> */}
        {/* 配置文件夹方式 */}
        {useRoutes(routes)}
      </main>
      <hr />
      <footer>footer</footer>
    </div>
  )
}

export default App

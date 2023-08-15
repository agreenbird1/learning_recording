import { Navigate } from 'react-router-dom'
import HomeRecommend from '../pages/HomeRecommend'
import HomeRanking from '../pages/HomeRanking'
import About from '../pages/About'
import Detail from '../pages/Detail'
import Login from '../pages/Login'

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    element: <Navigate to="/home/recommend" />,
    children: [
      {
        path: '/home/recommend',
        element: <HomeRecommend />,
      },
      {
        path: '/home/ranking',
        element: <HomeRanking />,
      },
    ],
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/detail/:id',
    element: <Detail />,
  },
]
export default routes

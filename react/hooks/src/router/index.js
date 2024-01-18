import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import UseLatest from '../pages/useLatest'
import UseUnmountedRef from '../pages/useUnmountedRef'
import UseReactive from '../pages/useReactive'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/useLatest',
    element: <UseLatest />,
  },
  {
    path: '/useUnmountedRef',
    element: <UseUnmountedRef />,
  },
  {
    path: '/useReactive',
    element: <UseReactive />,
  },
])

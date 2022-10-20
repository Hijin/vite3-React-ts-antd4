import App from "./App"
import Dashboard from "./Dashboard"
import About from "./About"
import { useRoutes } from 'react-router-dom'

// https://reactrouter.com/en/v6.3.0/getting-started/concepts
const routes = [
  {
    path: '/',
    name: 'home',
    element: <App />,
    children: [
      { path: 'dashboard', element: <Dashboard /> }
    ]
  },
  {
    path: '/about',
    name: 'about',
    element: <About />,
  },
]

const GetRoutes = () => {
  return useRoutes(routes)
}

export default GetRoutes
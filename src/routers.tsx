import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
const HomeLayout = lazy(()=>import('@/layout/homeLayout'))
const Login = lazy(()=>import('@/pages/login'))
const Menu1 = lazy(()=>import('@/pages/menu1'))
const Menu2 = lazy(()=>import('@/pages/menu2'))
const SubMenu = lazy(()=>import('@/pages/subMenu'))

// https://reactrouter.com/en/v6.3.0/getting-started/concepts
/**
 * 主页菜单路由
 * path：子路径（菜单key）,需唯一
 * label:菜单label
 * element：路由组件
 * hideInMenu：是否显示在菜单中
 */
export const homeMenus = [
  {
    path: 'menu1', label: '菜单1', element: <Menu1 />,
  },
  {
    path: 'menu2', label: '菜单2', element: <Menu2 />,
    children: [
      {
        path: 'subMenu2', label: '子菜单2', element: <SubMenu />,
        children: [
          { path: 'subMenu21', label: '子菜单222', element: <SubMenu /> },
          { path: 'subMenu22', label: '子菜单223', element: <SubMenu />, hideInMenu: true }
        ]
      },
      {
        path: 'subMenu3', label: '子菜单3', element: <SubMenu />, children: [
          { path: 'subMenu31', label: '子菜单22', element: <SubMenu />, }
        ]
      }
    ]
  }
]
const routes = [
  {
    path: '/',
    name: 'home',
    element: <HomeLayout />,
    children: homeMenus
  },
  {
    path: '/login',
    name: 'login',
    element: <Login />,
  },
]

const GetRoutes = () => {
  return useRoutes(routes)
}

export default GetRoutes
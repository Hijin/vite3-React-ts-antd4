import HomeLayout from '@/layout/homeLayout'
import Layout from '@/layout';
import Config from '@/pages/config';
import Login from '@/pages/login';
import Home from '@/pages/home';
import Suffer from '@/pages/suffer';
import Visit from '@/pages/visit';
import Projects from '@/pages/projects';
import Menu1 from '@/pages/menu1'
import Menu2 from '@/pages/menu2'
import SubMenu from '@/pages/subMenu'
import { useRoutes, Navigate } from 'react-router-dom'
// const HomeLayout = lazy(()=>import('@/layout/homeLayout'))
// const Login = lazy(()=>import('@/pages/login'))
// const Menu1 = lazy(()=>import('@/pages/menu1'))
// const Menu2 = lazy(()=>import('@/pages/menu2'))
// const SubMenu = lazy(()=>import('@/pages/subMenu'))

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

const menus = [
  {
    path: 'home', label: '首页', element: <Home />,
  },
  {
    path: 'suffer', label: '患者管理', element: <Suffer />,
  },
  {
    path: 'visit', label: '随访管理', element: <Visit />,
  },
]

export default [
  {
    path: '/',
    element: <Layout />,
    children: [
      {path: "", element: <Navigate to="projects" />},
      {path: 'projects', label: '项目列表', exec: true, element: <Projects />},
      ...menus,
    ]
  },
  {
    path: '/config',
    name: 'config',
    element: <Config />
  },
  {
    path: '/login',
    name: 'login',
    element: <Login />,
  },
  {path: "*", element: <div>404</div>},
]
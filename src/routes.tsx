import { lazy } from 'react';
import Config from '@/pages/config';
import Home from '@/pages/home';
import Suffer from '@/pages/suffer';
import Visit from '@/pages/visit';
import Projects from '@/pages/projects';
import { useRoutes, Navigate } from 'react-router-dom';
const Layout = lazy(() => import('@/layout'));
const Login = lazy(() => import('@/pages/login'));

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
    path: 'home',
    label: '首页',
    element: <Home />
  },
  {
    path: 'suffer',
    label: '患者管理',
    element: <Suffer />
  },
  {
    path: 'visit',
    label: '随访管理',
    element: <Visit />
  }
];

const routers = [
  {
    path: '/researchpc',
    element: <Layout />,
    children: [
      { path: '', element: <Navigate to="projects" /> },
      {
        path: 'projects',
        label: '项目列表',
        exec: true,
        element: <Projects />
      },
      ...homeMenus
    ]
  },
  {
    path: '/researchpc/config',
    name: 'config',
    element: <Config />
  },
  {
    path: '/researchpc/login',
    name: 'login',
    element: <Login />
  },
  { path: '*', element: <div>404</div> }
];
const GetRoutes = () => {
  return useRoutes(routers);
};
export default GetRoutes;

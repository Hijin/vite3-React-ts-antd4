import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Home from '@/pages/home';
import Suffer from '@/pages/suffer';
import Baseline from '@/pages/baseline';
import Visit from '@/pages/visit';
import Setting from '@/pages/setting';
import Projects from '@/pages/projects';
import Message from '@/pages/message';
import Config from '@/pages/config';
import Means from '@/pages/config/pages/meas';
import Password from '@/pages/config/pages/password';
import Record from '@/pages/config/pages/record';
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
export const navList = [
  {
    path: 'home',
    label: '首页',
    element: <Home />
  },
  {
    path: 'suffer',
    label: '患者管理',
    element: <Suffer />,
  },
  {
    path: 'suffer/baseline',
    label: '患者基线',
    element: <Baseline />
  },
  {
    path: 'visit',
    label: '随访管理',
    element: <Visit />
  }
];

export const homeMenus = [
  {
    path: 'projects',
    name: 'projects',
    label: '项目列表',
    exec: true,
    element: <Projects />
  },
  {
    path: 'setting',
    name: 'setting',
    label: '基础设置',
    exec: true,
    element: <Setting />
  },
  {
    path: 'message',
    name: 'message',
    label: '消息中心',
    exec: true,
    element: <Message />
  }
];

export default [
  {
    path: '/researchpc',
    name: '科研系统',
    element: <Layout />,
    children: [
      {path: "", element: <Navigate to="projects" />},
      ...homeMenus,
      {
        path: '/researchpc/config',
        name: 'config',
        element: <Config />,
        children: [
          {
            path: 'means',
            name: 'means',
            label: '资料设置',
            exec: true,
            element: <Means />
          },
          {
            path: 'password',
            name: 'password',
            label: '修改密码',
            exec: true,
            element: <Password />
          },
          {
            path: 'record',
            name: 'record',
            label: '登陆记录',
            exec: true,
            element: <Record />
          }
        ]
      },
      ...navList
    ]
  },
  {
    path: '/researchpc/login',
    name: 'login',
    element: <Login />
  },
  { path: '*', element: <div>404</div> }
];

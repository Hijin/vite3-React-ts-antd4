import { lazy } from 'react';
const Home = lazy(() => import('@/pages/home'));
const Login = lazy(() => import('@/pages/login'));
const PageError = lazy(() => import('@/pages/pageError'));

const routers = [
  {
    path: '/home',
    name: 'home',
    element: <Home />,
  },
  {
    path: '/login',
    name: 'login',
    element: <Login />
  },
  { path: '/403', element: <PageError state='403' /> },
  { path: '/500', element: <PageError state='500' /> },
  { path: '/502', element: <PageError state='502' /> },
  { path: '*', element: <PageError state='404' /> }
];

//根据路径获取路由权限配置
export const checkPermission = (routes: any, fullPath: string, parentPath: string) => {
  const _routes = routes ?? routers
  for (const r of _routes) {
    const { path, permission, children } = r
    const _fullPath = path.startsWith('/') ? path : `${parentPath}/${path}`
    if (_fullPath === fullPath) return permission
    if (children?.length) {
      const res: any = checkPermission(children, fullPath, _fullPath)
      if (res) return res
    }
  }
  return null
}

export default routers

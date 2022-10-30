import { useEffect, useState, lazy } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { checkPermission } from '@/routes'
import { Header, SideMenu } from './compoents';
import './index.less';
const PageError = lazy(() => import('@/pages/pageError'));

const HomeLayout = ({ userStore }: any) => {
  const [permissionLoad, setPermissionLoad] = useState(true)
  const [hasRouterPermission, setHasRouterPermission] = useState(true)
  const location = useLocation()
  useEffect(() => {
    const permission = checkPermission(null, location.pathname, '')
    if (!permission?.length) { // 没配置权限，默认都有
      setPermissionLoad(false)
      return setHasRouterPermission(true)
    }
    const hasPermission = permission.some((p: string) => { return userStore.permission.includes(p) })
    setHasRouterPermission(hasPermission)
    setPermissionLoad(false)
  }, [location])
  return (<>
    {permissionLoad ? null : hasRouterPermission ? <div className="home-layout flex-col">
      <Header></Header>
      <div className="flex-1 flex pt-20 over-hide">
        <SideMenu />
        <div className="home-layout__content over-auto flex-1">
          <Outlet />
        </div>
      </div>
    </div> : <PageError state='403' />}
  </>
  );
};

export default inject('userStore')(observer(HomeLayout));

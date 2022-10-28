import { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import cs from 'classnames';
import { homeMenus } from '@/routes';
import './index.less';

const SideMenu = ({ userStore }: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [curKey, setCurKey] = useState<any>();
  const [selectedKeys, setSelectedKeys] = useState<any[]>([]);
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    const menus = initMenus(homeMenus);
    setMenuItems(menus);
  }, []);
  useEffect(() => {
    const { pathname } = location
    const keysArr = pathname.split('/').slice(2)
    setSelectedKeys(keysArr)
    setCurKey(keysArr.slice(-1))
  }, [location])
  const initMenus = (data: any[]) => {
    const menus = data
      .filter((m: any) => !m.hideInMenu)
      .filter((v: any) => { return !v.permission?.length || v.permission.some((p: string) => { return userStore.permission.includes(p) }) })
      .map((v: any) => {
        const newMenus: any = {
          label: v.label,
          key: v.path
        };
        if (v.children?.length) {
          const newChildren = initMenus(v.children)
          if (newChildren.length) {
            newMenus.children = initMenus(v.children);
          } else {
            delete newMenus.children;
          }
        }
        return newMenus;
      });
    return menus;
  };
  const handleMenuClick = (e: any) => {
    const { keyPath, key } = e;
    if (key === curKey) return;
    setCurKey(key);
    const path = keyPath.reverse().join('/');
    navigate(path);
  };
  return (
    <div
      className={cs('home-layout-menu pos-rlt bg-w', {
        'home-layout-menu--collapsed': collapsed
      })}
    >
      <Menu
        className="h-full"
        onClick={handleMenuClick}
        selectedKeys={selectedKeys}
        mode='inline'
        items={menuItems}
      >
      </Menu>
      <div
        className={cs('home-layout-menu__collapsed-tip pointer flex-c', {
          'home-layout-menu__collapsed-tip--collapsed': collapsed
        })}
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      ></div>
    </div>
  );
};
export default inject('userStore')(observer(SideMenu));

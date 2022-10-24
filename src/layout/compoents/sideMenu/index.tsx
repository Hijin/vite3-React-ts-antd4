import { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import cs from 'classnames';
import { homeMenus } from '@/routes';
import './index.less';

const SideMenu = () => {
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [curKey, setCurKey] = useState();
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    const menus = initMenus(homeMenus);
    setMenuItems(menus);
  }, []);
  const initMenus = (data: any[]) => {
    const menus = data
      .filter((m: any) => !m.hideInMenu)
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
        mode="inline"
        items={menuItems}
      />
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
export default SideMenu;

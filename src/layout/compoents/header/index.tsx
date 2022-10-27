import { useState, useEffect } from 'react';
import { Image, Dropdown, Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { headerNavItems } from '@/routes'
import cs from 'classnames';
import imgModule from '@/assets/imgs';
import './index.less';

const DropdownMenuItems = [
  { key: 'infoSet', label: '资料设置', path: '/researchpc/setting?index=0' },
  { key: 'password', label: '修改密码', path: '/researchpc/setting?index=1' },
  { key: 'loginRecord', label: '登录记录', path: '/researchpc/setting?index=2' },
  { key: 'loginOut', label: '退出登录', path: '/researchpc/setting' }
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [navCurKey, setNavCurKey] = useState<string[]>([]);
  useEffect(() => {
    const { pathname } = location
    const keysArr = pathname.split('/').slice(2)
    setNavCurKey(keysArr)
  }, [location])
  const handleNavClick = (item: any) => {
    setNavCurKey([item.path]);
    item.path && navigateToPath(item.path);
  };
  const handleMenuClick = (e: any) => {
    const { key } = e;
    const clickMenu: any = DropdownMenuItems.find((v) => v.key === key);
    navigateToPath(clickMenu.path);
  };
  const navigateToPath = (path: string) => {
    const { pathname } = location;
    if (pathname === path) return;
    navigate(path);
  };
  const DropdownMenu = (
    <Menu onClick={handleMenuClick} items={DropdownMenuItems} />
  );
  return (
    <div className="home-layout-header flex-h-c flex-b">
      <div className="flex-h-c flex-1">
        <div className="flex-h-c">
          <Image
            src={imgModule.logo}
            preview={false}
            className="home-layout-header__logo"
          />
          <div className="col-w ft-18 ft-b">项目名称</div>
        </div>
        <div className="flex-1 flex-h-c h-full ml-20">
          {headerNavItems.map((v) => (
            <div
              key={v.path}
              className={cs('home-layout-header__nav-item pointer flex-h-c', {
                'bg-w': navCurKey.indexOf(v.path) > -1
              })}
              onClick={() => handleNavClick(v)}
            >
              <Image
                src={navCurKey.indexOf(v.path) > -1 ? v.selIcon : v.icon}
                preview={false}
                className="home-layout-header__nav-item__icon"
              />
              <div
                className={cs('home-layout-header__nav-item__label ml-15', {
                  'home-layout-header__nav-item__label--activity':
                    navCurKey.indexOf(v.path) > -1
                })}
              >
                {v.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Dropdown
        className="flex-h-c"
        overlay={DropdownMenu}
        overlayClassName='home-layout-header__dropdown'
        placement="bottomRight"
        arrow
      >
        <div>
          <Image
            src={imgModule.avatar_default}
            preview={false}
            className="home-layout-header__avatar"
          />
          <div className="home-layout-header__user-name col-w ft-14 ml-10">
            王医生
          </div>
        </div>
      </Dropdown>
    </div>
  );
};

export default Header;

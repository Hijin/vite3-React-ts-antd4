import { useState } from 'react';
import { Image, Dropdown, Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import cs from 'classnames';
import {
  LogoImg,
  AvatarDefaultImg,
  HeaderHomeSelImg,
  HeaderPatientSelImg,
  HeaderVisitSelImg
} from '@/assets/imgs';
import './index.less';

const DropdownMenuItems = [
  { key: 'password', label: '设置密码', path: '/researchpc/login' },
  { key: 'loginOut', label: '退出登录', path: '/researchpc/setting' }
];
const HeaderNavItems = [
  {
    key: 'home',
    label: '首页',
    icon: LogoImg,
    selIcon: HeaderHomeSelImg,
    path: ''
  },
  {
    key: 'patient',
    label: '患者管理',
    icon: LogoImg,
    selIcon: HeaderPatientSelImg,
    path: ''
  },
  {
    key: 'visit',
    label: '随访管理',
    icon: LogoImg,
    selIcon: HeaderVisitSelImg,
    path: ''
  }
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [navCurKey, setNavCurKey] = useState();

  const handleNavClick = (item: any) => {
    setNavCurKey(item.key);
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
    <div className="home-layout-header flex-b">
      <div className="flex-h-c flex-1">
        <div className="flex-h-c">
          <Image
            src={LogoImg}
            preview={false}
            className="home-layout-header__logo"
          />
          <div className="col-w ft-18 ft-b">项目名称</div>
        </div>
        <div className="flex-1 flex-h-c h-full ml-20">
          {HeaderNavItems.map((v) => (
            <div
              key={v.key}
              className={cs('home-layout-header__nav-item pointer flex-h-c', {
                'bg-w': navCurKey === v.key
              })}
              onClick={() => handleNavClick(v)}
            >
              <Image
                src={navCurKey === v.key ? v.selIcon : v.icon}
                preview={false}
                className="home-layout-header__nav-item__icon"
              />
              <div
                className={cs('home-layout-header__nav-item__label ml-15', {
                  'home-layout-header__nav-item__label--activity':
                    navCurKey === v.key
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
        placement="bottomRight"
      >
        <div>
          <Image
            src={AvatarDefaultImg}
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

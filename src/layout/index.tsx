import { Header, SideMenu } from './compoents';
import { Outlet } from 'react-router-dom';
import './index.less';

const HomeLayout = () => {
  return (
    <div className="home-layout flex-col">
      <Header></Header>
      <div className="flex-1 flex">
        <SideMenu />
        <div className="home-layout__content flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;

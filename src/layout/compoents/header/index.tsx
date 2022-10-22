import './index.less';
import { Image } from 'antd';
import { LogoImg } from '@/assets/imgs';
const Header = () => {
  return (
    <div className="home-layout-header flex-b">
      <div className="flex-h-c">
        <Image src={LogoImg} className="home-layout-header__logo" />
        <div className="home-layout-header__name">项目名称</div>
      </div>
    </div>
  );
};

export default Header;

import { Tabs } from 'antd';
import SettingComp from './components'
import './index.less'

const {BaseInfo, Record, SetPassword } = SettingComp
const items = [
  { label: '资料设置', key: 'baseInfo', children: <BaseInfo /> },
  { label: '修改密码', key: 'passWord', children: <SetPassword /> },
  { label: '登录记录', key: 'record', children: <Record /> },
]
const Setting = () => {
  return <div className='setting bg-w br-10'>
    <Tabs items={items} />
  </div>;
};

export default Setting;

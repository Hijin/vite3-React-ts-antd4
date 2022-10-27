import { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import { useSearchParams } from 'react-router-dom';
import SettingComp from './components'
import './index.less'

const { BaseInfo, Record, SetPassword } = SettingComp
const items = [
  { label: '资料设置', key: 'baseInfo', children: <BaseInfo /> },
  { label: '修改密码', key: 'passWord', children: <SetPassword /> },
  { label: '登录记录', key: 'record', children: <Record /> },
]
const Setting = () => {
  const [searchParams] = useSearchParams();
  const initIndex: number = +(searchParams.get('index') ?? 0)
  const [tabActiveKey, setTabActiveKey] = useState(items[0].key)
  useEffect(() => {
    setTabActiveKey(items[initIndex].key)
    console.log(initIndex, tabActiveKey);
  }, [initIndex])
  return <div className='setting bg-w br-10'>
    <Tabs items={items} activeKey={tabActiveKey} onTabClick={(key) => setTabActiveKey(key)} animated />
  </div>;
};

export default Setting;

import { Button, Table} from 'antd';
import { useMemo, useState } from 'react';
import cs from 'classnames';
import './index.less';

const DATA = [
  {
    key: 1,
    date: '2020-3-2',
    type: 'web',
    version: '1.',
    system: 'window',
    name: 'WinPC',
    mac: 'E8',
    ip: '233.4.4.5',
    address: '上海黄埔区'
  }
]
const columns = [
  {
    key: 'date',
    dataIndex: 'date',
    title: '登录时间',
  },
  {
    key: 'type',
    dataIndex: 'type',
    title: '终端类型',
  },
  {
    key: 'version',
    dataIndex: 'version',
    title: '浏览器/终端版本',
  },
  {
    key: 'system',
    dataIndex: 'system',
    title: '操作系统',
  },
  {
    key: 'name',
    dataIndex: 'name',
    title: '设备名称',
  },
  {
    key: 'mac',
    dataIndex: 'mac',
    title: 'MAC地址',
  },
  {
    key: 'ip',
    dataIndex: 'ip',
    title: 'IP地址',
  },
  {
    key: 'address',
    dataIndex: 'address',
    title: '所在地区',
  }
]

const DATA1 = [
  {
    name: '小刚',
    center: '中心1',
    time: '2022-11-23 23:00:02',
  }
]
const columns1 = [
  {
    key: 'name',
    dataIndex: 'name',
    title: '姓名'
  },
  {
    key: 'center',
    dataIndex: 'center',
    title: '中心'
  },
  {
    key: 'time',
    dataIndex: 'time',
    title: '添加时间'
  },
  {
    key: 'operate',
    dataIndex: 'operate',
    title: '操作'
  }
]

const UserDetail = () => {
  const [navId, setNavId] = useState(0);
  const dataSource = useMemo(() => {
    return DATA;
  }, [])

  return (
    <section className='setuser-detail-wrap'>
      <header className='setuser-detail-head'>
        <div className='setuser-detail-subHead'>
          <div className='setuser-detail-avator'>
            <img className='setuser-detail-avator-img' src="" alt="" />
            <span className='setuser-detail-avator-name'>三毛</span>
          </div>
          <div className='setuser-detail-desc'>
            <h2 className='setuser-detail-desc-name'>三毛 <span className='online'>在线</span></h2>
            <p>销售部/销售总监</p>
          </div>
        </div>
        <div className='setuser-detail-supHead'>
          {
            ['新增员工', '修改中心', '修改职务', '设置状态', '重置密码', '删除'].map((t, i) => (
              <Button className='setuser-detail-operate' key={`btn-${i}`}>{t}</Button>
            ))
          }
        </div>
      </header>
      <article className='setuser-detail-contain'>
        <header className='setuser-detail-nav'>
          {
            ['登录记录', '操作权限', '数据权限'].map((t, i) => (
              <span
                onClick={() => setNavId(i)}
                className={cs('setuser-detail-navItem', {'selected': i === navId})}
                key={`btn-${i}`}
              >{t}</span>
            ))
          }
        </header>
        <section className='setuser-detail-list'>
          {navId === 0 && <Table dataSource={dataSource} columns={columns} />}
          {
            navId === 1 &&
            <article className='setuser-detail-data-wrap'>
              <header className='setuser-detail-data-header'>数据权限<span>（设置该角色的用户可以操作的数据的范围）</span></header>
              <ul className='setuser-detail-data-contain'>
                {
                  [
                    {title: '个人', desc: '只能操作自己的数据'},
                    {title: '所属中心', desc: '能操作自己、下属、和自己所属中心的数据'},
                    {title: '全中心', desc: '能操作全中心的数据'}
                  ].map((_, i) => (
                    <li key={`${i}`} className='setuser-detail-data-item'>
                      <span className='item-title'>{_.title}</span><span className='item-desc'>{_.desc}</span>
                    </li>
                  ))
                }
              </ul>
            </article>
          }
          {
            navId === 2 &&
            <Table dataSource={DATA1} columns={columns1} />
          }
        </section>
      </article>
    </section>
  )
}

export default UserDetail;
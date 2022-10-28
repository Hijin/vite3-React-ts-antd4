import { Button, Table, Row, Col} from 'antd';
import { useState } from 'react';
import cs from 'classnames';
import './index.less';


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

const RoleDetail = () => {
  const [navId, setNavId] = useState(0);
  // const dataSource = useMemo(() => {
  //   return DATA;
  // }, [])

  return (
    <section className='setrole-detail-wrap'>
      <header className='setrole-detail-head'>
        <div className='setrole-detail-subHead'>
          <div className='setrole-detail-avator'>
            <img className='setrole-detail-avator-img' src="" alt="" />
          </div>
          <div className='setrole-detail-desc'>
            <h2 className='setrole-detail-desc-name'>销售总监</h2>
            <p>暂无相关描述</p>
          </div>
        </div>
        <div className='setrole-detail-supHead'>
          {
            ['添加员工', '编辑职务', '设置状态', '复制职务', '删除职务'].map((t, i) => (
              <Button className='setrole-detail-operate' key={`btn-${i}`}>{t}</Button>
            ))
          }
        </div>
      </header>
      <article className='setrole-detail-contain'>
        <header className='setrole-detail-nav'>
          {
            ['操作权限', '数据权限', '成员列表'].map((t, i) => (
              <span
                onClick={() => setNavId(i)}
                className={cs('setrole-detail-navItem', {'selected': i === navId})}
                key={`btn-${i}`}
              >{t}</span>
            ))
          }
        </header>
        <section className='setrole-detail-list'>
          {
            navId === 0 &&
            [
              {
                title: '功能类型',
                dataSource: [
                  {
                    label: '查看订单', value: 'view'
                  },
                  {
                    label: '查看订单1', value: 'view1'
                  },
                  {
                    label: '查看订单2', value: 'view2'
                  },
                  {
                    label: '查看订单3', value: 'view3'
                  },
                  {
                    label: '查看订单4', value: 'view4'
                  },
                  {
                    label: '查看订单5', value: 'view5'
                  },

                ]
              },
              {
                title: '功能类型',
                dataSource: [
                  {
                    label: '查看订单', value: 'view'
                  },
                  {
                    label: '查看订单1', value: 'view1'
                  },
                  {
                    label: '查看订单2', value: 'view2'
                  },
                  {
                    label: '查看订单3', value: 'view3'
                  },
                  {
                    label: '查看订单4', value: 'view4'
                  },
                  {
                    label: '查看订单5', value: 'view5'
                  },

                ]
              },
              {
                title: '功能类型',
                dataSource: [
                  {
                    label: '查看订单', value: 'view'
                  },
                  {
                    label: '查看订单1', value: 'view1'
                  },
                  {
                    label: '查看订单2', value: 'view2'
                  },
                  {
                    label: '查看订单3', value: 'view3'
                  },
                  {
                    label: '查看订单4', value: 'view4'
                  },
                  {
                    label: '查看订单5', value: 'view5'
                  },

                ]
              }
            ].map((data, i) => {

              return (
                <section key={`type-${i}`} className='setrole-detail-ls-wrap'>
                  <header className='setrole-detail-ls-head'>{data.title}</header>
                  <Row className='setrole-detail-ls-contain'>
                  {
                    data.dataSource.map((dt, j) => (
                      <Col span={8} key={`${j}_${dt.value}`} className='setrole-detail-ls-item'>{dt.label}</Col>
                    ))
                  }
                  </Row>
                </section>
              )
            })
          }
          {
            navId === 1 &&
            <article className='setrole-detail-data-wrap'>
              <header className='setrole-detail-data-header'>数据权限<span>（设置该角色的用户可以操作的数据的范围）</span></header>
              <ul className='setrole-detail-data-contain'>
                {
                  [
                    {title: '个人', desc: '只能操作自己的数据'},
                    {title: '所属中心', desc: '能操作自己、下属、和自己所属中心的数据'},
                    {title: '全中心', desc: '能操作全中心的数据'}
                  ].map((_, i) => (
                    <li key={`${i}`} className='setrole-detail-data-item'>
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

export default RoleDetail;
import { Table, Input, Select, Row, Col, DatePicker, Button } from 'antd';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import cs from 'classnames';
import './index.less';
const { RangePicker } = DatePicker;
// 中心数据
const CENTER_DATA = [
  {label: '上海第一人民医院', value: '0'},
  {label: '上海第二人民医院', value: '1'},
  {label: '上海第三人民医院', value: '2'},
  {label: '上海第四人民医院', value: '3'},
  {label: '上海第五人民医院', value: '4'},
  {label: '上海第六人民医院', value: '5'},
]
// 员工数据
const DATA = [
  {
    name: '三毛',
    class: '销售部',
    position: '总监',
    status: 0,
    phone: 15209183434,
    onlineStatus: 0,
    lastLoginTime: '2022-10-27'
  }
];
// 员工列表columns
const columns = [
  {
    key: 'name',
    dataIndex: 'name',
    title: '姓名',
  },
  {
    key: 'class',
    dataIndex: 'class',
    title: '部门',
  },
  {
    key: 'position',
    dataIndex: 'position',
    title: '职务',
  },
  {
    key: 'status',
    dataIndex: 'status',
    title: '账号状态',
  },
  {
    key: 'phone',
    dataIndex: 'phone',
    title: '手机号',
  },
  {
    key: 'onlineStatus',
    dataIndex: 'onlineStatus',
    title: '在线状态',
  },
  {
    key: 'lastLoginTime',
    dataIndex: 'lastLoginTime',
    title: '最后登陆时间',
  },
  {
    key: 'operate',
    dataIndex: 'operate',
    title: '操作',
    render() {
      return [
        <Link key='operate-detail' to='detail'>详情</Link>,
        <span key='operate-edit'>编辑</span>,
        <span key='operate-set'>设置</span>,
        <span key='operate-del'>删除</span>
      ]
    }
  }
]

const User = () => {
  const [centerId, setCenterId] = useState('0');
  const dataSource = useMemo(() => {
    return DATA;
  }, [])

  return (
    <section  className='setuser-wrapper'>
      <aside className='setuer-asider'>
        <h2  className='setuer-asider-title'>员工管理</h2>
        <ul className='setuer-asider-content'>
        {
          CENTER_DATA.map((c) => (
            <li
              onClick={() => setCenterId(c.value)}
              className={cs('setuer-asider-subTitle', {'selected': centerId === c.value})}
              key={`${c.value}`}
            >{c.label}</li>
          ))
        }
        </ul>
      </aside>
      <article className='setuer-article-wrapper'>
        <header className='setuer-article-filter'>
          <Row className='setuer-article-filter-sub'>
            <Col span={5}>
              <Input placeholder='ID/患者姓名/手机号' className='setuer-article-input' />
            </Col>
            <Col span={5}>
              <Select options={[{label: '职务一', value: 0}]} className='setuer-article-select' placeholder='请选择职务' />
            </Col>
            <Col span={5}>
            <Select options={[{label: '在线', value: 0}]} className='setuer-article-select' placeholder='请选择状态' />
            </Col>
            <Col span={5}>
              <RangePicker className='setuer-article-rangePicker' />
            </Col>
            <Col span={4}>
              <Button className='setuer-article-btn-query' type='primary'>查询</Button><Button className='setuer-article-btn-reset'>重置</Button>
            </Col>
          </Row>
          <div className='setuer-article-filter-btns'>
            {
              ['新增员工', '修改中心', '修改职务', '设置状态', '重置密码', '导入数据'].map((t, i) => (
                <Button className='filter-btn' key={`btn-${i}`}>{t}</Button>
              ))
            }
          </div>
        </header>
        <section className='setuer-list-wrapper'>
          <Table dataSource={dataSource} columns={columns} />
        </section>
      </article>
    </section>
  )
}

export default User;
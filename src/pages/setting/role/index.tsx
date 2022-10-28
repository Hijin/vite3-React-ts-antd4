import { Table, Input, Row, Col, Button } from 'antd';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import './index.less';

// 员工数据
const DATA = [
  {
    name: '三毛',
    number: 100,
    person: '刚',
    status: 0,
    desc: '描述',
    updateTime: '2022-10-27'
  }
];
// 员工列表columns
const columns = [
  {
    key: 'name',
    dataIndex: 'name',
    title: '职务名称',
  },
  {
    key: 'status',
    dataIndex: 'status',
    title: '状态',
  },
  {
    key: 'number',
    dataIndex: 'number',
    title: '成员数量',
  },
  {
    key: 'desc',
    dataIndex: 'desc',
    title: '职务描述',
  },
  {
    key: 'updateTime',
    dataIndex: 'updateTime',
    title: '更新时间',
  },
  {
    key: 'operate',
    dataIndex: 'operate',
    title: '操作',
    render() {
      return [
        <span key='operate-power'>设置权限</span>,
        <Link to='detail' key='operate-edit'>编辑职务</Link>,
        <span key='operate-add'>添加人员</span>,
        <span key='operate-state'>设置状态</span>,
        <span key='operate-copy'>复制</span>,
        <span key='operate-del'>删除</span>
      ]
    }
  }
]

const Role = () => {
  const dataSource = useMemo(() => {
    return DATA;
  }, [])

  return (
    <section  className='setrole-wrapper'>
      <article className='setrole-article-wrapper'>
        <header className='setrole-article-filter'>
          <h2 className='setrole-asider-title'>职务管理</h2>
          <Row className='setuer-article-filter-sub'>
            <Col span={4}>
              <Input placeholder='职务名称' className='setuer-article-input' />
            </Col>
            <Col span={18}>
              <Button className='setuer-article-btn-query' type='primary'>查询</Button><Button className='setuer-article-btn-reset'>重置</Button>
            </Col>
            <Col span={2}>
              <Button className='setuer-article-btn-create'>新建职务</Button>
            </Col>
          </Row>
        </header>
        <section className='setrole-list-wrapper'>
          <Table dataSource={dataSource} columns={columns} />
        </section>
      </article>
    </section>
  )
}

export default Role;
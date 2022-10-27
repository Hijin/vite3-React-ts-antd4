import { Table, Input, Row, Col, Button } from 'antd';
import { useMemo } from 'react';
import './index.less';

// 员工数据
const DATA = [
  {
    name: '三毛',
    number: 100,
    person: '刚',
    status: 0,
    desc: '描述',
    onlineStatus: 0,
    lastLoginTime: '2022-10-27'
  }
];
// 员工列表columns
const columns = [
  {
    key: 'name',
    dataIndex: 'name',
    title: '中心名称',
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
    key: 'person',
    dataIndex: 'person',
    title: '主管人员',
  },
  {
    key: 'desc',
    dataIndex: 'desc',
    title: '中心描述',
  },
  {
    key: 'operate',
    dataIndex: 'operate',
    title: '操作',
    render() {
      return [
        <span key='operate-edit'>编辑</span>,
        <span key='operate-set'>设置状态</span>,
        <span key='operate-del'>删除</span>
      ]
    }
  }
]

const Center = () => {
  const dataSource = useMemo(() => {
    return DATA;
  }, [])

  return (
    <section  className='setcenter-wrapper'>
      <article className='setcenter-article-wrapper'>
        <header className='setcenter-article-filter'>
          <h2 className='setcenter-asider-title'>员工管理</h2>
          <Row className='setuer-article-filter-sub'>
            <Col span={4}>
              <Input placeholder='部门名称' className='setuer-article-input' />
            </Col>
            <Col span={18}>
              <Button className='setuer-article-btn-query' type='primary'>查询</Button><Button className='setuer-article-btn-reset'>重置</Button>
            </Col>
            <Col span={2}>
              <Button className='setuer-article-btn-create'>新建部门</Button>
            </Col>
          </Row>
        </header>
        <section className='setcenter-list-wrapper'>
          <Table dataSource={dataSource} columns={columns} />
        </section>
      </article>
    </section>
  )
}

export default Center;
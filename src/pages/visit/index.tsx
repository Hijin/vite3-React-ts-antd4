import { Table, Input, Select, Row, Col } from 'antd';
import imgM from '@/assets/imgs';
import './index.less';

const { Search } = Input;

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];


const Visit = () => {
  return (
    <section className='um-visit-wrapper'>
      <header className='um-visit-header'>
        <section className='um-visit-header-0'>
          <img className='um-visit-header-img' src={imgM['0']} />
          <div>
            <p>随访任务总数</p>
            <h2>3400</h2>
          </div>
        </section>
        <section className='um-visit-header-1'>
          <img className='um-visit-header-img' src={imgM['1']} />
          <div>
            <p>待随访任务数</p>
            <h2>1200</h2>
          </div>
        </section>
        <section className='um-visit-header-2'>
          <img className='um-visit-header-img' src={imgM['2']} />
          <div>
            <p>已完成任务数</p>
            <h2>359</h2>
          </div>
        </section>
        <section className='um-visit-header-3'>
          <img className='um-visit-header-img' src={imgM['3']} />
          <div>
            <p>今日随访任务数</p>
            <h2>10</h2>
          </div>
        </section>
      </header>
      <section className='um-visit-contain'>
        <header className='um-visit-filter'>
          <section>
            <span>今日随访</span><span>待随访</span><span>已完成</span><span>已逾期</span><span>全部任务</span>
          </section>
          <Row>
            <Col span='8'><Search placeholder='ID/患者姓名/手机号' /></Col>
            <Col span='8'><Select options={[{label: '全部科研中心', value: '0'}]} placeholder='请选择' /></Col>
            <Col span='8'><Select options={[{label: '全部科研中心', value: '0'}]} placeholder='请选择访视类型' /></Col>
          </Row>
        </header>
        <section className='um-visit-content'>
          <Table dataSource={dataSource} columns={columns} />
        </section>
      </section>
    </section>
  )
}

export default Visit;

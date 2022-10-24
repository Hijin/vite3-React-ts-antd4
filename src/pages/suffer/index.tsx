import { useState, useMemo } from 'react';
import { Table } from 'antd';
import cs from 'classnames';
import type { ColumnsType } from 'antd/es/table';
import './index.less';

interface DataType {
  key: number;
  order: number;
  number: number;
  name: string;
  sex: number
  sufferNumber: number;
  diagnose: string;
  center: string
  view: string[]
}

const columns: ColumnsType<DataType> = [
  {
    title: '序号',
    dataIndex: 'order',
    key: 'order',
    render: order => <>{order}</>,
  },
  {
    title: '病例号',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '性别',
    key: 'sex',
    dataIndex: 'sex',
    render: _ => (
      <>
        {_ === 0 ? '男' : '女'}
      </>
    ),
  },
  {
    title: '受试者编号',
    key: 'sufferNumber',
    dataIndex: 'sufferNumber'
  },
  {
    title: '诊断',
    key: 'diagnose',
    dataIndex: 'diagnose'
  },
  {
    title: '中心',
    key: 'center',
    dataIndex: 'center'
  },
  {
    title: '访视',
    key: 'view',
    dataIndex: 'view',
    render: _ => (
      <>
        {
          [1,2,3].map(r => {
            return (
              <div key={r}>{r}{_}</div>
            )
          })
        }
      </>
    ),
  },
];

const data0: DataType[] = [
  {
    key: 1,
    order: 1,
    number: 123456,
    name: '张三',
    sex: 1,
    sufferNumber: 34,
    diagnose: '典型哮喘1',
    center: 'XXX',
    view: ['1','2','3']
  },
  {
    key: 2,
    order: 2,
    number: 143673,
    name: '李四',
    sex: 0,
    sufferNumber: 32,
    diagnose: '胸闷变异性哮喘',
    center: 'XXX',
    view: ['1','2','3']
  }
];

const data1: DataType[] = [
  {
    key: 1,
    order: 1,
    number: 123456,
    name: '张三',
    sex: 1,
    sufferNumber: 34,
    diagnose: '典型哮喘',
    center: 'XXX',
    view: ['1','2','3']
  },
  {
    key: 2,
    order: 2,
    number: 143673,
    name: '李四',
    sex: 0,
    sufferNumber: 32,
    diagnose: '胸闷变异性哮喘',
    center: 'XXX',
    view: ['1','2','3']
  },
  {
    key: 3,
    order: 3,
    number: 134521,
    name: '封三',
    sex: 0,
    sufferNumber: 45,
    diagnose: '咳嗽变异性哮喘',
    center: 'XXX',
    view: ['1','2','3']
  },
];

const SufferTable = (props: {data: DataType[]}) => {
  const { data } = props;
  return <Table columns={columns} dataSource={data} />
}

const Suffer = () => {
  const [sufState, setSufState] = useState<number>(0);
  const sourceData = useMemo(() => {
    return [data0, data1][sufState]
  }, [sufState])

  return (
    <section className='suffer-wrapper'>
      <header className='suffer-header'>
        <span onClick={() => setSufState(0)} className={cs('suffer-header-span1', {'selected': sufState === 0})}>已入组患者</span>
        <span onClick={() => setSufState(1)} className={cs('suffer-header-span0', {'selected': sufState === 1})}>未入组患者</span>
      </header>

      <section className='suffer-content'>
        <SufferTable data={sourceData} />
      </section>
    </section>
  )
}

export default Suffer;

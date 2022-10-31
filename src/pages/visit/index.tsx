import { Table, Input, Select, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import cs from 'classnames';
import imgM from '@/assets/imgs';
import './index.less';

const { Search } = Input;


const data = [
  {
    key: 1,
    order: 1,
    number: 123456,
    phone: 15208889003,
    name: '张三',
    sex: 1,
    sufferNumber: 34,
    diagnose: '典型哮喘',
    center: 'XXX',
    currentDate: '2022-10-25',
    nextDate: '2022-01-02',
    status: '未随访',
    view: [
      {
        title: '随诊',
        isEnter: 1,
        isView: 2,
        date: '2022.01.01——2022.01.01'
      }
    ]
  }
];

const columns = [
  {
    title: '受试者编号',
    dataIndex: 'sufferNumber',
    key: 'sufferNumber',
  },
  {
    title: '随访电话',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '中心名称',
    dataIndex: 'center',
    key: 'center',
  },
  {
    title: '患者姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    render(_: number) {
      return _ === 0 ? '男' : '女'
    }
  },
  {
    title: '上一次随访时间',
    dataIndex: 'nextDate',
    key: 'nextDate',
  },
  {
    title: '本次随访时间',
    dataIndex: 'currentDate',
    key: 'currentDate',
  },
  {
    title: '随访状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    render(n: unknown, _:any) {
      return (
        <Link to={`/researchpc/suffer/baseline?isg=${_?.isGroup || 1}&tl=${_?.title || ''}&isv=${_?.isView}`}>详情</Link>
      )
    }
  }
];


const Visit = () => {
  const [id, setId] = useState<number>(0);
  const [values, setValues] = useState<{[key: string]: number | string}>({});

  const sourceData = useMemo(() => {
    return [data][id]
  }, [id])

  const onSearch = (value: string) => {
    setValues({
      ...values,
      name: value
    })
  }
  const onSelect = (value: number | string) => {
    setValues({
      ...values,
      center: value
    })
  }
  const onViewSelect = (value: number | string) => {
    setValues({
      ...values,
      view: value
    })
  }

  console.log('values', values);

  return (
    <section className='um-visit-wrapper'>
      <header className='um-visit-header'>
        {
          [{label: '随访任务总数', value: 3400}, {label: '待随访任务数', value: 1200}, {label: '已完成任务数', value: 359}, {label: '今日随访任务数', value: 10}].map((h, i) => (
            <section key={`head-${i}`} className={`um-visit-header-${i}`}>
              <img className='um-visit-header-img' src={imgM[i]} />
              <div className='um-visit-header-desc'>
                <p className='um-visit-header-text'>{h.label}</p>
                <h2 className='um-visit-header-title'>{h.value}</h2>
              </div>
            </section>
          ))
        }
      </header>
      <section className='um-visit-contain'>
        <header className='um-visit-filter'>
          <div className='um-visit-filter-left'>
            {
              ['今日随访', '待随访', '已完成', '已逾期', '全部任务'].map((text, i) => (
                <span key={`id_${i}`} onClick={() => setId(i)} className={cs({'selected': i === id})}>{text}</span>
              ))
            }
          </div>
          <Row className='um-visit-filter-right'>
            <Col span={8}><Search
              placeholder='ID/患者姓名/手机号'
              className='um-visit-filter-search'
              onSearch={onSearch}
              allowClear
            /></Col>
            <Col span={8}><Select
              options={[{label: '全部科研中心', value: '0'}]}
              className='um-visit-filter-center'
              placeholder='请选择'
              onChange={onSelect}
              allowClear
            /></Col>
            <Col span={8}><Select
              options={[{label: '全部科研中心', value: '0'}]}
              className='um-visit-filter-visit'
              placeholder='请选择访视类型'
              onChange={onViewSelect}
              allowClear
            /></Col>
          </Row>
        </header>
        <section className='um-visit-content'>
          <Table dataSource={sourceData} columns={columns} />
        </section>
      </section>
    </section>
  )
}

export default Visit;

import { useState, useMemo } from 'react';
import { Table } from 'antd';
import cs from 'classnames';
import type { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';
import Search from './Search';
import './index.less';


type ViewData = {
  title: string;
  isView: number;
  isEnter: number;
  date: string;
  isLaster?: boolean;
}
interface DataType {
  key: number;
  order: number;
  number: number;
  name: string;
  sex: number
  sufferNumber: number;
  diagnose: string;
  center: string
  view: ViewData[]
}

const columns: ColumnsType<DataType> = [
  {
    title: '序号',
    dataIndex: 'order',
    key: 'order',
    align: 'center',
    render: order => <>{order}</>,
  },
  {
    title: '病例号',
    dataIndex: 'number',
    align: 'center',
    key: 'number',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    align: 'center',
    key: 'name',
  },
  {
    title: '性别',
    key: 'sex',
    align: 'center',
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
    align: 'center',
    dataIndex: 'sufferNumber'
  },
  {
    title: '诊断',
    key: 'diagnose',
    align: 'center',
    dataIndex: 'diagnose'
  },
  {
    title: '中心',
    key: 'center',
    align: 'center',
    dataIndex: 'center'
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
    diagnose: '典型哮喘1',
    center: 'XXX',
    view: [
      {
        title: '基线',
        isEnter: 0,
        isView: 0,
        date: '2022.01.01——2022.01.01'
      },
      {
        title: '治疗周期一',
        isEnter: 1,
        isView: 1,
        date: '2022.01.01——2022.01.01'
      },
      {
        title: '治疗周期二',
        isEnter: 1,
        isView: 2,
        date: '2022.01.01——2022.01.01'
      },
      {
        title: '治疗周期三',
        isEnter: 1,
        isView: 1,
        date: '2022.01.01——2022.01.01'
      },
      {
        title: '随诊',
        isEnter: 2,
        isView: 2,
        date: '2022.01.01——2022.01.01'
      }
    ]
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
    view: [
      {
        title: '基线',
        isEnter: 0,
        isView: 0,
        date: '2022.01.01——2022.01.01'
      },
      {
        title: '治疗周期一',
        isEnter: 1,
        isView: 2,
        date: '2022.01.01——2022.01.01'
      },
      {
        title: '治疗周期二',
        isEnter: 2,
        isView: 2,
        date: '2022.01.01——2022.01.01'
      },
      {
        title: '治疗周期三',
        isEnter: 1,
        isView: 2,
        date: '2022.01.01——2022.01.01'
      },
      {
        title: '随诊',
        isEnter: 1,
        isView: 2,
        date: '2022.01.01——2022.01.01'
      }
    ]
  }
];

const data0: DataType[] = [
  {
    key: 1,
    order: 1,
    number: 123456,
    name: '张三',
    sex: 1,
    sufferNumber: 34,
    diagnose: '典型哮喘',
    center: 'XXX',
    view: [
      {
        title: '随诊',
        isEnter: 1,
        isView: 2,
        date: '2022.01.01——2022.01.01'
      }
    ]
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
    view: [
      {
        title: '随诊',
        isEnter: 1,
        isView: 2,
        date: '2022.01.01——2022.01.01'
      }
    ]
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
    view: [
      {
        title: '随诊',
        isEnter: 1,
        isView: 2,
        date: '2022.01.01——2022.01.01'
      }
    ]
  },
];

const OPTIONS1 = [
  {
    key: 'kyzx',
    type: 'select',
    title: '科研中心',
    options: [
      {
        label: '全部',
        value: 'all'
      },
      {
        label: '科研1',
        value: '1'
      },
      {
        label: '科研2',
        value: '2'
      },
      {
        label: '科研3',
        value: '3'
      },
    ]
  },
  {
    key: 'grounds',
    type: 'select',
    title: '分组',
    options: [
      {
        label: '分组1',
        value: '1'
      },
      {
        label: '分组2',
        value: '2'
      },
      {
        label: '分组3',
        value: '3'
      },
    ]
  },
  {
    key: 'vistType',
    type: 'select',
    title: '访视类型',
    options: [
      {
        label: '基线',
        value: 'bl'
      },
      {
        label: '治疗周期1',
        value: 'zlzq1'
      },
      {
        label: '治疗周期2',
        value: 'zlzq2'
      },
      {
        label: '治疗周期3',
        value: 'zlzq3'
      },
      {
        label: '随访',
        value: 'vist'
      }
    ]
  },
  {
    key: 'vistState',
    type: 'select',
    title: '访视状态',
    options: [
      {
        label: '未录入',
        value: '0'
      },
      {
        label: '已录入',
        value: '1'
      },
      {
        label: '部分录入',
        value: '2'
      }
    ]
  },
  {
    key: 'viewStatus',
    type: 'select',
    title: '随访状态',
    options: [
      {
        label: '未随访',
        value: '0'
      },
      {
        label: '已随访',
        value: '1'
      },
      {
        label: '已逾期',
        value: '2'
      }
    ]
  }
]
const OPTIONS0 = [
  {
    key: 'kyzx',
    type: 'select',
    title: '科研中心',
    options: [
      {
        label: '全部',
        value: 'all'
      },
      {
        label: '科研1',
        value: '1'
      },
      {
        label: '科研2',
        value: '2'
      },
      {
        label: '科研3',
        value: '3'
      },
    ]
  },
  {
    key: 'ssz',
    type: 'input',
    title: '受试者编号',
  }
]

const List = (props: {data: DataType[], isGroup: number}) => {
  const { data, isGroup } = props;
  const navigate = useNavigate();
  return <Table
    columns={[
      ...columns,
      {
        title: '访视',
        key: 'view',
        dataIndex: 'view',
        width: '710px',
        align: 'center',
        render: _ => (
          <>
            {
              isGroup === 0 ?
              _.map((r: ViewData, i: number) => {
                return (
                  <section key={`${i}_1`} className={cs('suffer-uncard-wrap')}>
                    <header className='suffer-card-head'>{r.title}</header>
                    <section className='suffer-card-contain'>
                      <span className='suffer-card-contain-view'>{['未随访', '已随访', '已逾期'][r.isView]}</span>
                      <span className='suffer-card-contain-enter'>{['未录入', '全部录入', '部分录入', ][r.isEnter]}</span>
                    </section>
                    <footer className='suffer-card-footer'>{r.date}</footer>
                  </section>
                )
              }) :
              [..._, {title: '临床研究结束页', isLaster: true}].map((r: ViewData, i: number) => {

                if(r.isLaster) {

                  return (
                    <section key={i} className='suffer-laster-card-wrap'>
                      <section className='suffer-card-contain'>{r.title}</section>
                    </section>
                  )
                }

                /**
                 * 1.出现已逾期，显示红色 #FB6260
                 * 2.已随访且全部录入，显示绿色 #128078
                 * 3.未随访，未录入，或其他，显示黄色 #F7B500
                 *
                 * 访视状态：未录入 #F7B500(黄)、已录入/全部录入 #128078(绿)、部分录入 #0091FF(蓝)
                 * 随访状态：未随访 #F7B500(黄)、已随访 #128078(绿)、已逾期 #FB6260(红)
                 */
                return (
                  <section
                    key={i}
                    className={cs(
                      'suffer-card-wrap',
                      `suffer-card-wrap-${r.isView === 2 ? 2 : (r.isView === 1 && r.isEnter === 1) ? 1 : 0}`
                    )}
                    onClick={() => {
                      navigate(`baseline?isg=${isGroup}&tl=${r.title}&isv=${r.isView}`);
                    }}
                  >
                    <header className='suffer-card-head'>{r.title}</header>
                    <section className='suffer-card-contain'>
                      <span className='suffer-card-contain-view' style={{color: ['#F7B500', '#128078', '#FB6260'][r.isView]}}>{['未随访', '已随访', '已逾期'][r.isView]}</span>
                      <span className='suffer-card-contain-enter' style={{color: ['#F7B500', '#128078', '#0091FF'][r.isView]}}>{['未录入', '全部录入', '部分录入', ][r.isEnter]}</span>
                    </section>
                    <footer className='suffer-card-footer'>{r.date}</footer>
                  </section>
                )
              })
            }
          </>
        ),
      }
    ]}
    dataSource={data}
    pagination={{
      pageSize: 5
    }}
  />
}

const Suffer = () => {
  const [isGroup, setIsGroup] = useState<number>(1);
  const sourceData = useMemo(() => {
    return [data0, data1][isGroup]
  }, [isGroup])
  const OPTIONS = useMemo(() => {
    return [OPTIONS0, OPTIONS1][isGroup]
  }, [isGroup])

  return (
    <section className='suffer-wrapper'>
      <header className='suffer-header'>
        <span onClick={() => setIsGroup(1)} className={cs('suffer-header-span1', {'selected': isGroup === 1})}>已入组患者</span>
        <span onClick={() => setIsGroup(0)} className={cs('suffer-header-span0', {'selected': isGroup === 0})}>未入组患者</span>
      </header>

      <section className='suffer-content'>
        <Search key={`suffer-search-${isGroup}`} options={OPTIONS} />
        <List key={`suffer-list-${isGroup}`} data={sourceData} isGroup={isGroup} />
      </section>
    </section>
  )
}

export default Suffer;

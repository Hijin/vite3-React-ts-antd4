import { useState, useEffect } from 'react';
import { Input, Button, Image, Tabs, Pagination, Empty } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Add1Img } from '@/assets/imgs';
import { Loading, SelectNet } from '@/components';
import ProjectCard from '../components/projectCard';
import './index.less';
const { Search } = Input;

const TabItems = [
  { label: '全部', key: 'all' },
  { label: '进行中', key: 'doing' },
  { label: '已结束', key: 'over' },
  { label: '已逾期', key: 'oueDate' }
];
const ProjectList = () => {
  const navigate = useNavigate()
  const [list, setList] = useState<any[]>([]);
  const [paginationInfo, setPaginationInfo] = useState({
    pageNum: 1,
    pageSize: 9,
    total: 50
  });
  // eslint-disable-next-line
  let [curTabKey, setCurTabKey] = useState(TabItems[0].key)
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getLists();
  }, []);
  const onSearch = (prop: string, searchVal: any) => {
    // eslint-disable-next-line
    console.log(searchVal)
  };
  const handleTabClick = (key: string) => {
    paginationInfo.pageNum = 1;
    setPaginationInfo({
      ...paginationInfo
    });
    curTabKey = key;
    setCurTabKey(key);
    getLists();
  };
  const handlePageChange = (page: number) => {
    paginationInfo.pageNum = page;
    setPaginationInfo({
      ...paginationInfo
    });
    getLists();
  };
  const getLists = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const arr = [];
      for (let i = 1; i < 9; i++) {
        arr.push({
          id: i,
          name: `项目名称${i}`,
          state: i % 3,
          timeStart: '2022.03.02',
          timeEnd: '2023.03.02',
          desc:
            i % 2 === 0
              ? '项目描述是这样的项目描述是这样的项目描述是这样的项目描述是这样的项目描述是这样的项目描述是这样的项目描述是这样的项目描述是这样的项目描述是这样的项目描述是这样的项目描述是这样的项目描述是这样的项目描述是这样的项目描述是这样的项目描述是这样的项目描述是这样的'
              : '但是接口豆干',
          count: 20,
          people: [
            {
              name: '张三啥孤岛惊魂1',
              icon: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            },
            { name: '张三啥孤岛惊魂2', icon: '' },
            { name: '张三啥孤岛惊魂3', icon: '' },
            { name: '张三啥孤岛惊魂4', icon: '' },
            { name: '张三啥孤岛惊魂5', icon: '' },
            { name: '张三啥孤岛惊魂6', icon: '' }
          ],
          unit:
            i % 2 === 0
              ? [
                {
                  name: '上海市第一人民医院',
                  department: ' 呼吸与危重医学科'
                },
                {
                  name: '浙江大学医学院附属二院',
                  department: ' 呼吸与危重医学科'
                }
              ]
              : [],
          header: [
            { name: '张三', title: '教授' },
            { name: '李四', title: '教授' }
          ]
        });
      }
      setList(arr);
    }, 1000);
  };
  return (
    <div className="project br-10 bg-w h-full flex-col">
      <div className="flex-b">
        <div className="flex-h-c">
          <div className="project__title ft-16 ft-b flex-h-c">科研中心</div>
          <Search
            className="ml-15"
            placeholder="项目名称"
            onSearch={(val) => onSearch('name', val)}
            style={{ width: 200 }}
          />
          <label className='col-6 ml-40'>
            科研中心：
          </label>
          <SelectNet
            className="ml-10"
            placeholder="请选择"
            onChange={(val: any) => onSearch('depart', val)}
            style={{ width: 200 }}
          />
        </div>
        <Button type="primary" ghost shape="round" onClick={() => navigate('create')}>
          <>
            <Image src={Add1Img} preview={false} width={14} height={14} />
            <span className="ml-10">创建项目</span>
          </>
        </Button>
      </div>
      <Tabs
        items={TabItems}
        activeKey={curTabKey}
        onTabClick={handleTabClick}
      />
      <div className="flex-1 flex-col over-hide">
        {!loading && list.length === 0 ? <Empty /> : <>
          <div className="flex-1 over-auto pos-rlt flex-wp">
            <Loading loading={loading} />
            {list.map((v): any => (
              <ProjectCard info={v} key={v.id} />
            ))}
          </div>
          <div className="mt-20 flex-v-e">
            <Pagination
              current={paginationInfo.pageNum}
              pageSize={paginationInfo.pageSize}
              total={paginationInfo.total}
              showSizeChanger={false}
              onChange={handlePageChange}
            />
          </div>
        </>}
      </div>
    </div>
  );
};

export default ProjectList;

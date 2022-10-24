import { useState, useEffect } from 'react';
import { Input, Button, Image, Tabs, Pagination } from 'antd';
import { Add1Img } from '@/assets/imgs';
import { Loading } from '@/components';
import './index.less';
const { Search } = Input;

const TabItems = [
  { label: '全部', key: 'all' },
  { label: '进行中', key: 'doing' },
  { label: '已结束', key: 'over' },
  { label: '已逾期', key: 'oueDate' }
];
const Project = () => {
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
  const onSearch = (searchVal: string) => {
    document.write(searchVal);
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
    }, 2000);
  };
  return (
    <div className="project br-10 bg-w h-full flex-col">
      <div className="flex-b">
        <div className="flex-h-c">
          <div className="project__title ft-16 ft-b flex-h-c">科研中心</div>
          <Search
            className="ml-15"
            placeholder="全部科研中心"
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </div>
        <Button type="primary" ghost shape="round">
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
      <div className="flex-1 flex-col">
        <div className="flex-1 ov-auto pos-rlt">
          <Loading loading={loading} />
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
      </div>
    </div>
  );
};

export default Project;

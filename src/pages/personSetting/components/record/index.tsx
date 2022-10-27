import { useState, useEffect } from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: '设备名称',
    dataIndex: 'os',
    key: 'os',
  },
  {
    title: '设备IP',
    dataIndex: 'ipaddr',
    key: 'ipaddr',
    render(_: any, record: any) {
      return (
        `${record.loginLocation} ${record.ipaddr}`
      )
    }
  },
  {
    title: '时间',
    dataIndex: 'loginTime',
    key: 'loginTime',
  },
]
const Record = () => {
  const [loading, setLoading] = useState(false)
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [paginationInfo, setPaginationInfo] = useState({
    pageNum: 1,
    pageSize: 9,
    total: 50
  });

  useEffect(() => {
    getListData()
  }, [])
  const getListData = () => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
      setDataSource([
        {id:1},
        {id:2},
        {id:3}
      ])
    },1000)
  }
  const handlePageChange = (page: number) => {
    paginationInfo.pageNum = page
    setPaginationInfo({ ...paginationInfo })
    getListData()
  }

  return (
    <div >
      <Table
        rowKey='id'
        loading={loading}
        dataSource={dataSource}
        columns={columns}
        pagination={{
          current: paginationInfo.pageNum,
          total: paginationInfo.total,
          pageSize: paginationInfo.pageSize,
          onChange: handlePageChange
        }}
      />
    </div>
  );
};

export default Record;

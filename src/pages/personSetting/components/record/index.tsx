import { useState } from 'react';
import {Table} from 'antd';

const Record = () => {
  const [loading,setLoading] = useState(false)
  const [dataSource, setDataSource] = useState<any[]>([]);
  setLoading(false)
  setDataSource([])
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
      render(_:any, record:any) {
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

  return (
    <div >
      <Table
        rowKey='infoId'
        loading={loading}
        dataSource={dataSource}
        columns={columns}
        pagination={{
        }}
      />
    </div>
  );
};

export default Record;

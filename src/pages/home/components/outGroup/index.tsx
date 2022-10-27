import { useEffect, useState } from 'react'
import { Input, Table } from "antd"
import HomeCard from "../homeCard"
import columns from './tableColumns'
import './index.less'

const OutGroup = () => {
  const [list, setList] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [paginationInfo, setPaginationInfo] = useState({
    pageNum: 1,
    pageSize: 10,
    total: 50
  });
  useEffect(() => {
    getListData()
  }, [])
  const getListData = () => {
    console.log(paginationInfo);

    setLoading(true)
    setTimeout(() => {
      setList([
        { key: 22,7:'1212' },
        { key: 23 },
        { key: 24 },
        { key: 25 }
      ])
      setLoading(false)
    }, 1000)
  }
  const handlePageChange = (page: number) => {
    paginationInfo.pageNum = page
    setPaginationInfo({ ...paginationInfo })
    getListData()
  }
  const handleInGroup = (record: any, index: number) => {
    console.log(record, index);
  }
  return <HomeCard
    title="待入组患者"
    titleRight={<Input.Search
      placeholder="ID/患者姓名/手机号"
      onSearch={getListData}
      style={{ width: 200 }} />}>
    <Table
      className='mt-15 home-out-group'
      loading={loading}
      dataSource={list}
      columns={columns({
        onInGroup: handleInGroup
      })}
      scroll={{ y: 200 }}
      pagination={{
        current: paginationInfo.pageNum,
        total: paginationInfo.total,
        pageSize: paginationInfo.pageSize,
        onChange: handlePageChange
      }}
    />
  </HomeCard>
}
export default OutGroup
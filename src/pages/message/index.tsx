// import UserItem from './UserItem';
// import { useState } from 'react';
import imgM from '@/assets/imgs';
import './index.less';

const Message = () => {
  // 设置标记人数
  // const [replayData, setReplayData] = useState(0)
  // 消息中心数据
  const informationCenter = {data: {}, loading: false};
  // const informationCenter = useRequest(
  //   (query = 'pageSize=10&pageNumber=1') => ({
  //     url: `/stage-api/platform-system/communicationMegInfo/informationCenter?${query}`,
  //     method: 'GET',
  //   }),
  //   {
  //     manual: false,
  //   },
  // );
  // const InfoCenterData = [];

  if (informationCenter.loading) {
    return <span>加载中</span>;
  }

  return (
    <div className="ld_user-container">
      <header className="ld_user-header">
        {[
          {
            id: 1,
            icon: 'new',
            desc: '今日新增留言',
            value: 100,
          },
          {
            id: 2,
            icon: 'time',
            desc: '已回复人数',
            value: 100,
          },
          {
            id: 3,
            icon: 'rep',
            desc: '当前待回复人数',
            value: 100,
          },
          {
            id: 4,
            icon: 'tab',
            desc: '标记人数',
            value: 200,
          },
        ].map((item: any, index) => {
          return (
            <div key={`${item.id}_${index}`} className="ld_user-header-item">
              <img
                src={imgM[item.icon]}
                alt={item.icon}
              />
              <div className="ld_user-header-item-info">
                <span>{item.desc}</span>
                <p>{item.value}</p>
              </div>
            </div>
          );
        })}
      </header>

      <nav className="ld_user-nav">
        {[
          {
            id: 'all',
            name: '全部',
            value: 10,
          },
          {
            id: 'new',
            name: '今日新增',
            value: 100,
          },
          {
            id: 'reply',
            name: '待回复',
            value: 100,
          },
          {
            id: 'tab',
            name: '已标记',
            value: 100,
          },
          {
            id: 'replied',
            name: '已回复',
            value: 100,
          },
        ].map((item, index) => {
          return (
            <div key={item.id} className="ld_user-nav-item">
              <span>{item.name}</span>
              {index === 0 ? (
                <span>({item.value})</span>
              ) : (
                <span>{item.value}</span>
              )}
            </div>
          );
        })}
      </nav>

      <section className="ld_user-content">
        {/* {[].map((item: any, index: any) => {
          return (
            <UserItem
              callback={(replay = 0) => {
                setReplayData(replayData + replay);
              }}
              key={`ld_user_item_${index}`}
              {...item}
            />
          );
        })} */}
        <span>暂无数据</span>
      </section>
    </div>
  );
};

export default Message;

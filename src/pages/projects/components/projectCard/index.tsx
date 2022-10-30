import { useEffect, useState } from 'react';
import { Image, Button, Modal } from 'antd';
import { inject } from 'mobx-react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import cs from 'classnames';
import { Tool } from '@/utils';
import './index.less';

const { formatDate } = Tool;
const StateConfigs = {
  overdue: {
    id: 0,
    bodyClassName: 'project-card--overdue',
    stateClassName: 'project-card__state--overdue',
    state: '已逾期',
    actions: ['详情', '编辑', '删除']
  },
  doing: {
    id: 1,
    bodyClassName: 'project-card--doing',
    stateClassName: 'project-card__state--doing',
    state: '进行中',
    actions: ['详情', '编辑', '删除']
  },
  over: {
    id: 2,
    bodyClassName: 'project-card--over',
    stateClassName: 'project-card__state--over',
    state: '已结束',
    actions: ['详情']
  }
};
const ProjectCard = ({ info,userStore }: any) => {
  const navigate = useNavigate()
  const [stateConfig, setStateConfig] = useState<any>({});
  useEffect(() => {
    const config = Object.values(StateConfigs).find(
      (v: any) => v.id === +info.state
    );
    setStateConfig(config);
  }, [info]);

  const handleBottomAction = (action: string,event:Event) => {
    event.stopPropagation()
    if (action === '详情') {
      return navigate(`create?id=${info.id}&detail=1`)
    }
    if (action === '编辑') {
      return navigate(`create?id=${info.id}`);
    }
    if (action === '删除') {
      return handleDeleteProject();
    }
  };
  const handleDeleteProject = () => {
    Modal.confirm({
      title: '确定删除该项目?',
      icon: <ExclamationCircleOutlined />,
      content: '删除后不可恢复！',
      onOk() {
        return new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });
      },
    });
  }
  const handleProjectClick = () =>{
    userStore.setCurrentProject(info)
    navigate(`/researchpc/suffer?id=${info.id}`)
  }

  return (
    <div className="project-card pointer" onClick={handleProjectClick}>
      <div
        className={cs('project-card__body br-10', stateConfig.bodyClassName)}
      >
        <div className="flex-h-c flex-b">
          <span className="ft-16 ft-b col-3">{info.name}</span>
          <span
            className={cs('ft-16 ft-b flex-h-c', stateConfig.stateClassName)}
          >
            {stateConfig.state}
          </span>
        </div>
        <div className="flex-h-c mt-20">
          <span className="ft-12 col-9">
            {formatDate(info.timeStart, 'yyyy.MM.dd')}—
          </span>
          <span className="ft-12 col-9">
            {formatDate(info.timeEnd, 'yyyy.MM.dd')}
          </span>
        </div>
        <div className="ft-12 mt-20 col-3 line-3 lh-24">{info.desc}</div>
        <div className="project-card__people flex-h-c flex-b">
          <div className="flex">
            {info.people.slice(0, 5).map((v: any) => (
              <div key={v.name} className="project-card__people__item">
                <Image
                  src={v.icon}
                  width={32}
                  height={32}
                  className="project-card__people__item__icon"
                ></Image>
                <div className="line-1 ft-10 col-9">{v.name}</div>
              </div>
            ))}
            {info.people.length > 5 && <span>...</span>}
          </div>
          <span className="col-3 ft-28 ft-b">
            {info.count}
            <span className="ft-12">/人</span>
          </span>
        </div>
        <div className="ft-12 col-9 mt-40">组长单位：</div>
        <div className="mt-15">
          {info.unit.map((v: any) => (
            <div className="flex-h-c lh-24" key={v.name}>
              <span className="ft-14 col-3 ft-b">{v.name}</span>
              <span className="mh-10">|</span>
              <span className="ft-12 col-9">{v.department}</span>
            </div>
          ))}
        </div>
        <div className="ft-12 col-9 mt-40">项目负责人:</div>
        <div className="mt-15">
          {info.header.map((v: any) => (
            <div className="flex-h-c lh-24" key={v.name}>
              <span className="ft-14 col-3 ft-b">{v.name}</span>
              <span className="mh-10">|</span>
              <span className="ft-12 col-9">{v.title}</span>
            </div>
          ))}
        </div>
        <div className="project-card__bottom mt-30 flex-b">
          {stateConfig.actions?.map((v: any) => (
            <Button type="link" key={v} onClick={(e) => handleBottomAction(v,e)}>
              {v}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default inject('userStore')(ProjectCard);

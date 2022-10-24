
import { Breadcrumb, Steps } from 'antd';
import { useNavigate, Outlet } from 'react-router-dom';
import './index.less'
const projectCreate = () => {
  const navigate = useNavigate()
  return <div className="project-create">
    <Breadcrumb>
      <Breadcrumb.Item>
        <a onClick={() => { navigate(-1) }}>项目列表</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>创建项目</Breadcrumb.Item>
    </Breadcrumb>
    <Steps
      type="navigation"
      current={-1}
      className="site-navigation-steps mt-20"
    >
      <Steps.Step status="finish" title="填写基础信息" />
      <Steps.Step status="process" title="设置入排条件" />
      <Steps.Step status="wait" title="设置项目流程" />
      <Steps.Step status="wait" title="项目创建完成" />
    </Steps>
    <Outlet />
  </div>
}

export default projectCreate
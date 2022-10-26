
import { useState } from 'react';
import { Breadcrumb, Steps } from 'antd';
import { useNavigate, Outlet } from 'react-router-dom';
import './index.less'
const projectCreate = () => {
  const navigate = useNavigate()
  const [stepCurrent, setStepCurrent] = useState(0)
  const [createInfo, setCreateInfo] = useState(
    {
      baseInfo: {},
      standards: [],
      visitList: []
    }
  )
  const handleInfoChange = (info: any) => {
    console.log('info===>', info)
    setCreateInfo(info)
  }
  return <div className="project-create flex-col over-hide h-full">
    <Breadcrumb>
      <Breadcrumb.Item>
        <a onClick={() => { navigate('/researchpc/projects') }}>项目列表</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>创建项目</Breadcrumb.Item>
    </Breadcrumb>
    <Steps
      type="navigation"
      current={stepCurrent}
      className="site-navigation-steps mt-20"
    >
      <Steps.Step title="填写基础信息" />
      <Steps.Step title="设置入排条件" />
      <Steps.Step title="设置项目流程" />
      <Steps.Step title="项目创建完成" />
    </Steps>
    <Outlet context={{
      info: createInfo,
      onInfoChange: handleInfoChange,
      onChangeStep: (step: number) => setStepCurrent(step)
    }} />
  </div>
}

export default projectCreate
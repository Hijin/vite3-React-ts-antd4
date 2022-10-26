
import { useState, useEffect } from 'react';
import { Breadcrumb, Steps } from 'antd';
import { useNavigate, Outlet, useSearchParams } from 'react-router-dom';
import './index.less'
const projectCreate = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get('id')
  const isDetail = searchParams.get('detail')
  const isEdit = projectId && !isDetail

  const [stepCurrent, setStepCurrent] = useState(0)
  const [createInfo, setCreateInfo] = useState(
    {
      baseInfo: {},
      standards: [],
      visitList: []
    }
  )
  useEffect(() => {
    projectId && getProjectDetail()
  }, [projectId])
  const getProjectDetail = () => {
    // TODO: getProjectDetail
  }
  const handleStepClick = (current: number) => {
    if (!isDetail || stepCurrent === current) return
    setStepCurrent(current)
    const urlParams = `id=${projectId}&detail=${isDetail}`
    current === 0 && navigate(`/researchpc/projects/create?${urlParams}`, { replace: true })
    current === 1 && navigate(`second?${urlParams}`, { replace: true })
    current === 2 && navigate(`third?${urlParams}`, { replace: true })
  }
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
    {!isEdit && <Steps
      type="navigation"
      current={stepCurrent}
      onChange={handleStepClick}
      className="site-navigation-steps mt-20"
    >
      <Steps.Step title="填写基础信息" />
      <Steps.Step title="设置入排条件" />
      <Steps.Step title="设置项目流程" />
      {!isDetail && <Steps.Step title="项目创建完成" />}
    </Steps>}
    <Outlet context={{
      editable: !isDetail,  // 详情不可编辑
      isEdit: isEdit,  // 编辑
      info: createInfo,
      onInfoChange: handleInfoChange,
      onChangeStep: (step: number) => setStepCurrent(step)
    }} />
  </div>
}

export default projectCreate
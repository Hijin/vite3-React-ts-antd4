
import { Breadcrumb } from 'antd';
import { useNavigate } from 'react-router-dom';
import './index.less'
const projectCreate = () => {
  const navigate = useNavigate()
  return <div className="project-create">
    <Breadcrumb>
      <Breadcrumb.Item>
        <a onClick={()=>{navigate(-1)}}>项目列表</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>创建项目</Breadcrumb.Item>
    </Breadcrumb>
  </div>
}

export default projectCreate
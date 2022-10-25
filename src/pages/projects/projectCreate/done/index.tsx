import { CheckCircleFilled } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd'
const Done = () => {
  const navigate = useNavigate()
  return <div className='t-c'>
    <CheckCircleFilled style={{ fontSize: '78px', color: '#128078', marginTop: '186px' }} />
    <div className='ft-16 col-9 ft-b mt-25'>项目创建完成</div>
    <Button className='pc-first__commit-btn' type="primary" shape="round" onClick={() => navigate('/projects')}>完成</Button>
  </div>
}

export default Done
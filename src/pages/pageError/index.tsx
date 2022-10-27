import { useEffect, useState } from 'react';
import { Image, Button } from 'antd'
import { useSearchParams, useNavigate } from 'react-router-dom';
import imgModule from '@/assets/imgs'
import './index.less'
const pageConfigs = [
  { key: '404', code: '404', imgW: 351, imgH: 287, tipText: '非常抱歉，您访问的页面不存在' },
  { key: '500', code: '500', imgW: 382, imgH: 242, tipText: '非常抱歉，服务器出错了' },
  { key: '502', code: '', imgW: 369, imgH: 239, tipText: '非常抱歉，\n您的网络有问题，请刷新后重试' },
  { key: '403', code: '403', imgW: 382, imgH: 265, tipText: '非常抱歉，你无权访问该页面' },
]
const PageError = ({ state }: any) => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();
  const pageState = searchParams.get('state') || state || 404
  const [config, setConfig] = useState<any>({})
  useEffect(() => {
    setConfig(pageConfigs.find((v: any) => v.key === pageState))
  }, [pageState])
  return <div className='page-error flex-c'>
    <Image src={imgModule[config.key]} preview={false} width={config.imgW} height={config.imgH} />
    <div className='ml-25 t-c' >
      {config.code && <div className='col-3 fw-600 ft-70 mb-15'>{config.code}</div>}
      <div className='ft-12 col-9 mb-15'>{config.tipText}</div>
      <Button type="primary" onClick={() => { navigate('/researchpc/projects', { replace: true }) }}>返回首页</Button>
    </div>
  </div>
}

export default PageError
import ReactDOM from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'
import '@/assets/styles/common.less'
import 'antd/dist/antd.css'
import GetRoutes from './routers.js'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <GetRoutes />
  </Router>
)

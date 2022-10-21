import ReactDOM from 'react-dom/client'
import { HashRouter as Router, createBrowserRouter, RouterProvider} from 'react-router-dom'
import '@/assets/styles/common.less'
import 'antd/dist/antd.css'
import routes from './routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={createBrowserRouter(routes)} />
)
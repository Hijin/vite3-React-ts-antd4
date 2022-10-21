import { Suspense, useContext } from 'react'
import { Provider } from 'mobx-react'
import { HashRouter as Router } from 'react-router-dom'
import GetRoutes from '@/routers'
import store from '@/store'
import '@/assets/styles/common.less'
import 'antd/dist/antd.css'

const App = () => {
  return (
    <Provider {...useContext(store)}>
      <Router>
        <Suspense >
          <GetRoutes />
        </Suspense>
      </Router>
    </Provider>

  )
}

export default App
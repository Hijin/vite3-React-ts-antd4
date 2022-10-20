import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import GetRoutes from './routers.js'
import './index.less'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <GetRoutes />
  </Router>
)

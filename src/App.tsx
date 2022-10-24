import { Suspense, useContext } from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import routes from '@/routes';
import store from '@/store';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.less';
import '@/assets/styles/common.less';
import '@/assets/styles/overwrite.less';

const GetRoutes = () => useRoutes(routes);

const App = () => {
  return (
    <ConfigProvider locale={zhCN} >
      <Provider {...useContext(store)}>
        <Router>
          <Suspense>
            <GetRoutes />
          </Suspense>
        </Router>
      </Provider>
    </ConfigProvider>
  );
};

export default App;

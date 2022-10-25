import { Suspense, useContext } from 'react';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routes from '@/routes';
import store from '@/store';
import 'antd/dist/antd.less';
import '@/assets/styles/common.less';
import '@/assets/styles/overwrite.less';
import 'moment/dist/locale/zh-cn';

const GetRoutes = () => useRoutes(routes);

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
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

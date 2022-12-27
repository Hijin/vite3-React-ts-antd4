import {Suspense, useContext} from 'react';
import {ConfigProvider} from 'antd';
import {Provider} from 'mobx-react';
import {BrowserRouter as Router, useRoutes} from 'react-router-dom';
import zhCN from 'antd/es/locale/zh_CN';
import routes from '@/routes';
import store from '@/store';
import 'antd/dist/antd.less';
import '@/assets/styles/common.less';
import 'moment/dist/locale/zh-cn';

const GetRoutes = () => useRoutes(routes);

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
        <Router>
            <Suspense>
            <GetRoutes />
            </Suspense>
        </Router>
    </ConfigProvider>
  );
};

// eslint-disable-next-line react/display-name
export default () => <Provider {...useContext(store)}><App /></Provider>;

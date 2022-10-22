import { Suspense, useContext } from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routes from '@/routes';
import store from '@/store';
import '@/assets/styles/common.less';
import 'antd/dist/antd.css';

const GetRoutes = () => useRoutes(routes);

const App = () => {
  return (
    <Provider {...useContext(store)}>
      <Router>
        <Suspense>
          <GetRoutes />
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;

import { Suspense, useContext } from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routes from '@/routes';
import store from '@/store';
import 'antd/dist/antd.less';
import '@/assets/styles/common.less';
import '@/assets/styles/overwrite.less';

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

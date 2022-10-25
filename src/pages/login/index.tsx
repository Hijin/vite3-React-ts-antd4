import { useEffect } from 'react';
import { inject, observer } from 'mobx-react';

const Login = ({ userStore }: any) => {
  const token = userStore.testP;
  useEffect(() => {
    setTimeout(() => {
      userStore.testPFun('dgskjdgajkdgashgfdhasj');
    }, 2000);
  }, []);

  return (
    <div>
      傲世轻物
      <div>{token}</div>
    </div>
  );
};

export default inject('todoStore', 'userStore')(observer(Login));

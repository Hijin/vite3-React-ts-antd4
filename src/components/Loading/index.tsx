import { useState, useEffect } from 'react';
import { Spin } from 'antd';
import cs from 'classnames';
import { Tool } from '@/utils';
import './index.less';

const { safeTimeout } = Tool;
type LoadingProps = {
  loading: boolean;
};
const Loading = ({ loading }: LoadingProps) => {
  const [showLoading, setShowLoading] = useState(false);
  useEffect(() => {
    if (loading) {
      return setShowLoading(true);
    }
    safeTimeout(() => {
      setShowLoading(false);
    }, 600);
  }, [loading]);

  return (
    <>
      {showLoading ? (
        <div
          className={cs('research-loading pos-abs w-full h-full flex-c', {
            'research-loading--show': loading
          })}
        >
          <Spin size="large" />
        </div>
      ) : null}
    </>
  );
};
export default Loading;

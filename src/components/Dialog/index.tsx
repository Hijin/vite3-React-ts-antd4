import {
  useState,
  useEffect,
  ReactChild,
  cloneElement,
  ReactNode,
  forwardRef,
  useImperativeHandle,
  Ref,
} from 'react';
import cs from 'classnames';
import Icon from '@/components/Icon';
import { Button } from 'antd';
// import { throttle } from '@/utils';

import './index.less';

export type DialogProps = {
  title?: string;
  show?: boolean;
  cancelText?: string;
  okText?: string;
  children?: ReactChild;
  styles?: unknown;
  close?: () => void;
  success?: () => void;
  style?: any;
  isShowFooter?: boolean;
  isShowHeader?: boolean;
  customButton?: ReactNode;
  isConfirm?: boolean;
};

export const Dialog = ({
  title,
  cancelText = '取  消',
  okText = '确  定',
  children,
  show = false,
  close,
  success,
  style = {},
  isShowFooter = true,
  isShowHeader = true,
  isConfirm = true,
}: DialogProps) => {
  const onClose = () => {
    close && close();
  };
  const onCancel = () => {
    close && close();
  };
  const onSuccess = () => {
    success && success();
  };

  return (
    <section
      style={{...(style || {})}}
      className={cs('dialog-content', { visit: show, hide: !show })}
    >
      {isShowHeader && !!title ? (
        <header className="dialog-header">
          {/* title */}
          <h3>{title}</h3>
          <div onClick={onClose}>
            <Icon type="close" size={10} />
          </div>
        </header>
      ) : null}
      <section className="dialog-section">{children}</section>
      {isConfirm && <div style={{ height: 75 }}></div>}
      {isShowFooter ? (
        <footer className="dialog-footer">
          {/* cancel */}
          <Button
            type='default'
            onClick={onCancel}
            style={{ width: '99px' }}
          >
            {cancelText}
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          {/* confirm */}
          <Button onClick={onSuccess} style={{ width: '99px' }}>
            {okText}
          </Button>
        </footer>
      ) : null}
    </section>
  );
};

interface WrapperDialogProps extends DialogProps {
  content?: ReactNode;
  onSuccess?: () => void;
  isOpen?: boolean;
}
const DialogWrap = (props: WrapperDialogProps, ref: Ref<unknown> | undefined) => {
  const { isOpen = false, children, ...otherProps } = props;
  const [show, setshow] = useState(isOpen);
  const success = () => {
    setshow(false);
    props.onSuccess && props.onSuccess();
  };
  const close = () => {
    setshow(false);
  };
  const otherHandleProps = { success, close, show };
  useImperativeHandle(ref, () => {
    return {
      onopen() {
        setshow(true);
      },
    };
  });
  useEffect(() => {
    if (show) {
      document.body.style.overflowY = 'hidden';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [show]);

  return (
    <>
      {
        <section onClick={() => setshow(!show)}>
          {children ? children : <Button>触发</Button>}
        </section>
      }
      <section
        className={cs('dialog-wrapper', { visit: show, hide: !show })}
      >
        <section className="dialog-container">
          {cloneElement(
            <Dialog {...otherProps} {...otherHandleProps} />,
            [],
            [<>{props.content}</>],
          )}
        </section>
      </section>
    </>
  );
}

export default forwardRef(DialogWrap);
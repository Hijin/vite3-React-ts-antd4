import Icon from '@/components/Icon';
import { Input, Upload, message, Button } from 'antd';
import Dialog from '@/components/Dialog';
import { useEffect, useMemo, useState } from 'react';
// import { useRequest } from 'umi';
import type { RcFile, UploadProps } from 'antd/es/upload';
// import type { UploadFile } from 'antd/es/upload/interface';
import cs from 'classnames';
import './UserItem.less';

const { TextArea } = Input;
let textValue = '';
// let targetId = '';

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const MessageContent = (props: any) => {
  const [messageValue, setMessageValue] = useState<string>('');
  const [saveImgUrl, setSaveImgUrl] = useState({});
  const [saveFileUrl, setSaveFileUrl] = useState({});
  const { data } = JSON.parse(sessionStorage.getItem('user') || '{}');
  const {
    userName = '',
    userIcon = '',
    // userMobile = '',
    newDate = '',
    // isSign = '',
    // lastInfo = '',
    // businessKey,
    isModalVisible,
  } = props;

  console.log(saveFileUrl, saveImgUrl, 'user', data);

  // 查询医患聊天记录
  // const selectPatientChatRecord = useRequest(
  //   (pageSize = 10, pageNumber = 1) => ({
  //     url: `/stage-api/platform-system/communicationMegInfo/selectPatientChatRecord?businessKey=${businessKey}&pageSize=${pageSize}&pageNumber=${pageNumber}`,
  //     method: 'GET',
  //   }),
  //   {
  //     manual: true,
  //   },
  // );

  // 发送聊天记录
  // const sendChatRecord = useRequest(
  //   (info) => {
  //     return {
  //       url: '/stage-api/platform-system/communicationMegInfo/sendInfo',
  //       method: 'POST',
  //       data: {
  //         targetId: businessKey,
  //         message: info,
  //       },
  //     };
  //   },
  //   {
  //     manual: true,
  //   },
  // );

  // 上传图片
  const uploadImgProps: UploadProps = {
    name: 'img',
    action: '/stage-api/platform-file/upload',
    showUploadList: false,
    headers: {
      Authorization: sessionStorage.getItem('Authorization') || '',
    },
    beforeUpload: (file) => {
      const isPNG = [
        'image/png',
        'image/jpg',
        'image/git',
        'image/jpeg',
        'image/svg+xml',
      ].includes(file.type);
      if (!isPNG) {
        message.error(`${file.name} 不是一个图片`);
      }
      return isPNG || Upload.LIST_IGNORE;
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(`${info.file?.name} successfully`);
      }
      if (info.file.status === 'done') {
        console.log(`${info.file?.name} successfully`);

        const file = info.file || {};

        if (!file.url && !file.preview) {
          getBase64(file.originFileObj as RcFile).then((res) => {
            file.preview = res;
            // setPreviewAvator(file.url || (file.preview as string));
          });
        }
        // 发送头像
        const response = file.response || {};
        if (response.code != 200) {
          message.error(`上传图片失败，请重新上传！`);
          return;
        }
        setSaveImgUrl(response?.data);
        setMessageValue(response?.data?.name || '');
      } else if (info.file.status === 'error') {
        console.error(`${info.file.name} failed.`);
      }
    },
  };

  // 上传文件
  const uploadFileProps: UploadProps = {
    name: 'file',
    action: '/stage-api/platform-file/upload',
    showUploadList: false,
    headers: {
      Authorization: sessionStorage.getItem('Authorization') || '',
    },
    beforeUpload: (file) => {
      console.log('file', file.type);
      // const isPNG = [
      //   'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      //   'application/vnd.ms-excel',
      //   'application/zip',
      //   'application/pdf',
      // ].includes(file.type);
      const isPNG = [
        'image/png',
        'image/jpg',
        'image/git',
        'image/jpeg',
        'image/svg+xml',
      ].includes(file.type);
      if (isPNG) {
        message.error(`${file.name} 不是一个文件`);
      }
      return !isPNG || Upload.LIST_IGNORE;
    },
    onChange(info) {
      // if (info.file.status !== 'uploading') {}
      if (info.file.status === 'done') {
        console.log(`${info.file.name} successfully`);
        const fileVal = info.file || {};
        // 保存文件
        const response = fileVal.response || {};
        setSaveFileUrl(response.data);
        setMessageValue(response.data.name);
      } else if (info.file.status === 'error') {
        console.error(`${info.file.name} failed.`);
      }
    },
  };

  useEffect(() => {
    if (isModalVisible) {
      // selectPatientChatRecord.run();
    }
  }, [isModalVisible]);

  const record = useMemo(() => {
    return [];
  }, []);

  // console.log('record', record);

  return (
    <div className="ld_user-detail-container">
      <section className="ld_user-detail-message">
        {record.map((info: any, index: number) => {
          if (!info.message) return '';

          // identity, // 1.患者 0.医生
          if (info.identity == 1) {
            return (
              <>
                <div
                  key={`message_doctor_${index}`}
                  className="ld_user-detail-message-date"
                >
                  {newDate}
                </div>
                <div className="ld_user-detail-message-content-q">
                  <div className="message-content-q-icon">
                    <img src={userIcon} alt="" />
                    <p>{userName}</p>
                  </div>
                  <div className="message-content-q-info">{info.message}</div>
                </div>
              </>
            );
          }
          // 医生
          if (info.identity == 0) {
            return (
              <div key={`message_doctor_${index}`}>
                <div className="ld_user-detail-message-date">{newDate}</div>
                <div className="ld_user-detail-message-content-a">
                  <div className="message-content-a-info">{info.message}</div>
                  <div className="message-content-a-icon">
                    <img src={data.avatar} alt="" />
                    <p>{data.userName}</p>
                  </div>
                </div>
              </div>
            );
          }

          return '';
        })}
      </section>

      <div className="ld_user-detail-operate">
        {/* <Icon type="xiaolian" /> */}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Upload {...uploadImgProps}>
          <Icon style={{ transform: 'translateY(3px)' }} type="tupian" />
        </Upload>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Upload {...uploadFileProps}>
          <Icon style={{ transform: 'translateY(3px)' }} type="xinxi" />
        </Upload>
      </div>
      <section className="ld_user-detail-input">
        <TextArea
          value={messageValue}
          onChange={(e) => {
            textValue = e.target.value;
            setMessageValue(textValue);
          }}
          placeholder="请输入您想说的内容"
        ></TextArea>
      </section>

      <footer className="ld_user-detail-dialog-footer">
        <Button
          type="primary"
          onClick={() => {
            setMessageValue('');
          }}
          style={{ width: '99px' }}
        >
          取消
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button
          onClick={() => {
            // sendChatRecord.run(messageValue).then((res) => {
            //   if (res.code == 200) {
            //     setMessageValue('');
            //     selectPatientChatRecord.run();
            //   }
            // });
          }}
          style={{ width: '99px' }}
        >
          提交
        </Button>
      </footer>
    </div>
  );
};

const UserItem = (props: any) => {
  // const { callback } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {
    userName = '',
    userIcon = '',
    userMobile = '',
    newDate = '',
    isSign = '',
    lastInfo = '',
    // businessKey,
  } = props;
  const [isSignValue] = useState(isSign);

  // 发送消息接口
  // const sendInfo = useRequest(
  //   (params) => ({
  //     url: `/stage-api/platform-system/communicationMegInfo/sendInfo`,
  //     method: 'POST',
  //     data: {
  //       ...params,
  //     },
  //   }),
  //   {
  //     manual: true,
  //   },
  // );

  // 更新标记
  // const { run } = useRequest(
  //   (businessKey) => {
  //     return {
  //       url: `/stage-api/platform-system/signDoctorPatient/signChange/${businessKey}`,
  //       method: 'GET',
  //     };
  //   },
  //   {
  //     manual: true,
  //   },
  // );

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    lastInfo.map((info: any) => {
      if (info.identity === 1) {
        targetId = info.targetId;
      }
    });
    // sendInfo.run({ message: textValue, targetId: targetId });
    setIsModalVisible(false);
  };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };

  return (
    <div className="ld_user-item-wrapper">
      <div className="ld_user-item-header"></div>

      <section className="ld_user-item-content">
        <header className="ld_user-item-content-header">
          <div className="ld_user-item-content-header-avator">
            <img src={userIcon} alt="" />
          </div>
          <section className="ld_user-item-content-header-info">
            <header className="ld_user-item-content-header-info-user">
              <div>{userName}</div>
              <span>{userMobile}</span>
            </header>
            <section className="ld_user-item-content-header-info-date">
              {newDate}
            </section>
          </section>
        </header>

        {lastInfo.map((info: any, index: number) => {
          if (!info.message) return '';

          // identity, // 1.患者 0.医生
          if (info.identity === 1) {
            return (
              <section
                key={`last_message_${index}`}
                className="ld_user-item-content-section-q"
              >
                <div className="ld_user-item-content-section-q-icon">Q</div>
                <div className="ld_user-item-content-section-q-content">
                  {info.message}
                </div>
              </section>
            );
          }

          if (info.identity === 0) {
            return (
              <section
                key={`last_message_${index}`}
                className="ld_user-item-content-section-a"
              >
                <div className="ld_user-item-content-section-a-content">
                  {info.message}
                </div>
                <div className="ld_user-item-content-section-a-icon">A</div>
              </section>
            );
          }

          return '';
        })}
      </section>

      <div className="ld_user-item-footer">
        <div
          onClick={() => {
            // 已标记
            // run(businessKey).then((res) => {
            //   if (res.code === 200) {
            //     setIsSignValue(isSignValue == 1 ? 0 : 1);
            //     callback && callback(isSignValue == 1 ? 1 : -1);
            //   }
            // });
          }}
          style={{
            background: isSignValue == 0 ? 'rgba(0, 145, 255, 1)' : '',
          }}
          className={cs('ld_user-item-footer-star')}
        >
          <Icon type="star" size={14} />
        </div>
        {/* <div onClick={showModal} className="ld_user-item-footer-text">回复</div> */}
        <Dialog
          title="回复"
          isOpen={isModalVisible}
          onSuccess={handleOk}
          content={
            <MessageContent {...props} isModalVisible={isModalVisible} />
          }
          isShowFooter={false}
        >
          <div onClick={showModal} className="ld_user-item-footer-text">
            回复
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default UserItem;

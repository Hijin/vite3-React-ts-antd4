import { useMemo, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  Upload,
  TreeSelect,
  Modal,
  DatePicker
} from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import moment from 'moment';
import './index.less';

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const BaseInfo = () => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [bgFileUrl, setBgFileUrl] = useState<string[]>([]);
  const [previewAvator, setPreviewAvator] = useState('');

  console.log(bgFileUrl);

  const userInfo = useMemo(() => {
    const user = sessionStorage.getItem('user') || '{}';
    const result = JSON.parse(user) || {};

    // 获取背景图片
    const { background = '{}' } = result?.data || {};
    const bg = JSON.parse(background) || {};
    const fileListOld = bg?.fileList || [];

    setFileList(fileListOld);

    return result;
  }, []);

  const onFinish = () => {
    // const bg = JSON.stringify({ data: bgFileUrl, fileList: fileList }) || '';
    // const data = {
    //   background: bg,
    //   deptId: values.deptId.name || values.deptId.value,
    //   goodAtText: values.goodAtText,
    //   hospital: values.hospital,
    //   postId: values.postId.name || values.postId.value,
    //   remark: values.remark,
    //   userName: values.userName,
    // };
    // fetchSaveDoctor
    //   .run({
    //     ...data,
    //   })
    //   .then((res) => {
    //     if (!userInfo.data.dept.deptName) {
    //       return;
    //     }
    //     if (res?.code != 200) {
    //       return message.error('保存失败!');
    //     }
    //     message.success('修改信息成功！');
    //     if (userInfo.data && userInfo.data.dept) {
    //       // console.log('userInfo.data.dept', userInfo.data.dept);
    //       const deptNameInfo = userInfo.data.dept || {};
    //       deptNameInfo.deptName = values.deptId.label;
    //       userInfo.data.remark = values.remark;
    //       userInfo.data.goodAtText = values.goodAtText;
    //       userInfo.data.background = bg;
    //     }

    //     userInfo.postGroup = values.postId.label;
    //     sessionStorage.setItem('user', JSON.stringify(userInfo));
    //     props.dispatch({
    //       type: 'global/setUser',
    //       payload: {
    //         user: {
    //           ...userInfo,
    //         },
    //       },
    //     });
    //   });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const uploadProps: UploadProps = {
    name: 'file',
    action: '/stage-api/platform-file/upload',
    showUploadList: false,
    headers: {
      Authorization: sessionStorage.getItem('Authorization') || '',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        // console.log(info.file, '.....upload-avator......', info.fileList);
      }
      if (info.file.status === 'done') {
        console.log(`${info.file.name} successfully`);

        const file = info.file || {};

        if (!file.url && !file.preview) {
          getBase64(file.originFileObj as RcFile).then((res) => {
            file.preview = res;
            setPreviewAvator(file.url || (file.preview as string));
          });
        }

        // 发送头像
        // const response = file.response || {};

        // fetchDoctorAvator
        //   .run(response.data?.url || '')
        //   .then(() => {
        //     message.success('修改头像成功!');
        //   })
        //   .then(() => {
        //     // let info = JSON.parse(JSON.stringify(userInfo));
        //     userInfo.data.avatar = response.data?.url || '';
        //     sessionStorage.setItem('user', JSON.stringify(userInfo));
        //     props.dispatch({
        //       type: 'global/setUser',
        //       payload: {
        //         user: userInfo,
        //       },
        //     });
        //   })
        //   .catch((err) => {
        //     message.error(`修改头像成功：${err.message}`);
        //   });
      } else if (info.file.status === 'error') {
        console.error(`${info.file.name} failed.`);
      }
    },
  };

  // 背景图上传
  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file: UploadFile) => {
    // console.log(!file.originFileObj?.name, 'file', file);
    if (!file.url && !file.preview) {
      if (!file.originFileObj?.name) {
        const response = file.response || {};
        if (response.code == 200 && response.data)
          file.url = response.data?.url || '';
      } else {
        file.preview = await getBase64(file.originFileObj as RcFile);
      }
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1),
    );
  };

  const handleChange: UploadProps['onChange'] = ({
    fileList: newFileList = [],
  }) => {
    setFileList(newFileList);
    // 获取背景图url
    const urls: any = [];
    newFileList.forEach((file: any = {}) => {
      if (file.response?.code == 200) {
        const { data } = file.response || {};

        urls.push(data.url);
      }
    });
    setBgFileUrl(urls);
  };

  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  // console.log('userInfo-fileList', fileList);

  return (
    <div className="base-info">
      <div className="ld_dd-base-info">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="登录账户"
            name="userName"
            initialValue={userInfo.data?.userName}
            rules={[{ required: true }]}
          >
            <Input placeholder="请输入账户名称" />
          </Form.Item>

          <Form.Item
            label="所属科室"
            name="deptId"
            initialValue={{
              label: userInfo.data?.dept?.deptName,
              name: userInfo.data?.dept?.deptId,
            }}
            rules={[{ required: true, message: '' }]}
          >
            <TreeSelect
              labelInValue
              placeholder="请选择科室"
              treeData={userInfo.deptList || []}
            />
          </Form.Item>

          <Form.Item
            label="员工职称"
            name="postId"
            initialValue={{
              label: userInfo.postGroup,
              name: userInfo.userPostList && userInfo.userPostList[0].postId,
            }}
            rules={[{ required: true, message: '' }]}
          >
            <TreeSelect
              labelInValue
              placeholder="请选择职称"
              treeData={userInfo.postList || []}
            />
          </Form.Item>
          <Form.Item
            label="手机号码"
            name="phone"
            initialValue={userInfo.data?.phone}
            rules={[{ required: true }]}
          >
            <Input placeholder="请输入手机号码" />
          </Form.Item>
          <Form.Item
            label="微信账号"
            name="phone"
            initialValue={userInfo.data?.phone}
          >
            <Input placeholder="请输入微信账号" />
          </Form.Item>
          <Form.Item
            label="邮箱地址"
            name="email"
            initialValue={userInfo.data?.email}
          >
            <Input placeholder="请输入邮箱地址" />
          </Form.Item>
          <Form.Item
            label="出生日期"
            name="birth"
            initialValue={userInfo.data?.birth}
          >
            <DatePicker
              format="YYYY-MM-DD"
              placeholder="请选择出生日期"
              disabledDate={(current) => { return current && current > moment().endOf('day') }}
            />
          </Form.Item>
          <Form.Item
            label="性别"
            name="sex"
            initialValue={userInfo.data?.sex}
          >

          </Form.Item>

          <Form.Item label="医生背景图" name="background">
            <Form.Item
              valuePropName="fileList"
              getValueFromEvent={normFile}
              noStyle
            >
              <Upload
                name="file"
                listType="picture-card"
                fileList={fileList}
                action="/stage-api/platform-file/upload"
                headers={{
                  Authorization:
                    sessionStorage.getItem('Authorization') || '',
                }}
                maxCount={10}
                onChange={handleChange}
                onPreview={handlePreview}
              >
                {fileList.length >= 8 ? null : (
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>上传图片</div>
                  </div>
                )}
              </Upload>
              <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
              >
                <img alt="" style={{ width: '100%' }} src={previewImage} />
              </Modal>
              <p className="ld-upload-hint">
                尺寸建议800x800（正方形模式）像素以上，大小2M以下，最多10张
                (可拖拽图片调整显示顺序 )
              </p>
            </Form.Item>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="default" htmlType="reset">
              取消
            </Button>
            <Button type="primary" htmlType="submit">
              保存
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className="ld_dd-fix-portrait">
        <div className="ld_dd-fix-portrait-img">
          <img
            alt="avator"
            style={{ width: '100%' }}
            src={previewAvator || userInfo.data?.avatar || ''}
          />
        </div>
        <Upload {...uploadProps}>
          <Button className="ld_dd-fix-portrait-btn">修改头像</Button>
        </Upload>
      </div>
    </div>
  );
};

export default BaseInfo

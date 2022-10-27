import { useState, useEffect } from 'react';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  Upload,
  TreeSelect,
  DatePicker,
  Radio,
  Image,
  Spin
} from 'antd';
import type { UploadProps } from 'antd/es/upload';
import moment from 'moment';
import QRCode from 'qrcode.react';
import { Constants } from '@/utils';
import './index.less';

const { gender } = Constants
const QRCodeComp = ({ value, label, className }: any) => <div className={`t-c ${className}`}>
  <QRCode
    className='base-info__QRCode br-10'
    value={value}
    size={120}
  />
  <div className='ft-14 col-3 mt-10'>{label}</div>
</div>

const BaseInfo = () => {
  const [userInfo, setUserInfo] = useState<any>({
    sex: 1
  })
  const [avatarUploading, setAvatarUploading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm()
  useEffect(() => {
    getUserInfo()
  }, [])
  const handleCommit = async () => {
    const formValue = await form.validateFields()
    console.log(formValue);
    setSaveLoading(true)
  };
  const uploadAvatar = () => {
    setAvatarUploading(true)
  }
  const getUserInfo = () => {
    setLoading(true)
    setUserInfo({})
    setLoading(false)
  }
  const uploadProps: UploadProps = {
    showUploadList: false,
    beforeUpload: files => {
      console.log(files);
      // TODO:校验后手动上传
      uploadAvatar()
      return false
    }
  };

  return <Spin spinning={loading}>
    <div className="base-info">
      <div className="flex w-full">
        <Form
          className='flex-1'
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={userInfo}
          autoComplete="off"
        >
          <Form.Item
            label="登录账户"
            name="userName"
            rules={[{ required: true }]}
          >
            <Input placeholder="请输入账户名称" />
          </Form.Item>

          <Form.Item
            label="所属科室"
            name="deptId"
            initialValue={{
              label: userInfo?.dept?.deptName,
              value: userInfo?.dept?.deptId,
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
              value: userInfo.userPostList && userInfo.userPostList[0].postId,
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
              className='w-full'
              format="YYYY-MM-DD"
              placeholder="请选择出生日期"
              disabledDate={(current) => { return current && current > moment().endOf('day') }}
            />
          </Form.Item>
          <Form.Item
            label="性别"
            name="sex"
          >
            <Radio.Group value={userInfo.sex}>
              {Object.values(gender).map((v: any) => <Radio value={v.value} key={v.value}>{v.label}</Radio>)}
            </Radio.Group>
          </Form.Item>
        </Form>
        <div className="flex-1">
          <div className='w-fit flex-col t-c'>
            <Upload {...uploadProps}>
              {userInfo.data?.avatar ? <Image
                className='br-10 '
                width={120}
                height={120}
                src={userInfo.data?.avatar}
              /> : <div className='base-info__avatar-empty flex-c br-10 pointer'>
                {avatarUploading ? <LoadingOutlined /> : <PlusOutlined />}
              </div>}
              <Button type="primary" ghost className="mt-10">修改头像</Button>
            </Upload>
          </div>
          <div className='flex mt-80'>
            <QRCodeComp value='www.baidu.com' label="患者端二维码" />
            <QRCodeComp className='ml-64' value='www.baidu.com' label="医生端二维码" />
          </div>
        </div>
      </div>
    </div>
    <div className='t-c'>
      <Button >取消</Button>
      <Button type="primary" className='ml-25' loading={saveLoading} onClick={handleCommit}>保存</Button>
    </div>
  </Spin>
};

export default BaseInfo

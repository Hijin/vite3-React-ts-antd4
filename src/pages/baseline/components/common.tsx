import { Form, Input, Select, DatePicker, Radio, Tooltip } from 'antd';
const Item = Form.Item;
// 人口信息
export const EntryInfo = [
  {
    name: 'centreName',
    label: '科研中心',
    initialValue: '上海第一人民医院',
    type: 'input',
    children: <Input placeholder='请输入' disabled />
  },
  {
    name: 'screeningNum',
    label: '受试者筛选号',
    initialValue: '',
    type: 'input',
    children: <Input placeholder='请输入' />
  },
  {
    name: 'patientName',
    label: '受试者姓名',
    initialValue: '',
    type: 'type',
    children: <Input placeholder='请输入' />
  },
  {
    name: 'abbreviationsName',
    label: '受试者名称缩写',
    initialValue: '',
    type: 'input',
    children: <Input placeholder='请输入' />
  },
  {
    name: 'birthday',
    label: '出生日期',
    initialValue: '',
    type: 'datePicker',
    children: <DatePicker placeholder='请选择' format='YYYY-MM-DD' />
  },
  {
    name: 'age',
    label: '年龄',
    initialValue: '',
    type: 'input',
    children: <Input placeholder='-' disabled />
  },
  {
    name: 'sex',
    label: '性别',
    initialValue: null,
    type: 'select',
    children: <Select placeholder='请选择' options={[{label: '男', value: '0'}, {label: '女', value: '1'}]} />
  },
  {
    name: 'marriage',
    label: '婚姻',
    placeholder: '请选择',
    initialValue: null,
    type: 'select',
    children: <Select placeholder='请选择' options={[{label: '已婚', value: '0'}, {label: '未婚', value: '1'}]} />
  }
]
// 访视日期
export const ViewDate = [
  {
    name: 'viewDate',
    label: '访视日期',
    initialValue: '',
    type: 'datepicker',
    children: <DatePicker placeholder='请选择' />
  },
  {
    name: 'isAgree',
    label: '是否签署知情同意书',
    initialValue: '0',
    type: 'radio',
    children: (
      <Radio.Group>
        <Radio value='0'>已签署</Radio>
        <Radio value='1'>未签署</Radio>
      </Radio.Group>
    )
  },
  {
    name: 'signedDate',
    label: '签署日期',
    initialValue: '',
    type: 'datepicker',
    children: <DatePicker placeholder='请选择' />
  },
  {
    name: 'reason',
    label: '请说明原因',
    initialValue: '',
    type: 'datepicker',
    children: <Input.TextArea autoSize={{ minRows: 5 }} placeholder='请输入' />
  }
]
// 诊断
export const Diagnose = [
  {
    name: 'diagnosis',
    label: '诊断',
    initialValue: '',
    type: 'input',
    children: <Input placeholder='请输入' />
  },
  {
    name: 'clinicalStaging',
    label: '临床分期',
    initialValue: null,
    type: 'select',
    children: <Select placeholder='请选择' options={[{label: '急性加重', value: '0'}, {label: '急性加重1', value: '1'}, {label: '急性加重2', value: '2'}]} />
  },
  {
    name: 'clinicalStagingDetailed',
    label: '临床分级',
    initialValue: '',
    type: 'input',
    children: <Input placeholder='请输入' />
  }
]
// 血常规
export const BoutineBlood = [
  {
    name: 'isRoutineBlood',
    label: '是否进行血常规检查',
    initialValue: '0',
    type: 'radio',
    children: (
      <Radio.Group>
        <Radio value='0'>已检查</Radio>
        <Radio value='1'>未检查</Radio>
      </Radio.Group>
    )
  },
  {
    name: 'reason',
    label: '请说明原因',
    initialValue: '',
    type: 'datepicker',
    children: <Input.TextArea autoSize={{ minRows: 5 }} placeholder='请输入' />
  },
  {
    name: 'checkDate',
    label: '检查日期',
    initialValue: null,
    type: 'datepicker',
    children: <DatePicker placeholder='请选择' format="YYYY-MM-DD" />
  },
  {
    name: 'whiteBloodCellCount',
    label: '白细胞计数（WBC）',
    initialValue: '',
    type: 'input',
    children: <Input placeholder='请输入' addonAfter='10^9/L' />
  },
  {
    name: 'dlymphocyteCount4',
    label: '淋巴细胞计数（LY）',
    initialValue: '',
    type: 'input',
    children: <Input placeholder='请输入' addonAfter='10^9/L' />
  },
  {
    name: 'monocyteCount',
    label: '单核细胞计数（M）',
    initialValue: null,
    type: 'input',
    children: <Input placeholder='请输入' addonAfter='10^9/L' />
  },
  {
    name: 'eosinophilCount',
    label: '嗜酸性粒细胞计（E）',
    initialValue: '',
    type: 'input',
    children: <Input placeholder='请输入' addonAfter='10^9/L' />
  },
  {
    name: 'redBloodCellCount',
    label: '红细胞计数（RBC）',
    initialValue: '',
    type: 'input',
    children: <Input placeholder='请输入' addonAfter='10^12/L' />
  },
  {
    name: 'hemoglobin',
    label: '血红蛋白（HGB）',
    initialValue: null,
    type: 'input',
    children: <Input placeholder='请输入' addonAfter='g/L' />
  },
  {
    name: 'plateletCount',
    label: '血小板计数（PLT）',
    initialValue: '',
    type: 'input',
    children: <Input placeholder='请输入' addonAfter='10^9/L' />
  }
]
// 胸部CT
export const ChestCT = [
  {
    name: 'isChestCT',
    label: '是否进行胸部CT检查',
    initialValue: '0',
    type: 'radio',
    children: (
      <Radio.Group>
        <Radio value='0'>已检查</Radio>
        <Radio value='1'>未检查</Radio>
      </Radio.Group>
    )
  },
  {
    name: 'reason',
    label: '请说明原因',
    initialValue: '',
    type: 'datepicker',
    children: <Input.TextArea autoSize={{ minRows: 5 }} placeholder='请输入' />
  },
  {
    name: 'checkDate',
    label: '检查日期',
    initialValue: null,
    type: 'datepicker',
    children: <DatePicker placeholder='请选择' />
  },
  {
    name: 'reportContent',
    label: '报告内容',
    initialValue: null,
    type: 'input',
    children: <Input.TextArea autoSize={{ minRows: 5 }} placeholder='请输入' />
  },
  {
    name: 'diagnosisAdvice',
    label: '诊断意见',
    initialValue: null,
    type: 'input',
    children: <Input.TextArea autoSize={{ minRows: 5 }} placeholder='请输入' />
  },
  {
    name: 'clinicalObjectionEvaluate',
    label: '临床异议评估',
    initialValue: '0',
    type: 'radio',
    children: (
      <Radio.Group>
        <Radio value='0'>正常</Radio>
        <Radio value='1'>异常无临床意义</Radio>
        <Radio value='2'>异常有临床意义</Radio>
      </Radio.Group>
    )
  },
]
// 肺功能通气
export const LungVentilation = [
  {
    name: 'isLungVentilation',
    label: '是否进行舒张试验',
    initialValue: '0',
    type: 'radio',
    children: (
      <Radio.Group>
        <Radio value='0'>已检查</Radio>
        <Radio value='1'>未检查</Radio>
      </Radio.Group>
    )
  },
  {
    name: 'reason',
    label: '请说明原因',
    initialValue: '',
    type: 'datepicker',
    children: <Input.TextArea autoSize={{ minRows: 5 }} placeholder='请输入' />
  },
  {
    name: 'checkDate',
    label: '检查日期',
    initialValue: null,
    type: 'datepicker',
    children: <DatePicker placeholder='请选择' />
  },
  {
    name: 'fvc',
    label: 'FVC（L）',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='fvc-expectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值' addonBefore='预计值' />
        </Item>
        <Item name='fvc-testValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='fvc-testExpectedValue' className='input-group-custom-flex-item'>
          <Input
            placeholder='请输入结果'
            addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>}
          />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'fev1',
    label: 'FEV1（L））',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='fev1-expectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值' addonBefore='预计值' />
        </Item>
        <Item name='fev1-testValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='fev1-testExpectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>} />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'fev1Fvc',
    label: 'FEV1%FVC（%）',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='fev1Fvc-expectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值'  addonBefore='预计值' />
        </Item>
        <Item name='fev1Fvc-testValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='fev1Fvc-testExpectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>} />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'fev1FvcMax',
    label: 'FEV1%FVC MAX（%）',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='fev1FvcMax-expectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值'  addonBefore='预计值' />
        </Item>
        <Item name='fev1FvcMax-testValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='fev1FvcMax-testExpectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>} />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'fev130',
    label: 'FEV1*30（L/min）',
    initialValue: null,
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='fev130-expectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值'  addonBefore='预计值' />
        </Item>
        <Item name='fev130-testValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='fev130-testExpectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>} />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'pef',
    label: 'PEF（L/S）',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='pef-expectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值'  addonBefore='预计值' />
        </Item>
        <Item name='pef-testValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='pef-testExpectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>} />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'mef75',
    label: 'MEF 75（L/S）',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='mef75-expectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值'  addonBefore='预计值' />
        </Item>
        <Item name='mef75-testValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='mef75-testExpectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>} />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'mef50',
    label: 'MEF 50（L/S）',
    initialValue: null,
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='mef50-expectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值'  addonBefore='预计值' />
        </Item>
        <Item name='mef50-testValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='mef50-testExpectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>} />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'mmef7525',
    label: 'MMEF 75/25（L/S）',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='mmef7525-expectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值'  addonBefore='预计值' />
        </Item>
        <Item name='mmef7525-testValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='mmef7525-testExpectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>} />
        </Item>
      </Input.Group>
    )
  }
]
// 舒张实验
export const Broncho = [
  {
    name: 'isBronchodilation',
    label: '是否进行舒张实验',
    initialValue: '0',
    type: 'radio',
    children: (
      <Radio.Group>
        <Radio value='0'>已检查</Radio>
        <Radio value='1'>未检查</Radio>
      </Radio.Group>
    )
  },
  {
    name: 'reason',
    label: '请说明原因',
    initialValue: '',
    type: 'datepicker',
    children: <Input.TextArea autoSize={{ minRows: 5 }} placeholder='请输入' />
  },
  {
    name: 'checkDate',
    label: '检查日期',
    initialValue: null,
    type: 'datepicker',
    children: <DatePicker placeholder='请选择' />
  },
  {
    name: 'fvc',
    label: 'FVC（L）',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='fvc_expectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值' addonBefore='预计值' />
        </Item>
        <Item name='fvc_test1Value' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='fvc_test1ExpectedValue' className='input-group-custom-flex-item'>
          <Input
            placeholder='请输入结果'
            addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>}
          />
        </Item>
        <Item name='fvc_test2Value' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试2' />
        </Item>
        <Item name='fvc_test2ExpectedValue' className='input-group-custom-flex-item'>
          <Input
            placeholder='请输入结果'
            addonBefore={<Tooltip title='%测试2/预计值' className='input-group-custom-flex-tip'>%测试2/预计值</Tooltip>}
          />
        </Item>
        <Item name='fvc_improveRate' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善率' />
        </Item>
        <Item name='fvc_improveAmount' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善量' />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'fev1',
    label: 'FEV1（L））',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='fev1-expectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值' addonBefore='预计值' />
        </Item>
        <Item name='fev1-test1Value' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='fev1-test1ExpectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>} />
        </Item>
        <Item name='fev1-test2Value' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试2' />
        </Item>
        <Item name='fev1-test2ExpectedValue' className='input-group-custom-flex-item'>
          <Input
            placeholder='请输入结果'
            addonBefore={<Tooltip title='%测试2/预计值' className='input-group-custom-flex-tip'>%测试2/预计值</Tooltip>}
          />
        </Item>
        <Item name='fev1-improveRate' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善率' />
        </Item>
        <Item name='fev1-improveAmount' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善量' />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'fev2',
    label: 'FEV2（L））',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='fev2-expectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值' addonBefore='预计值' />
        </Item>
        <Item name='fev2-test1Value' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='fev2-test1ExpectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>} />
        </Item>
        <Item name='fev2-test2Value' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试2' />
        </Item>
        <Item name='fev2-test2ExpectedValue' className='input-group-custom-flex-item'>
          <Input
            placeholder='请输入结果'
            addonBefore={<Tooltip title='%测试2/预计值' className='input-group-custom-flex-tip'>%测试2/预计值</Tooltip>}
          />
        </Item>
        <Item name='fev2-improveRate' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善率' />
        </Item>
        <Item name='fev2-improveAmount' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善量' />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'fev3',
    label: 'FEV3（L））',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='fev3-expectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值' addonBefore='预计值' />
        </Item>
        <Item name='fev3-test1Value' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='fev3-test1ExpectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>} />
        </Item>
        <Item name='fev3-test2Value' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试2' />
        </Item>
        <Item name='fev3-test2ExpectedValue' className='input-group-custom-flex-item'>
          <Input
            placeholder='请输入结果'
            addonBefore={<Tooltip title='%测试2/预计值' className='input-group-custom-flex-tip'>%测试2/预计值</Tooltip>}
          />
        </Item>
        <Item name='d35' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善率' />
        </Item>
        <Item name='fev3-improveAmount' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善量' />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'fev1fvc',
    label: 'FEV1%FVC（%）',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='fev1fvc-expectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值'  addonBefore='预计值' />
        </Item>
        <Item name='fev1fvc-test1Value' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='fev1fvc-test1ExpectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>} />
        </Item>
        <Item name='fev1fvc-test2Value' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试2' />
        </Item>
        <Item name='fev1fvc-test2ExpectedValue' className='input-group-custom-flex-item'>
          <Input
            placeholder='请输入结果'
            addonBefore={<Tooltip title='%测试2/预计值' className='input-group-custom-flex-tip'>%测试2/预计值</Tooltip>}
          />
        </Item>
        <Item name='fev1fvc-improveRate' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善率' />
        </Item>
        <Item name='fev1fvc-improveAmount' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善量' />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'fev3fvc',
    label: 'FEV3%FVC（%）',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='fev3fvc-expectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值'  addonBefore='预计值' />
        </Item>
        <Item name='fev3fvc-test1Value' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='fev3fvc-test1ExpectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>} />
        </Item>
        <Item name='fev3fvc-test2Value' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试2' />
        </Item>
        <Item name='fev3fvc-test2ExpectedValue' className='input-group-custom-flex-item'>
          <Input
            placeholder='请输入结果'
            addonBefore={<Tooltip title='%测试2/预计值' className='input-group-custom-flex-tip'>%测试2/预计值</Tooltip>}
          />
        </Item>
        <Item name='fev3fvc-improveRate' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善率' />
        </Item>
        <Item name='fev3fvc-improveAmount' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善量' />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'pef',
    label: 'PEF（L/S）',
    initialValue: null,
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='pef-expectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值'  addonBefore='预计值' />
        </Item>
        <Item name='pef-test1Value' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='pef-test1ExpectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>} />
        </Item>
        <Item name='pef-test2Value' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试2' />
        </Item>
        <Item name='pef-test2ExpectedValue' className='input-group-custom-flex-item'>
          <Input
            placeholder='请输入结果'
            addonBefore={<Tooltip title='%测试2/预计值' className='input-group-custom-flex-tip'>%测试2/预计值</Tooltip>}
          />
        </Item>
        <Item name='pef-improveRate' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善率' />
        </Item>
        <Item name='pef-improveAmount' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善量' />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'mef75',
    label: 'MEF 75（L/S）',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='mef75-expectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值'  addonBefore='预计值' />
        </Item>
        <Item name='mef75-test1Value' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='mef75-test1ExpectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>} />
        </Item>
        <Item name='mef75-test2Value' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试2' />
        </Item>
        <Item name='mef75-test2ExpectedValue' className='input-group-custom-flex-item'>
          <Input
            placeholder='请输入结果'
            addonBefore={<Tooltip title='%测试2/预计值' className='input-group-custom-flex-tip'>%测试2/预计值</Tooltip>}
          />
        </Item>
        <Item name='mef75-improveRate' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善率' />
        </Item>
        <Item name='mef75-improveAmount' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善量' />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'mef50',
    label: 'MEF 50（L/S）',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='mef50-expectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值'  addonBefore='预计值' />
        </Item>
        <Item name='mef50-test1Value' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='mef50-test1ExpectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>} />
        </Item>
        <Item name='mef50-test2Value' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试2' />
        </Item>
        <Item name='mef50-test2ExpectedValue' className='input-group-custom-flex-item'>
          <Input
            placeholder='请输入结果'
            addonBefore={<Tooltip title='%测试2/预计值' className='input-group-custom-flex-tip'>%测试2/预计值</Tooltip>}
          />
        </Item>
        <Item name='mef50-improveRate' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善率' />
        </Item>
        <Item name='mef50-improveAmount' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善量' />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'mmef7525',
    label: 'MMEF 75/25（L/S）',
    initialValue: null,
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='mmef7525-expectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值'  addonBefore='预计值' />
        </Item>
        <Item name='mmef7525-test1Value' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='mmef7525-test1ExpectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>} />
        </Item>
        <Item name='mmef7525-test2Value' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试2' />
        </Item>
        <Item name='mmef7525-test2ExpectedValue' className='input-group-custom-flex-item'>
          <Input
            placeholder='请输入结果'
            addonBefore={<Tooltip title='%测试2/预计值' className='input-group-custom-flex-tip'>%测试2/预计值</Tooltip>}
          />
        </Item>
        <Item name='mmef7525-improveRate' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善率' />
        </Item>
        <Item name='mmef7525-improveAmount' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善量' />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'fet',
    label: 'FET（S）',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='fet-expectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值'  addonBefore='预计值' />
        </Item>
        <Item name='fet-test1Value' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='fet-test1ExpectedValue' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>} />
        </Item>
        <Item name='fet-test2Value' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试2' />
        </Item>
        <Item name='fet-test2ExpectedValue' className='input-group-custom-flex-item'>
          <Input
            placeholder='请输入结果'
            addonBefore={<Tooltip title='%测试2/预计值' className='input-group-custom-flex-tip'>%测试2/预计值</Tooltip>}
          />
        </Item>
        <Item name='fet-improveRate' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善率' />
        </Item>
        <Item name='fet-improveAmount' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善量' />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'bronchodilationResult',
    label: '子气管舒张试验结果',
    initialValue: '',
    type: 'radio',
    children: (
      <Radio.Group>
        <Radio value='0'>阳性</Radio>
        <Radio value='1'>阴性</Radio>
      </Radio.Group>
    )
  },
]
// 激发试验
export const Jfsy = [
  {
    name: 'checked',
    label: '是否进行激发试验',
    initialValue: '0',
    type: 'radio',
    children: (
      <Radio.Group>
        <Radio value='0'>已检查</Radio>
        <Radio value='1'>未检查</Radio>
      </Radio.Group>
    )
  },
  {
    name: 'reason',
    label: '请说明原因',
    initialValue: '',
    type: 'datepicker',
    children: <Input.TextArea autoSize={{ minRows: 5 }} placeholder='请输入' />
  },
  {
    name: 'd1',
    label: '检查日期',
    initialValue: null,
    type: 'datepicker',
    children: <DatePicker placeholder='请选择' />
  },
  {
    name: 'd2',
    label: 'FVC（L）',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='d20' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值' addonBefore='预计值' />
        </Item>
        <Item name='d21' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='d22' className='input-group-custom-flex-item'>
          <Input
            placeholder='请输入结果'
            addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>}
          />
        </Item>
        <Item name='d23' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试2' />
        </Item>
        <Item name='d24' className='input-group-custom-flex-item'>
          <Input
            placeholder='请输入结果'
            addonBefore={<Tooltip title='%测试2/预计值' className='input-group-custom-flex-tip'>%测试2/预计值</Tooltip>}
          />
        </Item>
        <Item name='d25' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善率' />
        </Item>
        <Item name='d26' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善量' />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'd3',
    label: 'FEV1（L））',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='d30' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值' addonBefore='预计值' />
        </Item>
        <Item name='d31' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='d32' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>} />
        </Item>
        <Item name='d33' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试2' />
        </Item>
        <Item name='d34' className='input-group-custom-flex-item'>
          <Input
            placeholder='请输入结果'
            addonBefore={<Tooltip title='%测试2/预计值' className='input-group-custom-flex-tip'>%测试2/预计值</Tooltip>}
          />
        </Item>
        <Item name='d35' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善率' />
        </Item>
        <Item name='d36' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善量' />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'dd2',
    label: 'FEV2（L））',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='dd20' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值' addonBefore='预计值' />
        </Item>
        <Item name='dd21' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='dd22' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>} />
        </Item>
        <Item name='dd23' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试2' />
        </Item>
        <Item name='dd24' className='input-group-custom-flex-item'>
          <Input
            placeholder='请输入结果'
            addonBefore={<Tooltip title='%测试2/预计值' className='input-group-custom-flex-tip'>%测试2/预计值</Tooltip>}
          />
        </Item>
        <Item name='dd25' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善率' />
        </Item>
        <Item name='dd26' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善量' />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'dd3',
    label: 'FEV3（L））',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='dd30' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值' addonBefore='预计值' />
        </Item>
        <Item name='dd31' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='dd32' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>} />
        </Item>
        <Item name='dd33' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试2' />
        </Item>
        <Item name='dd34' className='input-group-custom-flex-item'>
          <Input
            placeholder='请输入结果'
            addonBefore={<Tooltip title='%测试2/预计值' className='input-group-custom-flex-tip'>%测试2/预计值</Tooltip>}
          />
        </Item>
        <Item name='d35' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善率' />
        </Item>
        <Item name='dd36' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善量' />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'd4',
    label: 'FEV1%FVC（%）',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='d40' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值'  addonBefore='预计值' />
        </Item>
        <Item name='d41' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='d42' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>} />
        </Item>
        <Item name='d43' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试2' />
        </Item>
        <Item name='d44' className='input-group-custom-flex-item'>
          <Input
            placeholder='请输入结果'
            addonBefore={<Tooltip title='%测试2/预计值' className='input-group-custom-flex-tip'>%测试2/预计值</Tooltip>}
          />
        </Item>
        <Item name='d45' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善率' />
        </Item>
        <Item name='d46' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善量' />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'd5',
    label: 'FEV3%FVC（%）',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='d50' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值'  addonBefore='预计值' />
        </Item>
        <Item name='d51' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='d52' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>} />
        </Item>
        <Item name='d53' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试2' />
        </Item>
        <Item name='d54' className='input-group-custom-flex-item'>
          <Input
            placeholder='请输入结果'
            addonBefore={<Tooltip title='%测试2/预计值' className='input-group-custom-flex-tip'>%测试2/预计值</Tooltip>}
          />
        </Item>
        <Item name='d55' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善率' />
        </Item>
        <Item name='d56' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善量' />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'd6',
    label: 'PEF（L/S）',
    initialValue: null,
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='d60' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值'  addonBefore='预计值' />
        </Item>
        <Item name='d61' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='d62' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>} />
        </Item>
        <Item name='d63' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试2' />
        </Item>
        <Item name='d64' className='input-group-custom-flex-item'>
          <Input
            placeholder='请输入结果'
            addonBefore={<Tooltip title='%测试2/预计值' className='input-group-custom-flex-tip'>%测试2/预计值</Tooltip>}
          />
        </Item>
        <Item name='d65' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善率' />
        </Item>
        <Item name='d66' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善量' />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'd7',
    label: 'MEF 75（L/S）',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='d70' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值'  addonBefore='预计值' />
        </Item>
        <Item name='d71' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='d72' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>} />
        </Item>
        <Item name='d73' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试2' />
        </Item>
        <Item name='d74' className='input-group-custom-flex-item'>
          <Input
            placeholder='请输入结果'
            addonBefore={<Tooltip title='%测试2/预计值' className='input-group-custom-flex-tip'>%测试2/预计值</Tooltip>}
          />
        </Item>
        <Item name='d75' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善率' />
        </Item>
        <Item name='d76' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善量' />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'd8',
    label: 'MEF 50（L/S）',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='d80' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值'  addonBefore='预计值' />
        </Item>
        <Item name='d81' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='d82' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>} />
        </Item>
        <Item name='d83' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试2' />
        </Item>
        <Item name='d84' className='input-group-custom-flex-item'>
          <Input
            placeholder='请输入结果'
            addonBefore={<Tooltip title='%测试2/预计值' className='input-group-custom-flex-tip'>%测试2/预计值</Tooltip>}
          />
        </Item>
        <Item name='d85' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善率' />
        </Item>
        <Item name='d86' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善量' />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'd9',
    label: 'MMEF 75/25（L/S）',
    initialValue: null,
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='d90' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值'  addonBefore='预计值' />
        </Item>
        <Item name='d91' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='d92' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>} />
        </Item>
        <Item name='d93' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试2' />
        </Item>
        <Item name='d94' className='input-group-custom-flex-item'>
          <Input
            placeholder='请输入结果'
            addonBefore={<Tooltip title='%测试2/预计值' className='input-group-custom-flex-tip'>%测试2/预计值</Tooltip>}
          />
        </Item>
        <Item name='d95' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善率' />
        </Item>
        <Item name='d96' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善量' />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'd10',
    label: 'FET（S）',
    initialValue: '',
    type: 'input',
    children: (
      <Input.Group className='input-group-custom-flex'>
        <Item name='d100' className='input-group-custom-flex-item'>
          <Input placeholder='请输入预计值'  addonBefore='预计值' />
        </Item>
        <Item name='d101' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试1' />
        </Item>
        <Item name='d102' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore={<Tooltip title='%测试1/预计值' className='input-group-custom-flex-tip'>%测试1/预计值</Tooltip>} />
        </Item>
        <Item name='d103' className='input-group-custom-flex-item'>
          <Input placeholder='请输入实际值' addonBefore='测试2' />
        </Item>
        <Item name='d104' className='input-group-custom-flex-item'>
          <Input
            placeholder='请输入结果'
            addonBefore={<Tooltip title='%测试2/预计值' className='input-group-custom-flex-tip'>%测试2/预计值</Tooltip>}
          />
        </Item>
        <Item name='d105' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善率' />
        </Item>
        <Item name='d106' className='input-group-custom-flex-item'>
          <Input placeholder='请输入结果' addonBefore='改善量' />
        </Item>
      </Input.Group>
    )
  },
  {
    name: 'd11',
    label: '子气管舒张试验结果',
    initialValue: '',
    type: 'radio',
    children: (
      <Radio.Group>
        <Radio value='0'>阳性</Radio>
        <Radio value='1'>阴性</Radio>
      </Radio.Group>
    )
  },
]
// FeN
export const Feno = [
  {
    name: 'isFeNO',
    label: '是否进行FeNO检查',
    initialValue: '0',
    type: 'radio',
    children: (
      <Radio.Group>
        <Radio value='0'>已检查</Radio>
        <Radio value='1'>未检查</Radio>
      </Radio.Group>
    )
  },
  {
    name: 'reason',
    label: '请说明原因',
    initialValue: '',
    type: 'datepicker',
    children: <Input.TextArea autoSize={{ minRows: 5 }} placeholder='请输入' />
  },
  {
    name: 'checkDate',
    label: '检查日期',
    initialValue: null,
    type: 'datepicker',
    children: <DatePicker placeholder='请选择' />
  },
  {
    name: 'checkResult',
    label: '检测结果',
    initialValue: '',
    type: 'input',
    children: <Input placeholder='请输入检测结果' addonAfter='ppd' />
  },
]
// 入排标准核 = []
export const Rpbzhs = []
// 脱落/剔除
export const FallOffOut = [
  {
    name: 'outDate',
    label: '剔除日期',
    initialValue: null,
    type: 'datepicker',
    children: <DatePicker placeholder='选择日期' />
  },
  {
    name: 'item1',
    label: '1：药物依从性低于80%或高于120%（药盒回收确认，并每周微信访视）',
    initialValue: null,
    type: 'radio',
    span: 24,
    children: (
      <Radio.Group>
        <Radio value='0'>是</Radio>
        <Radio value='1'>否</Radio>
      </Radio.Group>
    )
  },
  {
    name: 'item2',
    label: '2：因故中断治疗,无随访记录而无法评价疗效者',
    initialValue: null,
    type: 'radio',
    span: 24,
    children: (
      <Radio.Group>
        <Radio value='0'>是</Radio>
        <Radio value='1'>否</Radio>
      </Radio.Group>
    )
  },
  {
    name: 'item3',
    label: '3：入组后在使用布地奈德福莫特罗同时合并使用其他平喘药，抗白三烯受体拮抗剂和全身应用激素者',
    initialValue: null,
    type: 'radio',
    span: 24,
    children: (
      <Radio.Group>
        <Radio value='0'>是</Radio>
        <Radio value='1'>否</Radio>
      </Radio.Group>
    )
  },
  {
    name: 'DetailedInstructions',
    label: '详细说明',
    initialValue: '',
    type: 'datepicker',
    children: <Input.TextArea autoSize={{ minRows: 5 }} placeholder='请输入' />
  }
]
// 研究药物发放
export const StudyDelivery = [
  {
    name: 'isStudyDrugDelivery',
    label: '是否进行研究药物发放',
    initialValue: '0',
    type: 'radio',
    children: (
      <Radio.Group>
        <Radio value='0'>已发送</Radio>
        <Radio value='1'>未发送</Radio>
      </Radio.Group>
    )
  },
  {
    name: 'reason',
    label: '请说明原因',
    initialValue: '',
    type: 'datepicker',
    children: <Input.TextArea autoSize={{ minRows: 5 }} placeholder='请输入' />
  },
  {
    name: 'deliveryDate',
    label: '发放日期',
    initialValue: null,
    type: 'datepicker',
    children: <DatePicker placeholder='选择日期' />
  },
  {
    name: 'deliveryNum',
    label: '发放数量（160ug/4.5ug）',
    initialValue: '',
    type: 'input',
    children: <Input placeholder='请输入名称' addonAfter='盒' />
  },
  {
    name: 'firstDate',
    label: '首次用药日期',
    initialValue: null,
    type: 'datepicker',
    children: <DatePicker placeholder='选择日期' />
  },
]
// 研究药物回收
export const StudyRecycling = [
  {
    name: 'isStudyDrugBoxRecycling',
    label: '是否回收研究药物盒',
    initialValue: '0',
    type: 'radio',
    children: (
      <Radio.Group>
        <Radio value='0'>已回收</Radio>
        <Radio value='1'>未回收</Radio>
      </Radio.Group>
    )
  },
  {
    name: 'reason',
    label: '请说明原因',
    initialValue: '',
    type: 'datepicker',
    children: <Input.TextArea autoSize={{ minRows: 5 }} placeholder='请输入' />
  },
  {
    name: 'recyclingDate',
    label: '回收日期',
    initialValue: null,
    type: 'datepicker',
    children: <DatePicker placeholder='选择日期' />
  },
  {
    name: 'recyclingNum',
    label: '回收数量（160ug/4.5ug）',
    initialValue: '',
    type: 'input',
    children: <Input placeholder='请输入' addonAfter='盒' />
  }
]
// 不良反应事件
export const Adverse = [
  {
    name: 'isAdverseReaction',
    label: '是否发生不良反应',
    initialValue: '0',
    type: 'radio',
    children: (
      <Radio.Group>
        <Radio value='0'>已发生</Radio>
        <Radio value='1'>未发生</Radio>
      </Radio.Group>
    )
  },
  {
    name: 'reason',
    label: '请说明原因',
    initialValue: '',
    type: 'datepicker',
    children: <Input.TextArea autoSize={{ minRows: 5 }} placeholder='请输入' />
  },
  {
    name: 'adverseEventsName',
    label: '不良事件名称',
    initialValue: '',
    type: 'input',
    span: 8,
    children: <Input placeholder='请输入' />
  },
  {
    name: 'startTime',
    label: '开始日期',
    initialValue: null,
    type: 'datepicker',
    children: <DatePicker placeholder='选择日期' />
  },
  {
    name: 'endTime',
    label: '结束日期',
    initialValue: null,
    type: 'datepicker',
    children: <DatePicker placeholder='选择日期' />
  },
  {
    name: 'drugRelationship',
    label: '与药物关系',
    initialValue: null,
    type: 'radio',
    children: (
      <Radio.Group>
        <Radio value='0'>肯定有关</Radio>
        <Radio value='1'>很可能有关</Radio>
        <Radio value='2'>可能有关</Radio>
        <Radio value='3'>可能无关</Radio>
        <Radio value='4'>待评价</Radio>
        <Radio value='5'>无法评价</Radio>
      </Radio.Group>
    )
  },
  {
    name: 'drugsTakeMeasures',
    label: '对试验药物采取措施',
    initialValue: null,
    type: 'radio',
    children: (
      <Radio.Group>
        <Radio value='0'>继续用药</Radio>
        <Radio value='1'>减少剂量</Radio>
        <Radio value='2'>药物暂定后又恢复</Radio>
        <Radio value='3'>停用药物</Radio>
      </Radio.Group>
    )
  },
  {
    name: 'outcome',
    label: '转归',
    initialValue: null,
    type: 'radio',
    children: (
      <Radio.Group>
        <Radio value='0'>消失</Radio>
        <Radio value='1'>继续</Radio>
        <Radio value='2'>死亡</Radio>
        <Radio value='3'>后遗症</Radio>
      </Radio.Group>
    )
  }
]
// 安全性随访
export const Access = [
  {
    name: 'accessDate',
    label: '访视日期',
    initialValue: null,
    type: 'datepicker',
    children: <DatePicker placeholder='选择日期' />
  },
  {
    name: 'result',
    label: '量表结果',
    initialValue: '',
    type: 'datepicker',
    children: <Input disabled placeholder='请输入' />
  }
]
// 临床试验结束页
export const EndPag = [
  {
    name: 'isEnd',
    label: '是否结束',
    initialValue: null,
    type: 'radio',
    children: (
      <Radio.Group>
        <Radio value='0'>是</Radio>
        <Radio value='1'>否</Radio>
      </Radio.Group>
    )
  }
]
import { Col, Row, Input, Select } from 'antd';
import { useState } from 'react';
import './Search.less';


type ValuesState = {
  key: string;
  value: string;
}

type SearchProps = {
  options: {
    key: string;
    type: string;
    title: string;
    options?: {
      label: string;
      value: string;
    }[]
  }[]
}

type SelectOptionProps = {
  id: string;
  key: string;
  type: string;
  title: string;
  options?: {
    label: string;
    value: string;
  }[];
  className?: string;
  span?: number;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: ValuesState) => void;
  defaultValue?: string;
}

const SelectOption = (props: SelectOptionProps) => {
  const { id, span, type, options, className, onChange, defaultValue = '' } = props;

  const changeHandle = (value: unknown) => {
    onChange && onChange({key: id, value: `${value}`})
  }
  const inputChange = (e: any) => {
    onChange && onChange({key: id, value: `${e?.target.value}`})
  }

  const Children = type === 'select' ?
    <Select className='selectOpt-custom-content' options={options} value={defaultValue} onChange={changeHandle} /> :
    <Input className='input-custom-content' onChange={inputChange} value={defaultValue} />

  return (
    <Col className={className} span={span}>{Children}</Col>
  )
}

const Search = (props: SearchProps) => {
  const {options} = props;
  const [values, setValues] = useState<any>({});

  const changeHandle = (param: ValuesState) => {
    const {key = '', value} = param;
    console.log(key,'vl', value);
    values[`${key}`] = value;
    setValues({...values})
  }

  const cleanHandle = () => {
    setValues({})
  }
  console.log('values', values);

  return (
    <Row wrap justify="start" className='search-wrapper'>
      {
        options.map((col) => {
          return (
            <Col key={col.key} span={4} className='search-container'>
              <Row wrap={false} align='middle' className='search-item-wrap'>
                <Col span={8} offset={1} className='search-item-title'>{col.title}:</Col>
                <SelectOption id={col.key} defaultValue={values[col.key]} onChange={changeHandle} span={16} className='search-item-content' {...col} />
              </Row>
            </Col>
          )
        })
      }
      <Col span={2} onClick={cleanHandle} className='search-clean-btn' offset={1}>
        <span>全部清除</span>
      </Col>
    </Row>
  )
}

export default Search;
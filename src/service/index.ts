// eslint-disable-next-line
import {putMethod,deleteMethod,postMethod, getMethod } from './request'
export const getProjectList = (params={}) =>{
  return getMethod('/dahsd',params)
}
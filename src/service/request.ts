/**
 * 需求:封装基础的axios请求数据的方法
 */
import axios from 'axios';
import { message } from 'antd';
import { debounce, safeTimeout, notNull } from '@/utils/tool';
import { getToken } from '@/utils/storage'
// 错误信息，防止多次提示
let errMsg = '';
const toLogin = debounce(relaunchLogin);
const isProduction = process.env.NODE_ENV === 'production';
const host = import.meta.env.VITE_HOST;
export const baseURL = (isProduction ? host : '/api');

const service: any = axios.create({
  baseURL, // 自动配置的后台的请求的地址
  timeout: 20 * 1000
});

/**
 * 需求:自定义请求拦截器
 */
service.interceptors.request.use(
  (config: any) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

/**
 * 需求:自定义响应拦截去
 */
service.interceptors.response.use(
  (response: any) => {
    const res = response.data;
    const configData = JSON.parse(typeof response.config.data === 'string' ? response.config.data : '{}');
    if (res.code === 200) {
      return Promise.resolve(res);
    }
    if (res.code === 401 || (res.code === 500 && res.msg?.indexOf('身份信息异常') > -1)) {
      tostMsg('token已过期,请重新登录！');
      // 未忽略登录
      !configData.ignoreLogin && toLogin();
      return Promise.reject(res);
    }
    tostMsg(res.msg || '服务器开小差了，请稍等~~');
    return Promise.reject(res);
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default service;

export function put(url: string, data?: any) {
  return serviceSend({ url, params: { ...data, filter: false }, method: 'put' });
}

export function deletes(url: string, data?: any,) {
  return serviceSend({ url, params: { params: data }, method: 'delete' });
}

export function post(url: string, data?: any) {
  return serviceSend({ url, params: data || {} });
}

export function get(url: string, params?: any,) {
  return serviceSend({ url, params: params || {}, method: 'get' })
}

function serviceSend({ url, params = {}, method = 'post' }: any) {
  const { filter = true, ...reset } = params ?? {}
  filter && filterParams(reset);
  return new Promise((resolve, reject) => {
    service[method](url, reset)
      .then((res: any) => {
        if (notNull(res.data)) {
          resolve(res.data);
        } else {
          resolve(res);
        }
      })
      .catch((error: any) => {
        reject(error);
      });
  });
}

function tostMsg(msg: string) {
  if (errMsg.length) return;
  errMsg = msg;
  message.error(errMsg);
  safeTimeout(() => {
    errMsg = '';
  }, 2000);
}

function relaunchLogin() {
  const { pathname, origin } = window.location;
  if (pathname === '/login') {
    return;
  }
  window.location.href = `${origin}/login`;
}

// 过滤无效参数
function filterParams(params: any) {
  for (const key in params) {
    const val = params[key];
    if (
      Object.prototype.toString.call(val) === '[object Object]' ||
      Object.prototype.toString.call(val) === '[object Array]'
    ) {
      filterParams(val);
    } else if (
      Object.prototype.toString.call(val) === '[object Null]' ||
      Object.prototype.toString.call(val) === '[object Undefined]' ||
      (Object.prototype.toString.call(val) === '[object String]' &&
        val.trim() === '')
    ) {
      delete params[key];
    }
  }
}

/**
 * 需求:封装基础的axios请求数据的方法
 */
import axios from "axios";
import {message} from 'antd';

// 错误信息，防止多次提示
let errMsg = "";

const service = axios.create({ // baseURL:`${process.env.VUE_APP_BASE_URL}/api`, // 自动配置的后台的请求的地址
  timeout: 300 * 1000
  // 设置请求的超时时间
  // headers: {'Content-Type': 'application/json'},
  // responseType: 'json', // 默认的
  // headers: {'Authorization': "Bearer " + utils.getToken()},
});

/**
  * 需求:自定义请求拦截器
  */
service.interceptors.request.use((config) => {
  let token = '';
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

/**
  * 需求:自定义响应拦截去
  */
service.interceptors.response.use((response) => {
  const res = response.data;
  if (res.code === 200) {
    return Promise.resolve(res);
  } else {
    tostMsg(res.desc);
    return Promise.reject(res);
  }
}, (error) => {
  const res = error.response.data;
  if (res.code === 401) {
    tostMsg("token已过期,请重新登录！");
  } else if (res.code === 403) {
    tostMsg("无接口权限，请向管理员申请权限！");
  } else {
    tostMsg("服务器开小差了，请稍等~~");
  }
  return Promise.reject(error);
});

export default service;

export function putMethod(url, data, showSuccessMsg) {
  return serviceSend(url, data, "put", showSuccessMsg);
}

export function deleteMethod(url, data, showSuccessMsg) {
  return serviceSend(url, {
    params: data
  }, "delete", showSuccessMsg);
}

export function postMethod(url, data = {}, showSuccessMsg) {
  return serviceSend(url, data, "post", showSuccessMsg);
}

export function getMethod(url, params, showSuccessMsg) {
  return serviceSend(url, {
    params: params
  }, "get", showSuccessMsg);
}

function serviceSend(url, params = {}, method = "post", showSuccessMsg = false) {
  filterParams(params);
  return new Promise((resolve, reject) => {
    service[method](url, params).then((res) => {
      resolve(res.data);
      showSuccessMsg && res.desc && message.success(res.desc);
    }).catch((error) => {
      reject(error);
    });
  });
}

function tostMsg(msg) {
  if (errMsg.length) return
  errMsg = msg;
  message.error(errMsg);
  let t = setTimeout(() => {
    errMsg = "";
    clearTimeout(t)
    t = null
  }, 2000);
}

// 过滤无效参数
function filterParams(params) {
  for (let key in params) {
    const val = params[key];
    if (Object.prototype.toString.call(val) === "[object Object]" || Object.prototype.toString.call(val) === "[object Array]") {
      filterParams(val);
    } else if (Object.prototype.toString.call(val) === "[object Null]" || Object.prototype.toString.call(val) === "[object Undefined]" || (Object.prototype.toString.call(val) === "[object String]" && val.trim() === "")) {
      delete params[key];
    }
  }
}

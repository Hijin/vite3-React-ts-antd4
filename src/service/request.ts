/**
 * 需求:封装基础的axios请求数据的方法
 */
import axios from "axios";
import {message} from 'antd';

// 错误信息，防止多次提示
let errMsg = "";

const service:any = axios.create({ // baseURL:`${process.env.VUE_APP_BASE_URL}/api`, // 自动配置的后台的请求的地址
  timeout: 300 * 1000
  // 设置请求的超时时间
  // headers: {'Content-Type': 'application/json'},
  // responseType: 'json', // 默认的
  // headers: {'Authorization': "Bearer " + utils.getToken()},
});

/**
  * 需求:自定义请求拦截器
  */
service.interceptors.request.use((config:any) => {
  let token = '';
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
}, (error:any) => {
  return Promise.reject(error);
});

/**
  * 需求:自定义响应拦截去
  */
service.interceptors.response.use((response:any) => {
  const res = response.data;
  if (res.code === 200) {
    return Promise.resolve(res);
  } else {
    tostMsg(res.desc);
    return Promise.reject(res);
  }
}, (error:any) => {
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

export function putMethod(url:string, data:any, showSuccessMsg:boolean) {
  return serviceSend(url, data, "put", showSuccessMsg);
}

export function deleteMethod(url:string, data:any, showSuccessMsg:boolean) {
  return serviceSend(url, {
    params: data
  }, "delete", showSuccessMsg);
}

export function postMethod(url:string, data:any={}, showSuccessMsg:boolean) {
  return serviceSend(url, data, "post", showSuccessMsg);
}

export function getMethod(url:string, params:any={}, showSuccessMsg:boolean) {
  return serviceSend(url, {
    params: params
  }, "get", showSuccessMsg);
}

function serviceSend(url:string, params = {}, method = "post", showSuccessMsg = false) {
  filterParams(params);
  return new Promise((resolve, reject) => {
    service[method](url, params).then((res:any) => {
      resolve(res.data);
      showSuccessMsg && res.desc && message.success(res.desc);
    }).catch((error:any) => {
      reject(error);
    });
  });
}

function tostMsg(msg:string) {
  if (errMsg.length) return
  errMsg = msg;
  message.error(errMsg);
  let t:any = setTimeout(() => {
    errMsg = "";
    clearTimeout(t)
    t = null
  }, 2000);
}

// 过滤无效参数
function filterParams(params:any) {
  for (let key in params) {
    const val = params[key];
    if (Object.prototype.toString.call(val) === "[object Object]" || Object.prototype.toString.call(val) === "[object Array]") {
      filterParams(val);
    } else if (Object.prototype.toString.call(val) === "[object Null]" || Object.prototype.toString.call(val) === "[object Undefined]" || (Object.prototype.toString.call(val) === "[object String]" && val.trim() === "")) {
      delete params[key];
    }
  }
}

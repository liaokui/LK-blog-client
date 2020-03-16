import axios from 'axios';
import {Message} from 'element-ui';
// import {getToken} from '@/utils/auth';
// import router from '../router';
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(() => {
//   if (config.resource_partner_token) {
//     config.headers['Authorization'] = config.resource_partner_token;
//   } else {
//     config.headers['Authorization'] = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
//   }
//   return config;
}, error => {
  Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    // console.log('path', error.response)// for debug
    // let data = error.response.data;
    // if (data.status == 401) {
    //   if ((data.path).indexOf('login') == -1) {
    //     MessageBox.confirm('登录信息失效,将转跳登录页面', '提示', {
    //       confirmButtonText: '确定',
    //       type: 'warning',
    //       showCancelButton: false,
    //       showClose: false,
    //     }).then(() => {
    //       setTimeout(() => {
    //         router.push({path: '/login'});
    //       }, 500);

    //     }).catch(() => {
    //       setTimeout(() => {
    //         router.push({path: '/login'});
    //       }, 500);
    //     });
    //   }
    // } else {
      let message = error.response.data.message;
      Message({
        message: message,
        type: 'error',
        duration: 5 * 1000
      });

    // }
    return Promise.reject(error);
  }
);

export default service;

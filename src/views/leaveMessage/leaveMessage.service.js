import request from '@/utils/request'

// 获取验证码
export function getCaptcha() {
  return request({
    url: '/api/getCaptcha',
    method: 'get',
    noToken: false
  });
}

// 留言
export function leaveMessage(params) {
  return request({
    url: '/scene/describeSceneByPage',
    method: 'post',
    data: params
  });
}
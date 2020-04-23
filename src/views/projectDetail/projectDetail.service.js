import request from '@/utils/request'

export function getProjectDetail(params) {
  return request({
    url: '/api/project/detail',
    method: 'get',
    params
  });
}
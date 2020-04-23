import request from '@/utils/request'

export function getArticleList(params) {
  return request({
    url: '/api/article/find',
    method: 'get',
    params
  });
}
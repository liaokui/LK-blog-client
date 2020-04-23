import request from '@/utils/request'

export function getArticleDetail(params) {
  return request({
    url: '/api/article/detail',
    method: 'get',
    params
  });
}
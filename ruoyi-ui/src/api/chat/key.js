import request from '@/utils/request'

// 查询API秘钥列表
export function listKey(query) {
  return request({
    url: '/chat/apiKey/list',
    method: 'get',
    params: query
  })
}

// 查询API秘钥详细
export function getKey(id) {
  return request({
    url: '/chat/apiKey/' + id,
    method: 'get'
  })
}

// 新增API秘钥
export function addKey(data) {
  return request({
    url: '/chat/apiKey',
    method: 'post',
    data: data
  })
}

// 修改API秘钥
export function updateKey(data) {
  return request({
    url: '/chat/apiKey',
    method: 'put',
    data: data
  })
}

// 删除API秘钥
export function delKey(id) {
  return request({
    url: '/chat/apiKey/' + id,
    method: 'delete'
  })
}

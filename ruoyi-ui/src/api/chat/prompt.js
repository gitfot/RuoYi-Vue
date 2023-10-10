import request from '@/utils/request'

// 查询提示词管理列表
export function listPrompt(query) {
  return request({
    url: '/chat/prompt/list',
    method: 'get',
    params: query
  })
}

// 查询提示词管理详细
export function getPrompt(id) {
  return request({
    url: '/chat/prompt/' + id,
    method: 'get'
  })
}

// 新增提示词管理
export function addPrompt(data) {
  return request({
    url: '/chat/prompt',
    method: 'post',
    data: data
  })
}

// 修改提示词管理
export function updatePrompt(data) {
  return request({
    url: '/chat/prompt',
    method: 'put',
    data: data
  })
}

// 删除提示词管理
export function delPrompt(id) {
  return request({
    url: '/chat/prompt/' + id,
    method: 'delete'
  })
}

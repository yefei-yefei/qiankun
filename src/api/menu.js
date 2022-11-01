import request from './request'
// 菜单
export const menu = (data) => {
  return request({
    url: 'data',
    method: 'get',
    data
  })
}

import request from '@/utils/request'

//分类：获取分类数据
export const artGetChannelService = () => {
  return request.get('/my/cate/list')
}

//分类：添加数据
export const artAddChannelService = (data) => {
  return request.post('/my/cate/add', data)
}
//分类：更新数据
export const artEditChannelService = (data) =>
  request.put('/my/cate/info', data)

//分类：删除数据
export const artDelChannelService = (id) =>
  request.delete('/my/cate/del', {
    params: { id }
  })
//文章：获取数据
export const artGetListService = (params) =>
  request.get('/my/article/list', { params })
//文章：添加文章
export const artPublishService = (data) => request.post('/my/article/add', data)

//文章：编辑获取详情信息
export const artGetDetailService = (id) => {
  return request.get('my/article/info', {
    params: { id }
  })
}

//文章：编辑详情提交
export const artEditService = (data) => {
  return request.put('my/article/info', data)
}

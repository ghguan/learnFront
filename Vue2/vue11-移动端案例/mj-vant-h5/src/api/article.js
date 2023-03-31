import request from '@/utils/request'
import { getToken } from '@/utils/storage'

export const getArticle = (obj) => {
  const token = getToken()
  return request.get('/interview/query', {
    params: {
      current: obj.current,
      pageSize: obj.pageSize,
      sorter: obj.sorter
    },
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

// 获取我的收藏
export const getArticlesCollect = (obj) => {
  return request.get('/interview/opt/list', {
    params: {
      page: obj.page, // 当前页
      pageSize: 10, // 可选
      optType: 2 // 表示收藏
    }
  })
}
// 获取我的喜欢
export const getArticlesLike = (obj) => {
  return request.get('/interview/opt/list', {
    params: {
      page: obj.page, // 当前页
      pageSize: 10, // 可选
      optType: 1 // 表示喜欢
    }
  })
}
export const getArticleDetail = (id) => {
  return request.get('interview/show', {
    params: {
      id
    }
  })
}

export const updateLike = (id) => {
  return request.post('interview/opt', {
    id,
    optType: 1 // 喜欢
  })
}

export const updateCollect = (id) => {
  return request.post('interview/opt', {
    id,
    optType: 2 // 收藏
  })
}

export const getDescriptionOfRequest = (
  method: string,
  path: string,
  type: string
) => {
  const key = `${method}${trimPath(path)}`
  const pathDesc = pathMaping[key]

  return pathDesc
}

const trimPath = (path: string) => {
  const arr = path?.split('/')
  let formedPath = ''
  arr?.forEach((str: string) => {
    if (str && Number(str).toString() == 'NaN') {
      formedPath += `_${str}`
    }
  })
  return formedPath
}

const pathMaping: Record<string, string> = {
  // 后台相关
  'POST_api_pages': '添加页面',
  'POST_api_pages-history': '更改页面样式内容',
  'PUT_api_pages': '修改页面基本信息',
  'DELETE_api_pages': '删除页面',
  'POST_api_admin_login': '管理员登录后台系统',
  'POST_api_templates-async': '同步页面模板到页面',
  'POST_api_templates': '添加页面模板',
  'PUT_api_templates': '修改页面模板',
  'PUT_api_admin': '更新管理员',
  'DELETE_api_admin': '删除管理员',
  'POST_api_admin': '添加管理员',
  'PUT_api_article': '更新内容',
  'POST_api_article': '修改内容',
  'DELETE_api_article': '删除内容',
  'PUT_api_article-tag': '更新内容标签',
  'POST_api_article-tag': '修改内容标签',
  'DELETE_api_article-tag': '删除内容标签',
  'PUT_api_data': '更新数据',
  'POST_api_data': '修改数据',
  'DELETE_api_data': '删除数据',
  'PUT_api_qa': '更新常见问题',
  'POST_api_qa': '修改常见问题',
  'DELETE_api_qa': '删除常见问题',
  'PUT_api_surveys': '更新问卷',
  'POST_api_surveys': '修改问卷',
  'DELETE_api_surveys': '删除问卷',
  'PUT_api_request-log': '更新请求日志',
  'POST_api_request-log': '修改请求日志',
  'DELETE_api_request-log': '删除请求日志'
  // 前台相关
}

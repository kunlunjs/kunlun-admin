import { isChinese } from './utils'

/**
 * 计算 Form.Item 组件 label 宽度
 */
export function getLabelCol(str = '') {
  let span = 0
  str.split('').forEach(i => {
    if (isChinese(i)) {
      span += 1.5
    } else {
      span += 0.75
    }
  })
  return Math.ceil(span)
}

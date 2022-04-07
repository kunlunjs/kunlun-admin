import type { klComponents } from '@/types'
import type { categories } from './config'

export type Category = typeof categories[number]

export type DragItem = {
  source: 'antd' | 'kunlun'
  /**
   * 组件类型
   */
  type: 'Component' | 'Page'
  /**
   * 组件分类
   */
  category: Category
  /**
   * 组件名
   */
  name?: typeof klComponents[number]
  /**
   * 组件标题
   */
  title: string
  /**
   * 组件缩略图
   */
  src: string
  /**
   * 是否可以被拖拽
   */
  draggable: boolean
}

export type DragItems = Record<Category, DragItem[]>

export interface DropResult extends DragItem {
  dropEffect: string
  allowedDropEffect: string
}

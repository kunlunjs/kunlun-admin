import type { klComponents } from '@/types'

export const componentCategories = [
  '通用',
  '布局',
  '导航',
  '数据录入',
  '数据展示',
  '反馈',
  '其他',
  '重型组件'
] as const

export type ComponentCategory = typeof componentCategories[number]

export type DragItem = {
  /**
   * 组件所属 package
   */
  source: 'antd' | 'kunlun' | '@antv/g2'
  /**
   * 组件类型
   */
  type: 'Component' | 'Page'
  /**
   * 组件分类
   */
  category: ComponentCategory
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
export type DragItems = Record<ComponentCategory, DragItem[]>

export type DroppedItem = DragItem & {
  /**
   * 组件唯一标识
   */
  id: string
}
export type DroppedItems = DroppedItem[]

export interface DropResult extends DragItem {
  dropEffect: string
  allowedDropEffect: string
}

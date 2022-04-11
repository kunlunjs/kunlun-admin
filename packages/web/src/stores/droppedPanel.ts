import { nanoid } from 'nanoid'
import create from 'zustand'
import type { DroppedItem, DroppedItems } from '@/types'

type CenterPanelStore = {
  /**
   * 已拖拽至中间面板的组件
   */
  droppedItems: DroppedItems
  addDroppedItem: (item: Omit<DroppedItem, 'id'>) => void
  removeDroppedItem: (id: string) => void
  clearDroppedItems: () => void
  /**
   * 当前选中组件
   */
  selected: DroppedItem['id'] | null
  changeSelected: (id?: DroppedItem['id']) => void
  /**
   * 是否预览模式
   */
  preview: boolean
  changePreview: () => void
  /**
   * 显示设备类型
   */
  device: { type: 'Desktop' | 'Tablet' | 'Mobile'; model?: string }
  changeDevice: (val: CenterPanelStore['device']) => void
}

export const useDroppedStore = create<CenterPanelStore>(set => ({
  droppedItems: [],
  addDroppedItem: droppedItem =>
    set(state => {
      const id = nanoid()
      const newDroppedItem = {
        id,
        ...droppedItem
      }
      console.log('addDroppedItem: ', newDroppedItem)
      return {
        droppedItems: [...state.droppedItems, newDroppedItem],
        selected: id
      }
    }),
  removeDroppedItem: id =>
    set(state => {
      console.log('removeDroppedItem: ', id)
      return {
        ...state,
        droppedItems: state.droppedItems.filter(i => {
          return i.id !== id
        }),
        selected: null
      }
    }),
  clearDroppedItems: () =>
    set(state => {
      console.log('clearDroppedItems')
      return {
        ...state,
        droppedItems: []
      }
    }),
  selected: null,
  changeSelected: id =>
    set(state => {
      console.log('selected: ', id)
      return { ...state, selected: id || null }
    }),

  device: { type: 'Desktop' },
  changeDevice: val =>
    set(state => {
      console.log('change device: ', val.type)
      return {
        ...state,
        device: { type: val.type, model: val.model }
      }
    }),
  preview: false,
  changePreview: () =>
    set(state => {
      console.log(`entry ${state.preview ? 'edit' : 'preview'} mode`)
      return {
        ...state,
        preview: !state.preview
      }
    })
}))

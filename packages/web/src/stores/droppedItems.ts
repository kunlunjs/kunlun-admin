import { nanoid } from 'nanoid'
import create from 'zustand'
import type { DroppedItem, DroppedItems } from '@/types'

type DroppedItemsStore = {
  droppedItems: DroppedItems
  addDroppedItem: (item: Omit<DroppedItem, 'id'>) => void
  removeDroppedItem: (id: string) => void
}

export const useDroppedItemStore = create<DroppedItemsStore>(set => ({
  droppedItems: [],
  addDroppedItem: droppedItem =>
    set(state => {
      console.log('addDroppedItem: ', droppedItem)
      return {
        droppedItems: [
          ...state.droppedItems,
          {
            id: nanoid(),
            ...droppedItem
          }
        ]
      }
    }),
  removeDroppedItem: id =>
    set(state => {
      console.log('removeDroppedItem: ', id)
      return {
        droppedItems: state.droppedItems.filter(i => {
          return i.id !== id
        })
      }
    })
}))

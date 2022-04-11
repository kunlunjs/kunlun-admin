import create from 'zustand'
import type { DroppedItem } from '@/types'

type ConfigStore = {
  values: Record<DroppedItem['id'], any>
  updateConfigValues: (item: Record<DroppedItem['id'], any>) => void
}

export const useConfigStore = create<ConfigStore>(set => ({
  values: {},
  updateConfigValues: item =>
    set(state => {
      console.log('updateConfigValues: ', item)
      return {
        values: {
          ...state.values,
          ...item
        }
      }
    })
}))

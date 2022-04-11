import create from 'zustand'

type ComponentSettingsStore = {
  items: Record<string, any>
  updateComponentSetting: (item: Record<string, any>) => void
}

export const useComponentSettingStore = create<ComponentSettingsStore>(set => ({
  items: {},
  updateComponentSetting: item =>
    set(state => {
      console.log('updateComponentSetting: ', item)
      return {
        items: {
          ...state.items,
          ...item
        }
      }
    })
}))

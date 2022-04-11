import create from 'zustand'

type CenterPanelStore = {
  /**
   * 是否预览模式
   */
  mode: 'preview' | 'placeholder'
  changeMode: (val: CenterPanelStore['mode']) => void
  /**
   * 显示设备类型
   */
  device: { type: 'Desktop' | 'Tablet' | 'Mobile'; model?: string }
  changeDevice: (val: CenterPanelStore['device']) => void
}

export const useCenterPanel = create<CenterPanelStore>(set => ({
  mode: 'placeholder',
  changeMode: val => val,
  device: { type: 'Desktop' },
  changeDevice: val =>
    set(state => ({
      device: { type: val.type, model: val.model }
    }))
}))

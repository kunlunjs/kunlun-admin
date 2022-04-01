import type { ReactNode } from 'react'
import desktopIcon from '@/assets/device-desktop.svg'
import mobileIcon from '@/assets/device-mobile.svg'
import tabletIcon from '@/assets/device-tablet.svg'
import { BlockComponent } from './BlockComponents'
import { BlockThumbnail } from './BlockThumbnai'

export const themeList = [
  'indigo',
  'yellow',
  'red',
  'purple',
  'pink',
  'blue',
  'green'
] as const
export type ThemeList = typeof themeList[number]

export const viewList = [
  {
    name: 'desktop',
    icon: desktopIcon
  },
  {
    name: 'tablet',
    icon: tabletIcon
  },
  {
    name: 'mobile',
    icon: mobileIcon
  }
]

// const Components = tailwinduiItems
//   .filter(i => i.path.match(/(Banner1)$/)) // /(Banner1)\d+$/
//   .map(i => {
//     return loadable(
//       () =>
//         import(
//           /* @vite-ignore */ /* webpackChunkName: "[request][index]" */ `@/components${i.path}`
//         )
//     )
//   })

export const getBlocks = ({
  theme = 'indigo',
  darkMode = false
}: {
  theme: ThemeList
  darkMode: boolean
}): Record<string, Record<string, ReactNode>> => {
  return {
    Block: {
      Marketing: <BlockComponent />
    }
  }
}

export const getIcons = (): Record<string, Record<string, ReactNode>> => {
  return {
    Block: {
      Marketing: <BlockThumbnail />
    }
  }
}

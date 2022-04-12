import loadable from '@loadable/component'
import type { ReactNode } from 'react'
import desktopIcon from '@/assets/device-desktop.svg'
import mobileIcon from '@/assets/device-mobile.svg'
import tabletIcon from '@/assets/device-tablet.svg'
import { Developing } from '@/components/Developing'
import { templateItems } from '@/config'

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

export const getBlocks = ({
  theme = 'indigo',
  darkMode = false
}: {
  theme: ThemeList
  darkMode: boolean
}): Record<string, Record<string, ReactNode[]>> => {
  const blocks = Object.entries(templateItems).reduce((acc, cur) => {
    const [category, names] = cur
    acc[category] = names.reduce((a, c) => {
      const p = c.path?.replace(/\d+$/, '')
      const components =
        c.number && p
          ? [...Array(c.number)].map((_, ix) => {
              return loadable(
                () =>
                  import(
                    /* @vite-ignore */ /* webpackChunkName: "[request][index]" */ `@/components/TailwindUI${p}${
                      ix + 1
                    }`
                  )
              )
            })
          : [Developing]
      a[c.name] = components.map((Component, ix) => <Component key={ix} />)
      return a
    }, {} as any)
    return acc
  }, {} as any)
  return blocks
}

interface BlockProps {
  path: string
}

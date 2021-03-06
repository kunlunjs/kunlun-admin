import type { ComponentProps, CSSProperties } from 'react'
import type Icon from '@/components/Icon'
import type { ButtonProps } from './antd.type'

export type IKLTableButton = {
  range?: 'common' | 'system'
  name?: string
  tooltip?: string
  activeKey?: string
  className?: string
  style?: CSSProperties
  danger?: boolean
  type?: ButtonProps['type']
  onClick?: (...args: any[]) => void
  icon?: ComponentProps<typeof Icon>['name']
  menus?: { label: string; value: string }[]
}

export type IKLTableButtons = IKLTableButton[]

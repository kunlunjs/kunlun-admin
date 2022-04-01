import type * as Icons from '@ant-design/icons'
import type * as AntD from 'antd'
import type { ComponentClass } from 'react'

export type PickProps<T> = T extends (props: infer P1) => any
  ? P1
  : T extends ComponentClass<infer P2>
  ? P2
  : unknown

export type AllIconKeys = keyof typeof Icons

export type AllAntDKeys = keyof typeof AntD

export type PickCapitalize<K extends AllIconKeys | AllAntDKeys> =
  K extends Capitalize<K> ? K : never

export type IconNames = PickCapitalize<AllIconKeys>

export type PickIconProps<K extends IconNames> = PickProps<typeof Icons[K]>

export type IKLComponents = Exclude<
  PickCapitalize<AllAntDKeys>,
  'Grid' | 'Col' | 'ConfigProvider' | 'Row' | 'TreeSelect'
>

export type TKLComponentProps<K extends IKLComponents = IKLComponents> =
  PickProps<typeof AntD[K]>

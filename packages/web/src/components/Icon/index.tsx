import * as Icons from '@ant-design/icons'
import { Tooltip } from 'antd'
import { createElement } from 'react'
import type { ComponentProps } from 'react'
import type { FC } from 'react'
import type { CSSProperties } from 'react'
import type { IconNames, TooltipProps } from '@/types'

type IconProps = { tooltip?: TooltipProps } & {
  name: IconNames
  spin?: boolean
  rotate?: number
  className?: string
  style?: CSSProperties
  twoToneColor?: string
  onClick?: (...args: any) => void
}

const Icon: FC<IconProps> = ({ tooltip, name, ...rest }) => {
  if (tooltip?.title) {
    return (
      <Tooltip title={tooltip.title}>
        {createElement((Icons as any)[name], {
          ...rest
        })}
      </Tooltip>
    )
  }
  return createElement((Icons as any)[name], {
    ...rest
  })
}

export type IconAlign = 'left' | 'center' | 'right'

export type IconsProps = {
  icons: (ComponentProps<typeof Icon> & {
    radio?: true
    tooltip?: string
    align: IconAlign
  })[]
}

export default Icon

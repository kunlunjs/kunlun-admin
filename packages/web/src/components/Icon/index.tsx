import * as Icons from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import clsx from 'clsx'
import { omit } from 'lodash'
import { createElement } from 'react'
import type { ComponentProps } from 'react'
import type { FC } from 'react'
import type { CSSProperties } from 'react'
import type { ButtonProps, IconNames, TooltipProps } from '@/types'

type IconProps = { tooltip?: TooltipProps } & {
  button?: ButtonProps & { title: string }
  name: IconNames
  spin?: boolean
  rotate?: number
  className?: string
  style?: CSSProperties
  twoToneColor?: string
  onClick?: (...args: any) => void
}

const Icon: FC<IconProps> = ({ button, tooltip, name, ...rest }) => {
  if (button) {
    return (
      <Button
        size="small"
        {...omit(button, 'title')}
        icon={createElement((Icons as any)[name], {
          ...rest
        })}
        className={clsx('cursor-pointer', button.danger && 'text-red-400')}
      >
        {button.title}
      </Button>
    )
  }
  if (tooltip?.title) {
    return (
      <Tooltip title={tooltip.title}>
        {createElement((Icons as any)[name], {
          className: 'cursor-pointer',
          ...rest
        })}
      </Tooltip>
    )
  }
  return createElement((Icons as any)[name], {
    className: 'cursor-pointer',
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

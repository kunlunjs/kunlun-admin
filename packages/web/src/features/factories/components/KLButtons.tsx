import { Button, Dropdown, Menu, Space, Tooltip } from 'antd'
import clsx from 'clsx'
import { pick } from 'lodash'
import type { FC, ReactNode } from 'react'
import { Fragment } from 'react'
import Icon from '@/components/Icon'
import type { IKLTableButtons } from '@/types'

interface KLTableButtonsProps {
  buttons: IKLTableButtons
}

export const KLTableButtons: FC<KLTableButtonsProps> = ({ buttons }) => {
  const renderItems = () => {
    const normals: ReactNode[] = []
    const systems: ReactNode[] = []
    buttons.forEach(i => {
      let item = i
      if (i.name && !i.tooltip) {
        const _Icon = i.icon ? <Icon name={i.icon} /> : null
        i.onClick = i.onClick || (() => {})
        item = (
          <Button
            key={i.name}
            icon={_Icon}
            danger={i.danger}
            onClick={i.onClick}
            {...pick(i, ['type', 'style', 'className'])}
          >
            {i.name}
          </Button>
        )
      } else if (i.tooltip && i.icon) {
        item = (
          <Tooltip key={i.icon} title={i.tooltip}>
            <Icon
              {...(i.menus
                ? {}
                : {
                    onClick: i.onClick
                  })}
              name={i.icon}
              style={i.style}
              className={clsx('cursor-pointer', i.className)}
            />
          </Tooltip>
        )
        if (i.menus) {
          item = (
            <Dropdown
              key={i.icon}
              placement="bottom"
              overlay={
                <Menu
                  onClick={i.onClick}
                  selectedKeys={i.activeKey ? [i.activeKey] : []}
                >
                  {i.menus.map(i => (
                    <Menu.Item key={i.value}>{i.label}</Menu.Item>
                  ))}
                </Menu>
              }
            >
              {item}
            </Dropdown>
          )
        }
        if (!i.range) {
          normals.push(item)
        } else {
          systems.push(item)
        }
      }
    })
    return [
      <Space key="normal" size="large">
        {normals}
      </Space>,
      <Space key="system" size="large">
        {systems}
      </Space>
    ]
  }

  return <Fragment>{renderItems()}</Fragment>
}

import { Checkbox, Space } from 'antd'
import type { FC } from 'react'
import Icon from '@/components/Icon'

interface DropHeaderProps {
  grided: boolean
  onGridChange(): void
}

export const DropHeader: FC<DropHeaderProps> = ({ grided, onGridChange }) => {
  return (
    <div className="flex justify-between h-10 px-2 border border-gray-200 border-solid border-t-0 border-r-0 border-b-0">
      <Space>
        <Icon name="RestOutlined" className="cursor-pointer" />
        <Icon name="RedoOutlined" className="cursor-pointer" />
        <Checkbox
          checked={grided}
          onChange={onGridChange}
          className="!ml-8 cursor-pointer"
        >
          网格
        </Checkbox>
      </Space>
      <Space>
        <Icon name="DesktopOutlined" className="cursor-pointer" />
        <Icon name="TabletOutlined" className="cursor-pointer" />
        <Icon name="MobileOutlined" className="cursor-pointer" />
      </Space>
      <Space>
        <Icon name="ReloadOutlined" className="cursor-pointer" />
        <Icon name="FullscreenOutlined" className="cursor-pointer" />
      </Space>
    </div>
  )
}

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
        <Icon
          name="RestOutlined"
          tooltip={{ title: '回退' }}
          className="cursor-pointer"
        />
        <Icon
          name="RedoOutlined"
          tooltip={{ title: '重做' }}
          className="cursor-pointer"
        />
        <Checkbox
          checked={grided}
          onChange={onGridChange}
          className="!ml-8 cursor-pointer"
        >
          网格
        </Checkbox>
      </Space>
      <Space className="!items-end">
        <Icon
          name="DesktopOutlined"
          tooltip={{ title: 'PC Web' }}
          className="text-lg cursor-pointer"
        />
        <Icon
          name="TabletOutlined"
          tooltip={{ title: 'Pad Web' }}
          className="text-lg cursor-pointer"
        />
        <Icon
          name="MobileOutlined"
          tooltip={{ title: 'Mobile Web' }}
          className="text-lg cursor-pointer"
        />
      </Space>
      <Space>
        <Icon
          name="EyeOutlined"
          tooltip={{ title: '预览' }}
          className="cursor-pointer"
        />
        <Icon
          name="ReloadOutlined"
          tooltip={{ title: '刷新' }}
          className="cursor-pointer"
        />
        <Icon
          name="FullscreenOutlined"
          tooltip={{ title: '全屏' }}
          className="cursor-pointer"
        />
      </Space>
    </div>
  )
}

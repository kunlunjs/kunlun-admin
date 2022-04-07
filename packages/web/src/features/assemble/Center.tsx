import { Card, Space } from 'antd'
import type { FC } from 'react'
import Icon from '@/components/Icon'

interface CenterProps {}

export const Center: FC<CenterProps> = () => {
  return (
    <div className="w-3/5 h-full border border-solid border-gray-200">
      <Card
        bordered={false}
        size="small"
        title={
          <div className="flex justify-between">
            <Space>
              <Icon name="RestOutlined" />
              <Icon name="RedoOutlined" />
            </Space>
            <Space>
              <Icon name="DesktopOutlined" />
              <Icon name="TabletOutlined" />
              <Icon name="MobileOutlined" />
            </Space>
            <Space>
              <Icon name="ReloadOutlined" />
              <Icon name="FullscreenOutlined" />
            </Space>
          </div>
        }
      >
        center
      </Card>
    </div>
  )
}

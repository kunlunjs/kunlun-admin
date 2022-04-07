import { Card } from 'antd'
import type { FC } from 'react'

interface RightProps {}

export const Right: FC<RightProps> = () => {
  return (
    <div className="w-1/5 h-full border border-solid border-gray-200">
      <Card bordered={false} size="small" title="配置">
        right
      </Card>
    </div>
  )
}

import { Checkbox, Radio } from 'antd'
import type { FC } from 'react'
import Icon from '@/components/Icon'
import { useDroppedStore } from '@/stores'

interface DropHeaderProps {
  grided: boolean
  onGridChange(): void
}

export const DropHeader: FC<DropHeaderProps> = ({ grided, onGridChange }) => {
  const { device, changeDevice, changePreview, clearDroppedItems } =
    useDroppedStore()

  return (
    <div className="flex justify-between items-center h-10 px-2 border border-gray-200 border-solid border-t-0 border-r-0 border-l-0">
      <div className="space-x-2">
        <Icon name="RedoOutlined" tooltip={{ title: '撤销' }} />
        <Icon name="UndoOutlined" tooltip={{ title: '重做' }} />
        <Checkbox
          checked={grided}
          onChange={onGridChange}
          className="!ml-8 cursor-pointer"
        >
          网格
        </Checkbox>
      </div>
      <Radio.Group
        size="middle"
        value={device.type}
        onChange={e => changeDevice({ type: e.target.value })}
      >
        <Radio.Button value="Desktop">
          <Icon name="DesktopOutlined" />
        </Radio.Button>
        <Radio.Button value="Tablet">
          <Icon name="TabletOutlined" />
        </Radio.Button>
        <Radio.Button value="Mobile">
          <Icon name="MobileOutlined" />
        </Radio.Button>
      </Radio.Group>
      <div className="space-x-2">
        <Icon
          button={{ title: '清空', danger: true, onClick: clearDroppedItems }}
          name="ClearOutlined"
        />
        <Icon
          button={{ title: '预览', onClick: changePreview }}
          name="EyeOutlined"
        />
        <Icon button={{ title: '刷新' }} name="ReloadOutlined" />
        <Icon
          name="FullscreenOutlined"
          tooltip={{ title: '全屏' }}
          className="cursor-pointer"
        />
      </div>
    </div>
  )
}

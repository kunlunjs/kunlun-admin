import { Card, Input, Tabs } from 'antd'
import type { FC } from 'react'
import { Fragment } from 'react'
import Icon from '@/components/Icon'
import type { IconNames } from '@/types'
import { DraggableItem } from './components'
import { categories } from './config'
import type { DragItem, DragItems } from './interfaces'
import './index.less'

const tabs: { key: string; title: string; icon: IconNames }[] = [
  { key: 'components', title: '组件', icon: 'AppstoreAddOutlined' },
  { key: 'charts', title: '图表', icon: 'BarChartOutlined' }
]

interface LeftProps {
  items: DragItems
  droppedNames: DragItem['name'][]
}

export const Left: FC<LeftProps> = ({ items, droppedNames }) => {
  return (
    <div className="w-1/5 h-full border border-solid border-gray-200">
      <Card bordered={false} size="small" title="页面/组件">
        <Input size="small" type="search" allowClear placeholder="搜索组件" />
        <Tabs defaultActiveKey="components" className="left-tabpane">
          {tabs.map(i => {
            return (
              <Tabs.TabPane
                key={i.key}
                tab={
                  <span>
                    <Icon name={i.icon} className="!mr-1" />
                    <span>{i.title}</span>
                  </span>
                }
              >
                <div>
                  {categories.map(category => {
                    return (
                      <Fragment key={category}>
                        <h5 className="-mb-2 mt-2">{category}</h5>
                        <div className="flex flex-wrap justify-between">
                          {items[category].map(i => {
                            return (
                              <DraggableItem
                                key={i.name}
                                {...i}
                                isDropped={droppedNames.includes(i.name)}
                              />
                            )
                          })}
                        </div>
                      </Fragment>
                    )
                  })}
                </div>
              </Tabs.TabPane>
            )
          })}
        </Tabs>
      </Card>
    </div>
  )
}

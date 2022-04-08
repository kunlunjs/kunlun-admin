import { Card, Input, Tabs } from 'antd'
import type { ChangeEvent, FC } from 'react'
import { useState } from 'react'
import { Fragment } from 'react'
import Icon from '@/components/Icon'
import { charts, templateItems } from '@/config'
import type { IconNames } from '@/types'
import { DraggableItem } from './components'
import type { DragItem, DragItems } from './interfaces'
import './index.less'

type LeftTab = { key: string; title: string; icon: IconNames }
type LeftTabs = LeftTab[]
const tabs: LeftTabs = [
  { key: 'components', title: '基础组件', icon: 'AppstoreAddOutlined' },
  { key: 'charts', title: '图表', icon: 'BarChartOutlined' },
  { key: 'templates', title: '模板', icon: 'AppstoreAddOutlined' }
]

interface LeftProps {
  items: DragItems
  droppedItems: DragItem[]
}

export const Left: FC<LeftProps> = ({ items, droppedItems }) => {
  const [state, setState] = useState(items)
  const [activeTab, setActiveTab] = useState('components')

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const newItems = Object.values(items).reduce((result, cur) => {
      const its = cur.filter(
        i =>
          i.title.indexOf(value) > -1 ||
          (i.name && new RegExp(i.name, 'i').test(value))
      )
      if (its.length) {
        result[its[0].category] = its
      }
      return result
    }, {} as DragItems)
    setState(newItems)
  }

  const handleChangeTab = (key: string) => {
    setActiveTab(key)
    // setState({ '图表': charts })
  }

  return (
    <div className="w-1/5 h-full border border-solid border-gray-200">
      <Card bordered={false} size="small" title="页面/组件">
        <Input
          allowClear
          size="small"
          type="search"
          onChange={handleSearch}
          placeholder="搜索组件"
        />
        <Tabs
          activeKey={activeTab}
          className="left-tabpane"
          onChange={handleChangeTab}
        >
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
                  {activeTab === 'components'
                    ? Object.entries(state).map(([category, items]) => {
                        return (
                          <Fragment key={category}>
                            {!!items?.filter(i => i.draggable).length && (
                              <h5 className="-mb-2 mt-2 font-bold">
                                {category}
                              </h5>
                            )}
                            <div className="grid gap-2 grid-cols-3">
                              {items?.map(i => {
                                return (
                                  <DraggableItem
                                    key={i.title}
                                    item={i}
                                    isDropped={droppedItems.some(
                                      j => j.title === i.title
                                    )}
                                  />
                                )
                              })}
                            </div>
                          </Fragment>
                        )
                      })
                    : null}
                  {activeTab === 'charts' ? (
                    <div className="grid gap-2 grid-cols-2">
                      {charts.map(i => {
                        return (
                          <img
                            key={i.name}
                            alt={i.name}
                            src={i.src}
                            className="w-full border border-solid border-gray-200 cursor-move"
                          />
                        )
                      })}
                    </div>
                  ) : null}
                  {activeTab === 'templates' ? (
                    <div className="grid gap-2 grid-cols-2">
                      {Object.values(templateItems)
                        ?.flat()
                        ?.map(i => {
                          return (
                            <img
                              key={i.name}
                              alt={i.name}
                              src={i.src}
                              className="w-full cursor-move"
                            />
                          )
                        })}
                    </div>
                  ) : null}
                </div>
              </Tabs.TabPane>
            )
          })}
        </Tabs>
      </Card>
    </div>
  )
}

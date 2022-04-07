import { Card, Input, Tabs } from 'antd'
import type { FC } from 'react'
import { Fragment } from 'react'
import Icon from '@/components/Icon'
import type { IconNames } from '@/types'
import { categories, components } from './helpers'
import './index.less'

interface LeftProps {}

const tabs: { key: string; title: string; icon: IconNames }[] = [
  { key: 'components', title: '组件', icon: 'AppstoreAddOutlined' },
  { key: 'charts', title: '图表', icon: 'BarChartOutlined' }
]

export const Left: FC<LeftProps> = () => {
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
                          {components[category].map(i => {
                            if (i.draggable) {
                              return (
                                <div
                                  key={i.name}
                                  className="flex flex-col justify-between items-center relative w-[48%] max-h-12 my-4 pb-1 border border-solid border-gray-200 cursor-move"
                                >
                                  <img
                                    alt={i.name}
                                    src={i.src}
                                    className="w-full h-full"
                                  />
                                  <span className="absolute -bottom-5 -translate-x-1/2 mt-2 text-xs">
                                    {i.name}
                                  </span>
                                </div>
                              )
                            }
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

import update from 'immutability-helper'
import type { FC } from 'react'
import { useState, useCallback } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Center } from './Center'
import { components, DragItemTypes } from './config'
import type { DragItem } from './interfaces'
import { Left } from './Left'
import { Right } from './Right'

interface AssembleProps {}

interface DropZonesSpec {
  accepts: string[]
  lastDroppedItem: DragItem | null
}

export const Assemble: FC<AssembleProps> = () => {
  /**
   * 中间面板预设多种可放置不同类型组件的拖放区域
   */
  const [dropZones, setDropZones] = useState<DropZonesSpec[]>([
    {
      accepts: [DragItemTypes.LAYOUT],
      lastDroppedItem: null
    },
    // {
    //   accepts: [DragItemTypes.PAGE],
    //   lastDroppedItem: null
    // },
    // {
    //   accepts: [DragItemTypes.CHART],
    //   lastDroppedItem: null
    // },
    {
      accepts: [DragItemTypes.COMPONENT],
      lastDroppedItem: null
    }
  ])
  const [droppedNames, setDroppedNames] = useState<DragItem['name'][]>([])

  const handleDrop = useCallback(
    (index: number, item: DragItem) => {
      const { name } = item
      setDroppedNames(
        update(droppedNames, name ? { $push: [name] } : { $push: [] })
      )
      setDropZones(
        update(dropZones, {
          [index]: {
            lastDroppedItem: {
              $set: item
            }
          }
        })
      )
    },
    [droppedNames, dropZones]
  )

  return (
    <div>
      <div className="flex space-x-4 h-[100vh]">
        <DndProvider backend={HTML5Backend}>
          <Left items={components} droppedNames={droppedNames} />
          {/* TODO: 多个拖放区域，布局容器/组件等 */}
          <Center onDrop={item => handleDrop(0, item)} />
        </DndProvider>
        <Right />
      </div>
    </div>
  )
}

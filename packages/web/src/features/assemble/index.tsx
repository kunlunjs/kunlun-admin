import update from 'immutability-helper'
import type { FC } from 'react'
import { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Center } from './Center'
import { components } from './config'
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
  // const [dropZones, setDropZones] = useState<DropZonesSpec[]>([
  //   {
  //     accepts: [DragItemTypes.LAYOUT],
  //     lastDroppedItem: null
  //   },
  //   {
  //     accepts: [DragItemTypes.COMPONENT],
  //     lastDroppedItem: null
  //   }
  // ])
  const [droppedItems, setDroppedItems] = useState<DragItem[]>([])

  // 返回值可在 useDrag end(item, monitor){ monitor.getDropResult() } 中体现
  const handleDrop = (index: number, item: DragItem) => {
    setDroppedItems(
      update(droppedItems, item ? { $push: [item] } : { $push: [] })
    )
    // setDropZones(
    //   update(dropZones, {
    //     [index]: {
    //       lastDroppedItem: {
    //         $set: item
    //       }
    //     }
    //   })
    // )
    return {
      ...item,
      allowedDropEffect: 'any'
    }
  }

  return (
    <div>
      <div className="flex space-x-4 h-[100vh]">
        <DndProvider backend={HTML5Backend}>
          <Left items={components} droppedItems={droppedItems} />
          <Center
            droppedItems={droppedItems}
            onDrop={item => handleDrop(0, item)}
          />
        </DndProvider>
        <Right />
      </div>
    </div>
  )
}

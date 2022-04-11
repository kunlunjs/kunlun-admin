import clsx from 'clsx'
import type { Identifier } from 'dnd-core'
import type { ComponentType, FC } from 'react'
import { useRef, useCallback, useState } from 'react'
import type { DropTargetMonitor } from 'react-dnd'
import { useDrop } from 'react-dnd'
import { componentsMap } from '@/components/components-map'
import { useConfigStore, useDroppedStore } from '@/stores'
import type { DragItem } from '@/types'
import { Developing } from '@/utils'
import { DropHeader } from './components'
import { DragItemTypes } from './config'
import { selectBackgroundColor } from './helpers'

interface CenterProps {
  moveIndex?: (dragIndex: number, hoverIndex: number) => void
  onDrop?: (item: DragItem, monitor: DropTargetMonitor<DragItem>) => void
}

export const Center: FC<CenterProps> = ({ moveIndex, onDrop }) => {
  const ref = useRef<HTMLDivElement>(null)
  // 背景网格
  const [grided, setGrided] = useState(true)
  const { droppedItems, preview } = useDroppedStore()
  const { values } = useConfigStore()
  const [{ canDrop, isOver, handleId }, drop] = useDrop<
    DragItem,
    void,
    { canDrop: boolean; isOver: boolean; handleId: Identifier | null }
  >(() => {
    return {
      accept: DragItemTypes.COMPONENT,
      // -> useDrag end(item, monitor){ monitor.getDropResult() }
      drop: onDrop
        ? onDrop
        : (item: DragItem) => {
            return {
              ...item,
              allowedDropEffect: 'any'
            }
          },
      // hover(item: DragItem, monitor: DropTargetMonitor) {
      //   if (!ref.current) {
      //     return
      //   }
      // },
      collect: (monitor: DropTargetMonitor) => {
        return {
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
          handleId: monitor.getHandlerId()
        }
      }
    }
  })

  const handleGridChange = useCallback(() => {
    setGrided(!grided)
  }, [grided])

  const isActive = canDrop && isOver
  const backgroundColor = selectBackgroundColor(isActive, canDrop)

  return (
    <div className="w-3/5 h-full border border-solid border-gray-200 border-l-0">
      <DropHeader grided={grided} onGridChange={handleGridChange} />
      <div
        ref={drop}
        className={clsx(
          'h-[95vh]',
          !droppedItems.length && 'flex items-center justify-center',
          grided && 'background-grid'
        )}
        style={{
          backgroundColor
        }}
      >
        {/* {isActive ? '放置于此' : '拖拽组件至此处'} */}
        {droppedItems.map(i => {
          const Component = (
            i.name ? componentsMap[i.name] : Developing
          ) as ComponentType<any>
          return <Component key={i.id} id={i.id} {...values[i.id]} />
        })}
      </div>
    </div>
  )
}

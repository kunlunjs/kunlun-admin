import clsx from 'clsx'
import type { Identifier } from 'dnd-core'
import type { FC } from 'react'
import { useRef, useCallback, useState } from 'react'
import type { DropTargetMonitor } from 'react-dnd'
import { useDrag } from 'react-dnd'
import { useDrop } from 'react-dnd'
import { isValidElementType } from 'react-is'
import { componentsMap } from '@/components/components-map'
import { Developing } from '@/utils/getRoutes'
import { DropHeader } from './components'
import { DragItemTypes } from './config'
import { selectBackgroundColor } from './helpers'
import type { DragItem } from './interfaces'

interface CenterProps {
  droppedItems: DragItem[]
  moveIndex?: (dragIndex: number, hoverIndex: number) => void
  onDrop?: (item: DragItem, monitor: DropTargetMonitor<DragItem>) => void
}

export const Center: FC<CenterProps> = ({
  droppedItems,
  moveIndex,
  onDrop
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [grided, setGrided] = useState(true)
  // TODO: 拖放区域内部拖拽
  const [{ isDragging }, drag] = useDrag({
    type: DragItemTypes.COMPONENT,
    item: () => {
      return {}
    },
    collect(monitor) {
      return {
        isDragging: monitor.isDragging()
      }
    }
  })
  const [{ canDrop, isOver, handleId }, drop] = useDrop<
    DragItem,
    void,
    { canDrop: boolean; isOver: boolean; handleId: Identifier | null }
  >(() => {
    return {
      accept: DragItemTypes.COMPONENT,
      // 返回值可在 useDrag end(item, monitor){ monitor.getDropResult() } 中体现
      drop: onDrop
        ? onDrop
        : (item: DragItem) => {
            return {
              ...item,
              allowedDropEffect: 'any'
            }
          },
      hover(item: DragItem, monitor: DropTargetMonitor) {
        if (!ref.current) {
          return
        }
        // TODO: 上下调整位置
        // const dragIndex = item.name
        // const hoverIndex = ''
        // if (dragIndex === hoverIndex) {
        //   return
        // }
        // const hoverBoundingRect = ref.current.getBoundingClientRect()
        // const hoverMiddleY =
        //   (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
        // const clientOffset = monitor.getClientOffset()
        // // 计算距离顶部的距离
        // const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top
        // // 向下拖动
        // if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        //   return
        // }
        // // 向上拖动
        // if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        //   return
        // }
        // moveIndex(dragIndex, hoverIndex)
        // item.index = hoverIndex
      },
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
  // TODO
  // drag(drop(ref))

  return (
    <div className="w-3/5 h-full border border-solid border-gray-200 border-l-0">
      <DropHeader grided={grided} onGridChange={handleGridChange} />
      <div
        ref={drop}
        // ref={ref}
        className={clsx(
          'h-[95vh]',
          !droppedItems.length && 'flex items-center justify-center',
          grided && 'background-grid'
        )}
        style={{
          backgroundColor
        }}
      >
        {isActive ? '放置于此' : '拖拽组件至此处'}
        {droppedItems.map(i => {
          const Component = i.name ? componentsMap[i.name] : Developing
          console.log(Component)
          return isValidElementType(Component) ? (
            <Component key={i.name} />
          ) : (
            <div key={i.title}>{i.title}</div>
          )
          // return <div key={i.title}>{i.title}</div>
        })}
      </div>
    </div>
  )
}

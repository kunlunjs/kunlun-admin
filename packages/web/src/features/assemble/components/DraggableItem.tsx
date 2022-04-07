import { forwardRef } from 'react'
import type { DragSourceMonitor } from 'react-dnd'
import { useDrag } from 'react-dnd'
import { DragItemTypes } from '../config'
import type { DragItem, DropResult } from '../interfaces'
interface ItemProps {
  item: DragItem
  /**
   * 是否已被拖拽
   */
  isDropped: boolean
}

export const DraggableItem = forwardRef<HTMLDivElement, ItemProps>(
  function Item({ item, isDropped }, ref) {
    const [{ isDragging, opacity, border }, drag] = useDrag(() => {
      return {
        type: DragItemTypes.COMPONENT,
        // 被 useDrop drop() 可拿到
        item,
        end(item, monitor: DragSourceMonitor) {
          const dropResult = monitor.getDropResult<DropResult>()
          const isDropAllowed =
            dropResult?.allowedDropEffect === 'any' ||
            dropResult?.allowedDropEffect === dropResult?.dropEffect
          console.log('dropResult: ', dropResult, isDropAllowed)
          if (isDropAllowed) {
            const isCopyAction = dropResult?.dropEffect === 'copy'
            const actionName = isCopyAction ? 'copied' : 'moved'
          }
        },
        collect(monitor: DragSourceMonitor) {
          return {
            isDragging: monitor.isDragging(),
            border: monitor.isDragging() ? '1px dashed #999' : '',
            opacity: monitor.isDragging() ? 0.5 : 1
          }
        }
      }
    })
    if (!item.draggable) {
      return null
    }

    return (
      <div
        key={item.title}
        // ref={ref}
        ref={drag}
        data-dragid={item.title}
        className="flex flex-col items-center relative max-h-8 my-4 pb-1 border border-solid border-gray-200 cursor-move"
        style={{ border, opacity }}
      >
        <img alt={item.title} src={item.src} className="w-full h-full" />
        <span className="absolute -bottom-5 -translate-x-1/2 mt-2 text-xs">
          {item.title}
        </span>
      </div>
    )
  }
)

import { forwardRef } from 'react'
import type { DragSourceMonitor } from 'react-dnd'
import { useDrag } from 'react-dnd'
import { DragItemTypes } from '../config'
import type { DragItem, DropResult } from '../interfaces'
interface ItemProps extends DragItem {
  /**
   * 是否已被拖拽
   */
  isDropped: boolean
}

export const DraggableItem = forwardRef<HTMLDivElement, ItemProps>(
  function Item({ draggable, type, category, name, src, isDropped }, ref) {
    const [{ opactity }, drag] = useDrag(() => {
      return {
        type: DragItemTypes.ITEM,
        item: { type, category, name },
        // canDrag:
        // isDragging:
        end(item, monitor) {
          const dropResult = monitor.getDropResult() as DropResult
          console.log('dropResult: ', dropResult)
          if (item && dropResult) {
            const isDropAllowed =
              dropResult.allowedDropEffect === 'any' ||
              dropResult.allowedDropEffect === dropResult.dropEffect
            const isCopyAction = dropResult.dropEffect === 'copy'
            const actionName = isCopyAction ? 'copied' : 'moved'
          }
        },
        collect(monitor: DragSourceMonitor) {
          return {
            opactity: monitor.isDragging() ? 0.4 : 1
          }
        }
      }
    })
    if (!draggable) {
      return null
    }
    return (
      <div
        key={name}
        // ref={ref}
        ref={drag}
        className="flex flex-col justify-between items-center relative w-[48%] max-h-12 my-4 pb-1 border border-solid border-gray-200 cursor-move"
      >
        <img alt={name} src={src} className="w-full h-full" />
        <span className="absolute -bottom-5 -translate-x-1/2 mt-2 text-xs">
          {name}
        </span>
      </div>
    )
  }
)

import { omit } from 'lodash'
import { forwardRef } from 'react'
import type { DragSourceMonitor } from 'react-dnd'
import { useDrag } from 'react-dnd'
import { useDroppedStore } from '@/stores'
import type { DragItem, DropResult } from '@/types'
import { DragItemTypes } from '../config'

interface ItemProps {
  item: DragItem
  /**
   * 是否已被拖拽
   */
  isDropped: boolean
}

export const DraggableItem = forwardRef<HTMLDivElement, ItemProps>(
  function Item({ item, isDropped }, ref) {
    const { addDroppedItem } = useDroppedStore()
    const [{ isDragging, opacity, border }, drag] = useDrag(() => {
      return {
        type: DragItemTypes.COMPONENT,
        // -> useDrop drop()
        item,
        end(item, monitor: DragSourceMonitor) {
          const dropResult = monitor.getDropResult<DropResult>()
          // const isDropAllowed =
          //   dropResult?.allowedDropEffect === 'any' ||
          //   dropResult?.allowedDropEffect === dropResult?.dropEffect
          addDroppedItem(omit(dropResult, 'allowedDropEffect'))
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
        ref={drag}
        key={item.title}
        data-dragid={item.title}
        className="relative my-4 flex max-h-8 cursor-move flex-col items-center border border-solid border-gray-200 pb-1"
        style={{ border, opacity }}
      >
        <img alt={item.title} src={item.src} className="h-full w-full" />
        <span className="absolute -bottom-5 mt-2 -translate-x-1/2 text-xs">
          {item.title}
        </span>
      </div>
    )
  }
)

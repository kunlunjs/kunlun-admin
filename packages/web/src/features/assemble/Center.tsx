import clsx from 'clsx'
import type { FC } from 'react'
import { useCallback, useState } from 'react'
import type { DropTargetMonitor } from 'react-dnd'
import { useDrop } from 'react-dnd'
import { DropHeader } from './components'
import { DragItemTypes } from './config'
import { selectBackgroundColor } from './helpers'
import type { DragItem } from './interfaces'

interface CenterProps {
  onDrop?: (item: DragItem, monitor: DropTargetMonitor<DragItem>) => void
}

export const Center: FC<CenterProps> = ({ onDrop }) => {
  const [grided, setGrided] = useState(true)
  const [{ canDrop, isOver }, drop] = useDrop(() => {
    return {
      accept: DragItemTypes.COMPONENT,
      drop: onDrop
        ? onDrop
        : () => {
            return {
              name: '',
              allowedDropEffect: true
            }
          },
      // hover(item, monitor) {},
      collect: (monitor: DropTargetMonitor) => {
        return {
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop()
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
          'h-[95vh] align-middle text-center',
          grided && 'background-grid'
        )}
        style={{
          backgroundColor
        }}
      >
        {isActive ? 'Release to drop' : 'Drag a box here'}
      </div>
    </div>
  )
}

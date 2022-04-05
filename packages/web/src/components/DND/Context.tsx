import type { DragStartEvent, DragEndEvent } from '@dnd-kit/core'
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy
} from '@dnd-kit/sortable'
import { useState } from 'react'
import type { FC } from 'react'
import { Grid } from './Grid'
import { Photo } from './Photo'
import photos from './photos.json'
import { Sortable } from './Sortable'

interface ContextProps {}

export const Context: FC<ContextProps> = () => {
  const [items, setItems] = useState(photos)
  const [activeId, setActiveId] = useState<string | null>(null)
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor))

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (active.id !== over?.id) {
      setItems(items => {
        const oldIndex = items.indexOf(active.id)
        const newIndex = items.indexOf(over!.id) as number
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  const handleDragCancel = () => {
    setActiveId(null)
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <Grid columns={4}>
          {items.map((url, index) => {
            return <Sortable key={url} url={url} />
          })}
        </Grid>
      </SortableContext>
      <DragOverlay>
        {activeId ? (
          <Photo url={activeId} index={items.indexOf(activeId)} />
        ) : null}
      </DragOverlay>
    </DndContext>
  )
}

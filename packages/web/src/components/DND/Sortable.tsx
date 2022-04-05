import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import type { FC } from 'react'
import { Photo } from './Photo'

interface SortableProps {
  url: string
}

export const Sortable: FC<SortableProps> = ({ url, ...props }) => {
  const sortable = useSortable({ id: url })
  const {
    attributes,
    listeners,
    isDragging,
    setNodeRef,
    transform,
    transition
  } = sortable

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <Photo
      ref={setNodeRef}
      url={url}
      style={style}
      {...props}
      {...attributes}
      {...listeners}
    />
  )
}

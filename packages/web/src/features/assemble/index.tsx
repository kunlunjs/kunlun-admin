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

export const Assemble: FC<AssembleProps> = () => {
  const [droppedNames, setDroppedNames] = useState<DragItem['name'][]>([])

  return (
    <div>
      <div className="flex space-x-4 h-[100vh]">
        <DndProvider backend={HTML5Backend}>
          <Left items={components} droppedNames={droppedNames} />
          <Center />
        </DndProvider>
        <Right />
      </div>
    </div>
  )
}

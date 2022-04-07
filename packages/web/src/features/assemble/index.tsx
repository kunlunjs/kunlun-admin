import type { FC } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Center } from './Center'
import { Left } from './Left'
import { Right } from './Right'

interface AssembleProps {}

export const Assemble: FC<AssembleProps> = () => {
  return (
    <div>
      <div className="flex space-x-4 h-[100vh]">
        <DndProvider backend={HTML5Backend}>
          <Left />
          <Center />
        </DndProvider>
        <Right />
      </div>
    </div>
  )
}

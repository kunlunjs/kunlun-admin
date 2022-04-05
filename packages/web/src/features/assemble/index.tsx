import type { FC } from 'react'
import { Context as DnDSortableExample } from '@/components/DND/Context'

interface AssembleProps {}

export const Assemble: FC<AssembleProps> = () => {
  return (
    <>
      <div>页面装配</div>
      <DnDSortableExample />
    </>
  )
}

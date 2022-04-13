import type { FC } from 'react'

interface ListContainers1Props {}

export const config = {
  title: 'Simple with dividers'
}
const items = [{ id: 1 }]
const ListContainer1: FC<ListContainers1Props> = () => {
  return (
    <ul role="list" className="divide-y divide-gray-200">
      {items.map(item => (
        <li key={item.id} className="py-4">
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}
export default ListContainer1

import type { FC } from 'react'

interface ListContainers1Props {}
const items = [{ id: 1 }]
const ListContainers1: FC<ListContainers1Props> = () => {
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
export default ListContainers1

import type { FC } from 'react'

interface ListContainers7Props {}
const items = [{ id: 1 }]
const ListContainers7: FC<ListContainers1Props> = () => {
  return (
    <ul role="list" className="divide-y divide-gray-200">
      {items.map(item => (
        <li key={item.id} className="px-4 py-4 sm:px-0">
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}
export default ListContainers7

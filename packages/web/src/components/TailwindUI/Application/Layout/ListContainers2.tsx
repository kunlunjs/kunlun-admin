import type { FC } from 'react'

interface ListContainers2Props {}
const items = [
  { id: 1 }
  // More items...
]
const ListContainers2: FC<ListContainers2Props> = () => {
  return (
    <div className="overflow-hidden bg-white rounded-md shadow">
      <ul role="list" className="divide-y divide-gray-200">
        {items.map(item => (
          <li key={item.id} className="px-6 py-4">
            {/* Your content */}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default ListContainers2

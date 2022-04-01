import type { FC } from 'react'

interface ListContainers3Props {}
const items = [
  { id: 1 }
  // More items...
]
const ListContainers3: FC<ListContainers3Props> = () => {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {items.map(item => (
          <li key={item.id} className="px-4 py-4 sm:px-6">
            {/* Your content */}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default ListContainers3

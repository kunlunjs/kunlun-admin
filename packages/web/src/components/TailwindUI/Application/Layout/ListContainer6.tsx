import type { FC } from 'react'

interface ListContainers6Props {}
const items = [{ id: 1 }]
const ListContainer6: FC<ListContainers6Props> = () => {
  return (
    <div className="overflow-hidden bg-white border border-gray-300 rounded-md">
      <ul role="list" className="divide-y divide-gray-300">
        {items.map(item => (
          <li key={item.id} className="px-6 py-4">
            {/* Your content */}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default ListContainer6

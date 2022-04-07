import type { FC } from 'react'

interface ListContainers4Props {}
const items = [{ id: 1 }]
const ListContainer4: FC<ListContainers4Props> = () => {
  return (
    <ul role="list" className="space-y-3">
      {items.map(item => (
        <li
          key={item.id}
          className="px-6 py-4 overflow-hidden bg-white rounded-md shadow"
        >
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}
export default ListContainer4

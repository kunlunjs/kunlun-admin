import type { FC } from 'react'

interface ListContainers5Props {}
const items = [{ id: 1 }]
const ListContainers5: FC<ListContainers5Props> = () => {
  return (
    <ul role="list" className="space-y-3">
      {items.map(item => (
        <li
          key={item.id}
          className="px-4 py-4 overflow-hidden bg-white shadow sm:px-6 sm:rounded-md"
        >
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}
export default ListContainers5

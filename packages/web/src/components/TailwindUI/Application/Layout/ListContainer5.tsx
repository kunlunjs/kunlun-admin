import type { FC } from 'react'

interface ListContainers5Props {}
const items = [{ id: 1 }]
const ListContainer5: FC<ListContainers5Props> = () => {
  return (
    <ul role="list" className="space-y-3">
      {items.map(item => (
        <li
          key={item.id}
          className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6"
        >
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}
export default ListContainer5

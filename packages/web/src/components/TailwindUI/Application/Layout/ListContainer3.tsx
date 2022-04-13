import type { FC } from 'react'

interface ListContainers3Props {}

export const config = {
  title: 'Card with dividers, full-width on mobile'
}
const items = [
  { id: 1 }
  // More items...
]
const ListContainer3: FC<ListContainers3Props> = () => {
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
export default ListContainer3

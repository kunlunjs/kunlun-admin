/* eslint-disable prettier/prettier */
import type { FC } from 'react'

interface ListContainers6Props {}

export const config = {
  title: 'Flat card with dividers'
}
const items = [{ id: 1 }]
const ListContainer6: FC<ListContainers6Props> = () => {
  return (
    <div className="overflow-hidden rounded-md border border-gray-300 bg-white">
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

/* eslint-disable prettier/prettier */
import type { FC } from 'react'

interface Containers2Props {}

export const config = {
  title: 'Constrained with padded content'
}
const Containers2: FC<Containers2Props> = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Content goes here */}
    </div>
  )
}
export default Containers2

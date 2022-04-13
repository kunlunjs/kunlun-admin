/* eslint-disable prettier/prettier */
import type { FC } from 'react'

interface Containers4Props {}

export const config = {
  title: 'Constrained to breakpoint with padded content'
}
const Containers4: FC<Containers4Props> = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Content goes here */}
    </div>
  )
}
export default Containers4

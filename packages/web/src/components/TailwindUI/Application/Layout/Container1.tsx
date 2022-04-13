import type { FC } from 'react'
interface Containers1Props {}

export const config = {
  title: 'Full-width on mobile, constrained with padded content above'
}
const Containers1: FC<Containers1Props> = () => {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      {/* Content goes here */}
    </div>
  )
}
export default Containers1

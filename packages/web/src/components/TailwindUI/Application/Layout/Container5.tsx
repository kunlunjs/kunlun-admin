import type { FC } from 'react'

interface Containers5Props {}

const Containers5: FC<Containers5Props> = () => {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="max-w-3xl mx-auto">{/* Content goes here */}</div>
    </div>
  )
}
export default Containers5

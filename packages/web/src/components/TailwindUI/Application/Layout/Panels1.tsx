import type { FC } from 'react'

interface Panels1Props {}

const Panels1: FC<Panels1Props> = () => {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow">
      <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
    </div>
  )
}
export default Panels1

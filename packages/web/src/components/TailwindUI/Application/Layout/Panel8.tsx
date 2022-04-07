import type { FC } from 'react'

interface Panels8Props {}

const Panel8: FC<Panels8Props> = () => {
  return (
    <>
      <div className="overflow-hidden rounded-lg bg-gray-50">
        <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
      </div>
    </>
  )
}
export default Panel8

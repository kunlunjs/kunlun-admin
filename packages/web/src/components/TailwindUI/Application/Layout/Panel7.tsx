import type { FC } from 'react'

interface Panels7Props {}

const Panel7: FC<Panels7Props> = () => {
  return (
    <>
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:px-6">
          {/* Content goes here */}
          {/* We use less vertical padding on card headers on desktop than on body sections */}
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:p-6">
          {/* Content goes here */}
        </div>
      </div>
    </>
  )
}
export default Panel7

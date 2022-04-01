import type { FC } from 'react'

interface Panels7Props {}

const Panels7: FC<Panels7Props> = () => {
  return (
    <>
      <div className="overflow-hidden bg-white rounded-lg shadow">
        <div className="px-4 py-5 sm:px-6">
          {/* Content goes here */}
          {/* We use less vertical padding on card headers on desktop than on body sections */}
        </div>
        <div className="px-4 py-5 bg-gray-50 sm:p-6">
          {/* Content goes here */}
        </div>
      </div>
    </>
  )
}
export default Panels7

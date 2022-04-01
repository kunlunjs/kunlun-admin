import type { FC } from 'react'

interface Panels3Props {}

const Panels3: FC<Panels3Props> = () => {
  return (
    <>
      <div className="overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow">
        <div className="px-4 py-5 sm:px-6">
          {/* Content goes here */}
          {/* We use less vertical padding on card headers on desktop than on body sections */}
        </div>
        <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
      </div>
    </>
  )
}
export default Panels3

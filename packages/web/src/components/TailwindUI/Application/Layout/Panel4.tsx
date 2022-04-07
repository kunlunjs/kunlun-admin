import type { FC } from 'react'

interface Panels4Props {}

const Panel4: FC<Panels4Props> = () => {
  return (
    <>
      <div className="overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow">
        <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
        <div className="px-4 py-4 sm:px-6">
          {/* Content goes here */}
          {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
        </div>
      </div>
    </>
  )
}
export default Panel4

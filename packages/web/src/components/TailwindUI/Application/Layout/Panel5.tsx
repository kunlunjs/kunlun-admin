/* eslint-disable prettier/prettier */
import type { FC } from 'react'

interface Panels5Props {}

export const config = {
  title: 'Card with header and footer'
}
const Panel5: FC<Panels5Props> = () => {
  return (
    <>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:px-6">
          {/* Content goes here */}
          {/* We use less vertical padding on card headers on desktop than on body sections */}
        </div>
        <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
        <div className="px-4 py-4 sm:px-6">
          {/* Content goes here */}
          {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
        </div>
      </div>
    </>
  )
}
export default Panel5

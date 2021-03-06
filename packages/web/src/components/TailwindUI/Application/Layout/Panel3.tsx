/* eslint-disable prettier/prettier */
import type { FC } from 'react'

interface Panels3Props {}

export const config = {
  title: 'Card with header'
}
const Panel3: FC<Panels3Props> = () => {
  return (
    <>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:px-6">
          {/* Content goes here */}
          {/* We use less vertical padding on card headers on desktop than on body sections */}
        </div>
        <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
      </div>
    </>
  )
}
export default Panel3

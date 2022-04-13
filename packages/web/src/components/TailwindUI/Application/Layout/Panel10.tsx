import type { FC } from 'react'

interface Panels10Props {}

export const config = {
  title: 'Well, edge-to-edge on mobile'
}
const Panel10: FC<Panels10Props> = () => {
  return (
    <>
      <div className="overflow-hidden bg-gray-50 sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
      </div>
    </>
  )
}
export default Panel10

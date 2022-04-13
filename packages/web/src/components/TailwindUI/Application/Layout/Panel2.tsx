import type { FC } from 'react'

interface Panels2Props {}

export const config = {
  title: 'Card, edge-to-edge on mobile'
}
const Panel2: FC<Panels2Props> = () => {
  return (
    <>
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
      </div>
    </>
  )
}
export default Panel2

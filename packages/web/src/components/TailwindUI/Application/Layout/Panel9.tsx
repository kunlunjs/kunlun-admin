/* eslint-disable prettier/prettier */
import type { FC } from 'react'

interface Panels9Props {}

export const config = {
  title: 'Well on gray'
}
const Panel9: FC<Panels9Props> = () => {
  return (
    <>
      <div className="overflow-hidden rounded-lg bg-gray-200">
        <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
      </div>
    </>
  )
}
export default Panel9

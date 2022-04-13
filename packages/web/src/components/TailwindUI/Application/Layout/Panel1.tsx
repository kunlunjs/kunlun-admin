/* eslint-disable prettier/prettier */
import type { FC } from 'react'

interface Panels1Props {}

export const config = {
  title: 'Basic card'
}
const Panel1: FC<Panels1Props> = () => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
    </div>
  )
}
export default Panel1

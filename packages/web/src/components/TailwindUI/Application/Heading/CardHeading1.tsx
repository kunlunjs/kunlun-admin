import type { FC } from 'react'

interface CardHeading1Props {}
export const config = {
  title: 'Simple'
}

const CardHeading1: FC<CardHeading1Props> = () => {
  return (
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        Job Postings
      </h3>
    </div>
  )
}
export default CardHeading1

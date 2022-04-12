import type { FC } from 'react'

interface CardHeading5Props {}
export const config = {
  title: 'With description'
}

const CardHeading5: FC<CardHeading5Props> = () => {
  return (
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        Job Postings
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti
        consectetur.
      </p>
    </div>
  )
}
export default CardHeading5

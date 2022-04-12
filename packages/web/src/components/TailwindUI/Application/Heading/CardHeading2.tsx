import type { FC } from 'react'

interface CardHeading2Props {}
export const config = {
  title: 'With actions'
}

const CardHeading2: FC<CardHeading2Props> = () => {
  return (
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <div className="-mt-2 -ml-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="mt-2 ml-4">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Job Postings
          </h3>
        </div>
        <div className="mt-2 ml-4 flex-shrink-0">
          <button
            type="button"
            className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Create new job
          </button>
        </div>
      </div>
    </div>
  )
}
export default CardHeading2

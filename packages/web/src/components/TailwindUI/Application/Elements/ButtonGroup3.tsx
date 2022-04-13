/* eslint-disable prettier/prettier */
/* This example requires Tailwind CSS v2.0+ */
import { BookmarkIcon } from '@heroicons/react/solid'
import type { FC } from 'react'
interface ButtonGroup3Props {}

export const config = {
  title: 'With stat'
}

const ButtonGroup3: FC<ButtonGroup3Props> = () => {
  return (
    <span className="relative z-0 inline-flex rounded-md shadow-sm">
      <button
        type="button"
        className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      >
        <BookmarkIcon
          className="mr-2 -ml-1 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        Bookmark
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      >
        12k
      </button>
    </span>
  )
}
export default ButtonGroup3

/* This example requires Tailwind CSS v2.0+ */
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon
} from '@heroicons/react/solid'

import type { FC } from 'react'
interface Pagination2Props {}
const Pagination2: FC<Pagination2Props> = () => {
  return (
    <nav className="flex items-center justify-between px-4 border-t border-gray-200 sm:px-0">
      <div className="flex flex-1 w-0 -mt-px">
        <a
          href="#"
          className="inline-flex items-center pt-4 pr-1 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300"
        >
          <ArrowNarrowLeftIcon
            className="w-5 h-5 mr-3 text-gray-400"
            aria-hidden="true"
          />
          Previous
        </a>
      </div>
      <div className="hidden md:-mt-px md:flex">
        <a
          href="#"
          className="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300"
        >
          1
        </a>
        {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
        <a
          href="#"
          className="inline-flex items-center px-4 pt-4 text-sm font-medium text-indigo-600 border-t-2 border-indigo-500"
          aria-current="page"
        >
          2
        </a>
        <a
          href="#"
          className="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300"
        >
          3
        </a>
        <span className="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent">
          ...
        </span>
        <a
          href="#"
          className="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300"
        >
          8
        </a>
        <a
          href="#"
          className="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300"
        >
          9
        </a>
        <a
          href="#"
          className="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300"
        >
          10
        </a>
      </div>
      <div className="flex justify-end flex-1 w-0 -mt-px">
        <a
          href="#"
          className="inline-flex items-center pt-4 pl-1 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300"
        >
          Next
          <ArrowNarrowRightIcon
            className="w-5 h-5 ml-3 text-gray-400"
            aria-hidden="true"
          />
        </a>
      </div>
    </nav>
  )
}
export default Pagination2

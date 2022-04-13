/* eslint-disable prettier/prettier */
import { PlusSmIcon } from '@heroicons/react/solid'
import type { FC } from 'react'
interface Dividers7Props {}

export const config = {
  title: 'With title and button'
}
const Dividers7: FC<Dividers7Props> = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex items-center justify-between">
        <span className="bg-white pr-3 text-lg font-medium text-gray-900">
          Projects
        </span>
        <button
          type="button"
          className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-1.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <PlusSmIcon
            className="-ml-1.5 mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span>Button text</span>
        </button>
      </div>
    </div>
  )
}
export default Dividers7

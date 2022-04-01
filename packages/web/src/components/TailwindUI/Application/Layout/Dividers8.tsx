import {
  AnnotationIcon,
  PaperClipIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/solid'
import type { FC } from 'react'
interface Dividers8Props {}

const Dividers8: FC<Dividers8Props> = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm">
          <button
            type="button"
            className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-400 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <span className="sr-only">Edit</span>
            <PencilIcon className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-400 bg-white border border-gray-300 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <span className="sr-only">Attachment</span>
            <PaperClipIcon className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-400 bg-white border border-gray-300 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <span className="sr-only">Annotate</span>
            <AnnotationIcon className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-400 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <span className="sr-only">Delete</span>
            <TrashIcon className="w-5 h-5" aria-hidden="true" />
          </button>
        </span>
      </div>
    </div>
  )
}
export default Dividers8

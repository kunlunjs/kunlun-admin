/* eslint-disable prettier/prettier */
/* This example requires Tailwind CSS v2.0+ */
import { PlusSmIcon as PlusSmIconOutline } from '@heroicons/react/outline'
import { PlusSmIcon as PlusSmIconSolid } from '@heroicons/react/solid'
import type { FC } from 'react'

interface Button7Props {}

export const config = {
  title: 'Circular buttons'
}

const Button7: FC<Button7Props> = () => {
  return (
    <>
      <button
        type="button"
        className="inline-flex items-center rounded-full border border-transparent bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <PlusSmIconSolid className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="inline-flex items-center rounded-full border border-transparent bg-indigo-600 p-1.5 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <PlusSmIconSolid className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="inline-flex items-center rounded-full border border-transparent bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <PlusSmIconSolid className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="inline-flex items-center rounded-full border border-transparent bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <PlusSmIconOutline className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="inline-flex items-center rounded-full border border-transparent bg-indigo-600 p-3 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <PlusSmIconOutline className="h-6 w-6" aria-hidden="true" />
      </button>
    </>
  )
}
export default Button7

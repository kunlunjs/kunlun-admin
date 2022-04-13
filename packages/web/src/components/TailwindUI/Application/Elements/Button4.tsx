/* eslint-disable prettier/prettier */
/* This example requires Tailwind CSS v2.0+ */
import { MailIcon } from '@heroicons/react/solid'
import type { FC } from 'react'

interface Button4Props {}

export const config = {
  title: 'Button with leading icon'
}

const Button4: FC<Button4Props> = () => {
  return (
    <>
      <button
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <MailIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
        Button text
      </button>
      <button
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <MailIcon className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
        Button text
      </button>
      <button
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <MailIcon className="mr-3 -ml-1 h-5 w-5" aria-hidden="true" />
        Button text
      </button>
      <button
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <MailIcon className="mr-3 -ml-1 h-5 w-5" aria-hidden="true" />
        Button text
      </button>
    </>
  )
}
export default Button4

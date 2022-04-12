import { MailIcon } from '@heroicons/react/solid'
import type { FC } from 'react'

export const config = {
  title: 'Input with leading icon'
}

interface InputGroup6Props {}

const InputGroup6: FC<InputGroup6Props> = () => {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Email
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MailIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="you@example.com"
        />
      </div>
    </div>
  )
}

export default InputGroup6

import { ExclamationCircleIcon } from '@heroicons/react/solid'
import type { FC } from 'react'

export const config = {
  title: 'Input with validation error'
}

interface InputGroup3Props {}

const InputGroup3: FC<InputGroup3Props> = () => {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Email
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
          placeholder="you@example.com"
          defaultValue="adamwathan"
          aria-invalid="true"
          aria-describedby="email-error"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ExclamationCircleIcon
            className="h-5 w-5 text-red-500"
            aria-hidden="true"
          />
        </div>
      </div>
      <p className="mt-2 text-sm text-red-600" id="email-error">
        Your password must be less than 4 characters.
      </p>
    </div>
  )
}

export default InputGroup3

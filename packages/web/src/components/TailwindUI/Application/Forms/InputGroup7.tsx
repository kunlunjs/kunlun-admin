import { QuestionMarkCircleIcon } from '@heroicons/react/solid'
import type { FC } from 'react'

export const config = {
  title: 'Input with trailing icon'
}

interface InputGroup7Props {}

const InputGroup7: FC<InputGroup7Props> = () => {
  return (
    <div>
      <label
        htmlFor="account-number"
        className="block text-sm font-medium text-gray-700"
      >
        Account number
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="text"
          name="account-number"
          id="account-number"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
          placeholder="000-00-0000"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <QuestionMarkCircleIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  )
}

export default InputGroup7

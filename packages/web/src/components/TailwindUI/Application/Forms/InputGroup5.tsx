import type { FC } from 'react'

export const config = {
  title: 'Input with corner hint'
}

interface InputGroup5Props {}

const InputGroup5: FC<InputGroup5Props> = () => {
  return (
    <div>
      <div className="flex justify-between">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <span className="text-sm text-gray-500" id="email-optional">
          Optional
        </span>
      </div>
      <div className="mt-1">
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="you@example.com"
          aria-describedby="email-optional"
        />
      </div>
    </div>
  )
}

export default InputGroup5

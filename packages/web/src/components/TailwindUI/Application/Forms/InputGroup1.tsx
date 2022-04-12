import type { FC } from 'react'

export const config = {
  title: 'Input with label'
}

interface InputGroup1Props {}

const InputGroup1: FC<InputGroup1Props> = () => {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Email
      </label>
      <div className="mt-1">
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="you@example.com"
        />
      </div>
    </div>
  )
}

export default InputGroup1

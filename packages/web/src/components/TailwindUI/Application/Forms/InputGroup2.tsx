import type { FC } from 'react'

export const config = {
  title: 'Input with label and help text'
}

interface InputGroup2Props {}

const InputGroup2: FC<InputGroup2Props> = () => {
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
          aria-describedby="email-description"
        />
      </div>
      <p className="mt-2 text-sm text-gray-500" id="email-description">
        We'll only use this for spam.
      </p>
    </div>
  )
}

export default InputGroup2

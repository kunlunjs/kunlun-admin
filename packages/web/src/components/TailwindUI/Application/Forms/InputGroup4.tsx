import type { FC } from 'react'

export const config = {
  title: 'Input with hidden label'
}

interface InputGroup4Props {}

const InputGroup4: FC<InputGroup4Props> = () => {
  return (
    <div>
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder="you@example.com"
      />
    </div>
  )
}

export default InputGroup4

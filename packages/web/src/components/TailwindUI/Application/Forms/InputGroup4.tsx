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
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="you@example.com"
      />
    </div>
  )
}

export default InputGroup4

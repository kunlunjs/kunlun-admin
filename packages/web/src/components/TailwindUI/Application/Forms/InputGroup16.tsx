import type { FC } from 'react'

export const config = {
  title: 'Input with inset label'
}

interface InputGroup16Props {}

const InputGroup16: FC<InputGroup16Props> = () => {
  return (
    <div className="border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
      <label htmlFor="name" className="block text-xs font-medium text-gray-900">
        Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
        placeholder="Jane Doe"
      />
    </div>
  )
}

export default InputGroup16

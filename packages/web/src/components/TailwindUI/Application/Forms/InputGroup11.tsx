import type { FC } from 'react'

export const config = {
  title: 'Input with pill shape'
}

interface InputGroup11Props {}

const InputGroup11: FC<InputGroup11Props> = () => {
  return (
    <div>
      <label
        htmlFor="name"
        className="ml-px block pl-4 text-sm font-medium text-gray-700"
      >
        Name
      </label>
      <div className="mt-1">
        <input
          type="text"
          name="name"
          id="name"
          className="block w-full rounded-full border-gray-300 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Jane Doe"
        />
      </div>
    </div>
  )
}

export default InputGroup11

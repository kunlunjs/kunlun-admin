import type { FC } from 'react'

export const config = {
  title: 'Input with inline add-on'
}

interface InputGroup9Props {}

const InputGroup9: FC<InputGroup9Props> = () => {
  return (
    <div>
      <label
        htmlFor="company-website"
        className="block text-sm font-medium text-gray-700"
      >
        Company Website
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">http://</span>
        </div>
        <input
          type="text"
          name="company-website"
          id="company-website"
          className="block w-full rounded-md border-gray-300 pl-16 focus:border-indigo-500 focus:ring-indigo-500 sm:pl-14 sm:text-sm"
          placeholder="www.example.com"
        />
      </div>
    </div>
  )
}

export default InputGroup9

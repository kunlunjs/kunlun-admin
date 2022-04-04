import type { FC } from 'react'

interface Checkbox2Props {}

export const config = {
  title: 'List with inline description'
}

const Checkbox2: FC<Checkbox2Props> = () => {
  return (
    <fieldset className="space-y-5">
      <legend className="sr-only">Notifications</legend>
      <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            id="comments"
            aria-describedby="comments-description"
            name="comments"
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="comments" className="font-medium text-gray-700">
            New comments
          </label>
          <span id="comments-description" className="text-gray-500">
            <span className="sr-only">New comments </span>so you always know
            what's happening.
          </span>
        </div>
      </div>
      <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            id="candidates"
            aria-describedby="candidates-description"
            name="candidates"
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="candidates" className="font-medium text-gray-700">
            New candidates
          </label>
          <span id="candidates-description" className="text-gray-500">
            <span className="sr-only">New candidates </span>who apply for any
            open postings.
          </span>
        </div>
      </div>
      <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            id="offers"
            aria-describedby="offers-description"
            name="offers"
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="offers" className="font-medium text-gray-700">
            Offers
          </label>
          <span id="offers-description" className="text-gray-500">
            <span className="sr-only">Offers </span>when they are accepted or
            rejected by candidates.
          </span>
        </div>
      </div>
    </fieldset>
  )
}

export default Checkbox2

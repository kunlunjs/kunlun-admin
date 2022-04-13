/* eslint-disable prettier/prettier */
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import { useState } from 'react'
import type { FC } from 'react'
const mailingLists = [
  {
    id: 1,
    title: 'Newsletter',
    description: 'Last message sent an hour ago',
    users: '621 users'
  },
  {
    id: 2,
    title: 'Existing Customers',
    description: 'Last message sent 2 weeks ago',
    users: '1200 users'
  },
  {
    id: 3,
    title: 'Trial Users',
    description: 'Last message sent 4 days ago',
    users: '2740 users'
  }
]

export const config = {
  title: 'Small cards'
}

interface RadioGroup8Props {}

const RadioGroup8: FC<RadioGroup8Props> = () => {
  const [selectedMailingLists, setSelectedMailingLists] = useState(
    mailingLists[0]
  )

  return (
    <RadioGroup value={selectedMailingLists} onChange={setSelectedMailingLists}>
      <RadioGroup.Label className="text-base font-medium text-gray-900">
        Select a mailing list
      </RadioGroup.Label>

      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
        {mailingLists.map(mailingList => (
          <RadioGroup.Option
            key={mailingList.id}
            value={mailingList}
            className={({ checked, active }) =>
              clsx(
                checked ? 'border-transparent' : 'border-gray-300',
                active ? 'border-indigo-500 ring-2 ring-indigo-500' : '',
                'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
              )
            }
          >
            {({ checked, active }) => (
              <>
                <div className="flex flex-1">
                  <div className="flex flex-col">
                    <RadioGroup.Label
                      as="span"
                      className="block text-sm font-medium text-gray-900"
                    >
                      {mailingList.title}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className="mt-1 flex items-center text-sm text-gray-500"
                    >
                      {mailingList.description}
                    </RadioGroup.Description>
                    <RadioGroup.Description
                      as="span"
                      className="mt-6 text-sm font-medium text-gray-900"
                    >
                      {mailingList.users}
                    </RadioGroup.Description>
                  </div>
                </div>
                <CheckCircleIcon
                  className={clsx(
                    !checked ? 'invisible' : '',
                    'h-5 w-5 text-indigo-600'
                  )}
                  aria-hidden="true"
                />
                <div
                  className={clsx(
                    active ? 'border' : 'border-2',
                    checked ? 'border-indigo-500' : 'border-transparent',
                    'pointer-events-none absolute -inset-px rounded-lg'
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
export default RadioGroup8

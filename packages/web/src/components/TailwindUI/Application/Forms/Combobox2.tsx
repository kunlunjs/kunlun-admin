import { Combobox } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import type { FC } from 'react'
import { useState } from 'react'

interface Combobox2Props {}

const people = [
  { id: 1, name: 'Leslie Alexander' }
  // More users...
]

export const config = {
  title: 'With check on left'
}

const Combobox2: FC<Combobox2Props> = () => {
  const [query, setQuery] = useState('')
  const [selectedPerson, setSelectedPerson] = useState()

  const filteredPeople =
    query === ''
      ? people
      : people.filter(person => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox as="div" value={selectedPerson} onChange={setSelectedPerson}>
      <Combobox.Label className="block text-sm font-medium text-gray-700">
        Assigned to
      </Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          onChange={event => setQuery(event.target.value)}
          displayValue={(person: any) => person.name}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {filteredPeople.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredPeople.map(person => (
              <Combobox.Option
                key={person.id}
                value={person}
                className={({ active }) =>
                  clsx(
                    'relative cursor-default select-none py-2 pl-8 pr-4',
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={clsx(
                        'block truncate',
                        selected && 'font-semibold'
                      )}
                    >
                      {person.name}
                    </span>

                    {selected && (
                      <span
                        className={clsx(
                          'absolute inset-y-0 left-0 flex items-center pl-1.5',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  )
}

export default Combobox2

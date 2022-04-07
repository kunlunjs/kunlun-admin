import { Combobox, Dialog, Transition } from '@headlessui/react'
import { UsersIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import type { FC } from 'react'
import { Fragment, useState } from 'react'
interface CommandPalette2Props {}
const people = [
  { id: 1, name: 'Leslie Alexander', url: '#' }
  // More people...
]

const CommandPalette2: FC<CommandPalette2Props> = () => {
  const [query, setQuery] = useState('')

  const [open, setOpen] = useState(true)

  const filteredPeople =
    query === ''
      ? []
      : people.filter(person => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Transition.Root show={open} as={Fragment} afterLeave={() => setQuery('')}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 p-4 overflow-y-auto sm:p-6 md:p-20"
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-25" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Combobox
            as="div"
            className="max-w-xl p-2 mx-auto transition-all transform bg-white shadow-2xl rounded-xl ring-1 ring-black ring-opacity-5"
            value=""
            onChange={(person: any) => (window.location = person.url)}
          >
            <Combobox.Input
              className="w-full rounded-md border-0 bg-gray-100 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="Search..."
              onChange={event => setQuery(event.target.value)}
            />

            {filteredPeople.length > 0 && (
              <Combobox.Options
                static
                className="py-2 -mb-2 overflow-y-auto text-sm text-gray-800 max-h-72 scroll-py-2"
              >
                {filteredPeople.map(person => (
                  <Combobox.Option
                    key={person.id}
                    value={person}
                    className={({ active }) =>
                      clsx(
                        'cursor-default select-none rounded-md px-4 py-2',
                        active && 'bg-indigo-600 text-white'
                      )
                    }
                  >
                    {person.name}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}

            {query !== '' && filteredPeople.length === 0 && (
              <div className="px-4 text-center py-14 sm:px-14">
                <UsersIcon
                  className="w-6 h-6 mx-auto text-gray-400"
                  aria-hidden="true"
                />
                <p className="mt-4 text-sm text-gray-900">
                  No people found using that search term.
                </p>
              </div>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}
export default CommandPalette2

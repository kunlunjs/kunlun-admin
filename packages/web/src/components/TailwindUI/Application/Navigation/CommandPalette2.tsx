import { Combobox, Dialog, Transition } from '@headlessui/react'
import { UsersIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import type { FC } from 'react'
import { Fragment, useState } from 'react'
import { KLTransitionChild } from '@/components/Animation'
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
        className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20"
        onClose={setOpen}
      >
        <KLTransitionChild>
          <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </KLTransitionChild>

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
            className="mx-auto max-w-xl transform rounded-xl bg-white p-2 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
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
                className="-mb-2 max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
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
              <div className="px-4 py-14 text-center sm:px-14">
                <UsersIcon
                  className="mx-auto h-6 w-6 text-gray-400"
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

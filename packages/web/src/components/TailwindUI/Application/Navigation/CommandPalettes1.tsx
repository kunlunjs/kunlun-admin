import { Combobox, Dialog, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import type { FC } from 'react'
import { Fragment, useState } from 'react'
interface CommandPalettes1Props {}
const people = [
  { id: 1, name: 'Leslie Alexander', url: '#' }
  // More people...
]

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ')
}
const CommandPalettes1: FC<CommandPalettes1Props> = () => {
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
            className="max-w-xl mx-auto overflow-hidden transition-all transform bg-white divide-y divide-gray-100 shadow-2xl rounded-xl ring-1 ring-black ring-opacity-5"
            onChange={(person: any) => (window.location = person.url)}
          >
            <div className="relative">
              <SearchIcon
                className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <Combobox.Input
                className="w-full h-12 pr-4 text-gray-800 placeholder-gray-400 bg-transparent border-0 pl-11 focus:ring-0 sm:text-sm"
                placeholder="Search..."
                onChange={event => setQuery(event.target.value)}
              />
            </div>

            {filteredPeople.length > 0 && (
              <Combobox.Options
                static
                className="py-2 overflow-y-auto text-sm text-gray-800 max-h-72 scroll-py-2"
              >
                {filteredPeople.map(person => (
                  <Combobox.Option
                    key={person.id}
                    value={person}
                    className={({ active }) =>
                      classNames(
                        'cursor-default select-none px-4 py-2',
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
              <p className="p-4 text-sm text-gray-500">No people found.</p>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}
export default CommandPalettes1

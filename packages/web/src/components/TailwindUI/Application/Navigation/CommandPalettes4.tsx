import { Combobox, Dialog, Transition } from '@headlessui/react'
import { ExclamationCircleIcon, PencilAltIcon } from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'
import type { FC } from 'react'
import { Fragment, useState } from 'react'
interface CommandPalettes4Props {}
const items = [
  {
    id: 1,
    name: 'Text',
    description: 'Add freeform text with basic formatting options.',
    url: '#',
    color: 'bg-indigo-500',
    icon: PencilAltIcon
  }
  // More items...
]

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ')
}

const CommandPalettes4: FC<CommandPalettes4Props> = () => {
  const [query, setQuery] = useState('')

  const [open, setOpen] = useState(true)

  const filteredItems =
    query === ''
      ? []
      : items.filter(item => {
          return item.name.toLowerCase().includes(query.toLowerCase())
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
            onChange={item => (window.location = item.url)}
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

            {filteredItems.length > 0 && (
              <Combobox.Options
                static
                className="p-3 overflow-y-auto max-h-96 scroll-py-3"
              >
                {filteredItems.map(item => (
                  <Combobox.Option
                    key={item.id}
                    value={item}
                    className={({ active }) =>
                      classNames(
                        'flex cursor-default select-none rounded-xl p-3',
                        active && 'bg-gray-100'
                      )
                    }
                  >
                    {({ active }) => (
                      <>
                        <div
                          className={classNames(
                            'flex h-10 w-10 flex-none items-center justify-center rounded-lg',
                            item.color
                          )}
                        >
                          <item.icon
                            className="w-6 h-6 text-white"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto ml-4">
                          <p
                            className={classNames(
                              'text-sm font-medium',
                              active ? 'text-gray-900' : 'text-gray-700'
                            )}
                          >
                            {item.name}
                          </p>
                          <p
                            className={classNames(
                              'text-sm',
                              active ? 'text-gray-700' : 'text-gray-500'
                            )}
                          >
                            {item.description}
                          </p>
                        </div>
                      </>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}

            {query !== '' && filteredItems.length === 0 && (
              <div className="px-6 text-sm text-center py-14 sm:px-14">
                <ExclamationCircleIcon
                  type="outline"
                  name="exclamation-circle"
                  className="w-6 h-6 mx-auto text-gray-400"
                />
                <p className="mt-4 font-semibold text-gray-900">
                  No results found
                </p>
                <p className="mt-2 text-gray-500">
                  No components found for this search term. Please try again.
                </p>
              </div>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}

export default CommandPalettes4

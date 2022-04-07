import { Combobox, Dialog, Transition } from '@headlessui/react'
import {
  DocumentAddIcon,
  FolderAddIcon,
  FolderIcon,
  HashtagIcon,
  TagIcon
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import type { FC } from 'react'
import { Fragment, useState } from 'react'
interface CommandPalettes5Props {}
const projects = [
  { id: 1, name: 'Workflow Inc. / Website Redesign', url: '#' }
  // More projects...
]
const recent = [projects[0]]
const quickActions = [
  { name: 'Add new file...', icon: DocumentAddIcon, shortcut: 'N', url: '#' },
  { name: 'Add new folder...', icon: FolderAddIcon, shortcut: 'F', url: '#' },
  { name: 'Add hashtag...', icon: HashtagIcon, shortcut: 'H', url: '#' },
  { name: 'Add label...', icon: TagIcon, shortcut: 'L', url: '#' }
]

const CommandPalettes5: FC<CommandPalettes5Props> = () => {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(true)

  const filteredProjects =
    query === ''
      ? []
      : projects.filter(project => {
          return project.name.toLowerCase().includes(query.toLowerCase())
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
            className="max-w-2xl mx-auto overflow-hidden transition-all transform bg-white divide-y divide-gray-100 shadow-2xl rounded-xl ring-1 ring-black ring-opacity-5"
            value=""
            onChange={(item: any) => (window.location = item.url)}
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

            {(query === '' || filteredProjects.length > 0) && (
              <Combobox.Options
                static
                className="overflow-y-auto divide-y divide-gray-100 max-h-80 scroll-py-2"
              >
                <li className="p-2">
                  {query === '' && (
                    <h2 className="px-3 mt-4 mb-2 text-xs font-semibold text-gray-500">
                      Recent searches
                    </h2>
                  )}
                  <ul className="text-sm text-gray-700">
                    {(query === '' ? recent : filteredProjects).map(project => (
                      <Combobox.Option
                        key={project.id}
                        value={project}
                        className={({ active }) =>
                          clsx(
                            'flex cursor-default select-none items-center rounded-md px-3 py-2',
                            active && 'bg-indigo-600 text-white'
                          )
                        }
                      >
                        {({ active }) => (
                          <>
                            <FolderIcon
                              className={clsx(
                                'h-6 w-6 flex-none',
                                active ? 'text-white' : 'text-gray-400'
                              )}
                              aria-hidden="true"
                            />
                            <span className="flex-auto ml-3 truncate">
                              {project.name}
                            </span>
                            {active && (
                              <span className="flex-none ml-3 text-indigo-100">
                                Jump to...
                              </span>
                            )}
                          </>
                        )}
                      </Combobox.Option>
                    ))}
                  </ul>
                </li>
                {query === '' && (
                  <li className="p-2">
                    <h2 className="sr-only">Quick actions</h2>
                    <ul className="text-sm text-gray-700">
                      {quickActions.map(action => (
                        <Combobox.Option
                          key={action.shortcut}
                          value={action}
                          className={({ active }) =>
                            clsx(
                              'flex cursor-default select-none items-center rounded-md px-3 py-2',
                              active && 'bg-indigo-600 text-white'
                            )
                          }
                        >
                          {({ active }) => (
                            <>
                              <action.icon
                                className={clsx(
                                  'h-6 w-6 flex-none',
                                  active ? 'text-white' : 'text-gray-400'
                                )}
                                aria-hidden="true"
                              />
                              <span className="flex-auto ml-3 truncate">
                                {action.name}
                              </span>
                              <span
                                className={clsx(
                                  'ml-3 flex-none text-xs font-semibold',
                                  active ? 'text-indigo-100' : 'text-gray-400'
                                )}
                              >
                                <kbd className="font-sans">⌘</kbd>
                                <kbd className="font-sans">
                                  {action.shortcut}
                                </kbd>
                              </span>
                            </>
                          )}
                        </Combobox.Option>
                      ))}
                    </ul>
                  </li>
                )}
              </Combobox.Options>
            )}

            {query !== '' && filteredProjects.length === 0 && (
              <div className="px-6 text-center py-14 sm:px-14">
                <FolderIcon
                  className="w-6 h-6 mx-auto text-gray-400"
                  aria-hidden="true"
                />
                <p className="mt-4 text-sm text-gray-900">
                  We couldn't find any projects with that term. Please try
                  again.
                </p>
              </div>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}

export default CommandPalettes5

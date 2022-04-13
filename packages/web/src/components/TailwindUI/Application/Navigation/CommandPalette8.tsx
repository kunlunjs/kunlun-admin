import { Combobox, Dialog, Transition } from '@headlessui/react'
import { EmojiSadIcon, GlobeIcon } from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import type { FC } from 'react'
import { Fragment, useState } from 'react'
import { KLTransitionChild } from '@/components/Animation'
interface CommandPalette8Props {}
const items = [
  { id: 1, name: 'Workflow Inc.', category: 'Clients', url: '#' }
  // More items...
]

const CommandPalette8: FC<CommandPalette8Props> = () => {
  const [query, setQuery] = useState('')

  const [open, setOpen] = useState(true)

  const filteredItems =
    query === ''
      ? []
      : items.filter(item => {
          return item.name.toLowerCase().includes(query.toLowerCase())
        })

  const groups = filteredItems.reduce((groups, item) => {
    return {
      ...groups,
      //   @ts-ignore
      [item.category]: [...(groups[item.category] || []), item]
    }
  }, {})

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

        <KLTransitionChild isEaseOutEaseInOpacityScale>
          <Combobox
            as="div"
            className="mx-auto max-w-xl transform overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
            value=""
            onChange={(item: any) => (window.location = item.url)}
          >
            <div className="relative">
              <SearchIcon
                className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <Combobox.Input
                className="h-12 w-full border-0 bg-transparent pr-4 pl-11 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                placeholder="Search..."
                onChange={event => setQuery(event.target.value)}
              />
            </div>

            {query === '' && (
              <div className="border-t border-gray-100 px-6 py-14 text-center text-sm sm:px-14">
                <GlobeIcon
                  className="mx-auto h-6 w-6 text-gray-400"
                  aria-hidden="true"
                />
                <p className="mt-4 font-semibold text-gray-900">
                  Search for clients and projects
                </p>
                <p className="mt-2 text-gray-500">
                  Quickly access clients and projects by running a global
                  search.
                </p>
              </div>
            )}

            {filteredItems.length > 0 && (
              <Combobox.Options
                static
                className="max-h-80 scroll-pt-11 scroll-pb-2 space-y-2 overflow-y-auto pb-2"
              >
                {Object.entries(groups).map(([category, items]) => (
                  <li key={category}>
                    <h2 className="bg-gray-100 py-2.5 px-4 text-xs font-semibold text-gray-900">
                      {category}
                    </h2>
                    <ul className="mt-2 text-sm text-gray-800">
                      {/*@ts-ignore */}
                      {items.map((item: any) => (
                        <Combobox.Option
                          key={item.id}
                          value={item}
                          className={({ active }) =>
                            clsx(
                              'cursor-default select-none px-4 py-2',
                              active && 'bg-indigo-600 text-white'
                            )
                          }
                        >
                          {item.name}
                        </Combobox.Option>
                      ))}
                    </ul>
                  </li>
                ))}
              </Combobox.Options>
            )}

            {query !== '' && filteredItems.length === 0 && (
              <div className="border-t border-gray-100 px-6 py-14 text-center text-sm sm:px-14">
                <EmojiSadIcon
                  className="mx-auto h-6 w-6 text-gray-400"
                  aria-hidden="true"
                />
                <p className="mt-4 font-semibold text-gray-900">
                  No results found
                </p>
                <p className="mt-2 text-gray-500">
                  We couldn’t find anything with that term. Please try again.
                </p>
              </div>
            )}
          </Combobox>
        </KLTransitionChild>
      </Dialog>
    </Transition.Root>
  )
}
export default CommandPalette8

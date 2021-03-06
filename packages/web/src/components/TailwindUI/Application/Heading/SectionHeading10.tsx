import { Menu } from '@headlessui/react'
import { DotsVerticalIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import type { FC } from 'react'
import { KLTransition } from '@/components/Animation'

interface SectionHeading10Props {}
export const config = {
  title: 'With badge and dropdown'
}

const SectionHeading10: FC<SectionHeading10Props> = () => {
  return (
    <div className="border-b border-gray-200 pb-5">
      <div className="sm:flex sm:items-baseline sm:justify-between">
        <div className="sm:w-0 sm:flex-1">
          <h1
            id="message-heading"
            className="text-lg font-medium text-gray-900"
          >
            Full-Stack Developer
          </h1>
          <p className="mt-1 truncate text-sm text-gray-500">
            Checkout and Payments Team
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start">
          <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800">
            Open
          </span>
          <Menu as="div" className="relative ml-3 inline-block text-left">
            <div>
              <Menu.Button className="-my-2 flex items-center rounded-full bg-white p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <span className="sr-only">Open options</span>
                <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
              </Menu.Button>
            </div>

            <KLTransition>
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={clsx(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'flex justify-between px-4 py-2 text-sm'
                        )}
                      >
                        <span>Edit</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={clsx(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'flex justify-between px-4 py-2 text-sm'
                        )}
                      >
                        <span>Duplicate</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="button"
                        className={clsx(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'flex w-full justify-between px-4 py-2 text-sm'
                        )}
                      >
                        <span>Archive</span>
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </KLTransition>
          </Menu>
        </div>
      </div>
    </div>
  )
}
export default SectionHeading10

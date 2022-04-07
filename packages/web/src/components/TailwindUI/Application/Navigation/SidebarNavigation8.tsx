/* This example requires Tailwind CSS v2.0+ */
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon
} from '@heroicons/react/outline'
import clsx from 'clsx'
import type { FC } from 'react'
interface SidebarNavigation8Props {}
const navigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '#', current: true },
  { name: 'Team', icon: UsersIcon, href: '#', current: false },
  { name: 'Projects', icon: FolderIcon, href: '#', current: false },
  { name: 'Calendar', icon: CalendarIcon, href: '#', current: false },
  { name: 'Documents', icon: InboxIcon, href: '#', current: false },
  { name: 'Reports', icon: ChartBarIcon, href: '#', current: false }
]
const secondaryNavigation = [
  { name: 'Website redesign', href: '#' },
  { name: 'GraphQL API', href: '#' },
  { name: 'Customer migration guides', href: '#' },
  { name: 'Profit sharing program', href: '#' }
]

const SidebarNavigation8: FC<SidebarNavigation8Props> = () => {
  return (
    <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-white border-r border-gray-200">
      <div className="flex items-center flex-shrink-0 px-4">
        <img
          className="w-auto h-8"
          src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
          alt="Workflow"
        />
      </div>
      <div className="flex flex-col flex-grow mt-5">
        <nav className="flex-1 px-2 space-y-8 bg-white" aria-label="Sidebar">
          <div className="space-y-1">
            {navigation.map(item => (
              <a
                key={item.name}
                href={item.href}
                className={clsx(
                  item.current
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                )}
              >
                <item.icon
                  className={clsx(
                    item.current
                      ? 'text-gray-500'
                      : 'text-gray-400 group-hover:text-gray-500',
                    'mr-3 flex-shrink-0 h-6 w-6'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </a>
            ))}
          </div>
          <div className="space-y-1">
            <h3
              className="px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase"
              id="projects-headline"
            >
              Projects
            </h3>
            <div
              className="space-y-1"
              role="group"
              aria-labelledby="projects-headline"
            >
              {secondaryNavigation.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md group hover:text-gray-900 hover:bg-gray-50"
                >
                  <span className="truncate">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
export default SidebarNavigation8

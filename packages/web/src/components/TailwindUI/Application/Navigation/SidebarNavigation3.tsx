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
interface SidebarNavigation3Props {}
const navigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '#', current: true },
  { name: 'Team', icon: UsersIcon, href: '#', count: 3, current: false },
  { name: 'Projects', icon: FolderIcon, href: '#', count: 4, current: false },
  { name: 'Calendar', icon: CalendarIcon, href: '#', current: false },
  { name: 'Documents', icon: InboxIcon, href: '#', count: 12, current: false },
  { name: 'Reports', icon: ChartBarIcon, href: '#', current: false }
]

const SidebarNavigation3: FC<SidebarNavigation3Props> = () => {
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
        <nav className="flex-1 px-2 space-y-1 bg-white" aria-label="Sidebar">
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
              <span className="flex-1">{item.name}</span>
              {item.count ? (
                <span
                  className={clsx(
                    item.current
                      ? 'bg-white'
                      : 'bg-gray-100 group-hover:bg-gray-200',
                    'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full'
                  )}
                >
                  {item.count}
                </span>
              ) : null}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
export default SidebarNavigation3

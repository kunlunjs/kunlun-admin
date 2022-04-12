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
interface SidebarNavigation4Props {}
const navigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '#', current: true },
  { name: 'Team', icon: UsersIcon, href: '#', current: false },
  { name: 'Projects', icon: FolderIcon, href: '#', current: false },
  { name: 'Calendar', icon: CalendarIcon, href: '#', current: false },
  { name: 'Documents', icon: InboxIcon, href: '#', current: false },
  { name: 'Reports', icon: ChartBarIcon, href: '#', current: false }
]
const SidebarNavigation4: FC<SidebarNavigation4Props> = () => {
  return (
    <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5 pb-4">
      <div className="flex flex-shrink-0 items-center space-y-5 px-4">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
          alt="Workflow"
        />
      </div>
      <div className="mt-5 flex flex-grow flex-col">
        <nav className="flex-1 space-y-1 bg-white" aria-label="Sidebar">
          {navigation.map(item => (
            <a
              key={item.name}
              href={item.href}
              className={clsx(
                item.current
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                'group flex items-center border-l-4 px-3 py-2 text-sm font-medium'
              )}
            >
              <item.icon
                className={clsx(
                  item.current
                    ? 'text-indigo-500'
                    : 'text-gray-400 group-hover:text-gray-500',
                  'mr-3 h-6 w-6 flex-shrink-0'
                )}
                aria-hidden="true"
              />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
export default SidebarNavigation4

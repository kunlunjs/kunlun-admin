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
interface VerticalNavigation5Props {}
export const config = {
  title: 'Full-width three-column'
}
const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartBarIcon, current: false }
]

const VerticalNavigation5: FC<VerticalNavigation5Props> = () => {
  return (
    <nav className="space-y-1" aria-label="Sidebar">
      {navigation.map(item => (
        <a
          key={item.name}
          href={item.href}
          className={clsx(
            item.current
              ? 'bg-gray-100 text-gray-900'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'group flex items-center rounded-md px-3 py-2 text-sm font-medium'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          <item.icon
            className={clsx(
              item.current
                ? 'text-gray-500'
                : 'text-gray-400 group-hover:text-gray-500',
              '-ml-1 mr-3 h-6 w-6 flex-shrink-0'
            )}
            aria-hidden="true"
          />
          <span className="truncate">{item.name}</span>
        </a>
      ))}
    </nav>
  )
}
export default VerticalNavigation5

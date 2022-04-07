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
interface VerticalNavigation1Props {}
const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true, count: '5' },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  {
    name: 'Projects',
    href: '#',
    icon: FolderIcon,
    current: false,
    count: '19'
  },
  {
    name: 'Calendar',
    href: '#',
    icon: CalendarIcon,
    current: false,
    count: '20+'
  },
  { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartBarIcon, current: false }
]

const VerticalNavigation1: FC<VerticalNavigation1Props> = () => {
  return (
    <nav className="space-y-1" aria-label="Sidebar">
      {navigation.map(item => (
        <a
          key={item.name}
          href={item.href}
          className={clsx(
            item.current
              ? 'bg-gray-200 text-gray-900'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'flex items-center px-3 py-2 text-sm font-medium rounded-md'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          <item.icon
            className={clsx(
              item.current ? 'text-gray-500' : 'text-gray-400',
              'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
            )}
            aria-hidden="true"
          />
          <span className="truncate">{item.name}</span>
          {item.count ? (
            <span
              className={clsx(
                item.current ? 'bg-gray-50' : 'bg-gray-200 text-gray-600',
                'ml-auto inline-block py-0.5 px-3 text-xs rounded-full'
              )}
            >
              {item.count}
            </span>
          ) : null}
        </a>
      ))}
    </nav>
  )
}
export default VerticalNavigation1

/* eslint-disable prettier/prettier */
import clsx from 'clsx'
import type { FC } from 'react'
interface Tab4Props {}
export const config = {
  title: 'Tabs in pills on gray'
}
const tabs = [
  { name: 'My Account', href: '#', current: false },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: true },
  { name: 'Billing', href: '#', current: false }
]

const Tab4: FC<Tab4Props> = () => {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          //@ts-ignore
          defaultValue={tabs.find(tab => tab.current).name}
        >
          {tabs.map(tab => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map(tab => (
            <a
              key={tab.name}
              href={tab.href}
              className={clsx(
                tab.current
                  ? 'bg-gray-200 text-gray-800'
                  : 'text-gray-600 hover:text-gray-800',
                'rounded-md px-3 py-2 text-sm font-medium'
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
export default Tab4

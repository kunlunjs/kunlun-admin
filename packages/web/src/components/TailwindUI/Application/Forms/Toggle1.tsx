import { Switch } from '@headlessui/react'
import clsx from 'clsx'
import type { FC } from 'react'
import { useState } from 'react'

interface Toggle1Props {}

export const config = {
  title: 'Simple toggle'
}

const Toggle1: FC<Toggle1Props> = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={clsx(
        enabled ? 'bg-indigo-600' : 'bg-gray-200',
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={clsx(
          enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
        )}
      />
    </Switch>
  )
}

export default Toggle1

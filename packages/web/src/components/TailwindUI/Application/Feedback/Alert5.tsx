import { ExclamationIcon } from '@heroicons/react/solid'
import type { FC } from 'react'

interface Alert5Props {}

export const config = {
  title: 'With accent border'
}

const Alert5: FC<Alert5Props> = () => {
  return (
    <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationIcon
            className="h-5 w-5 text-yellow-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-700">
            You have no credits left.{' '}
            <a
              href="#"
              className="font-medium text-yellow-700 underline hover:text-yellow-600"
            >
              Upgrade your account to add more credits.
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Alert5

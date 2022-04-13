/* eslint-disable jsx-a11y/label-has-associated-control */

import type { FC } from 'react'

/* eslint-disable prettier/prettier */
const notificationMethods = [
  { id: 'email', title: 'Email' },
  { id: 'sms', title: 'Phone (SMS)' },
  { id: 'push', title: 'Push notification' }
]
export const config = {
  title: 'Simple inline list'
}

interface RadioGroup2Props {}

const RadioGroup2: FC<RadioGroup2Props> = () => {
  return (
    <div>
      <label className="text-base font-medium text-gray-900">
        Notifications
      </label>
      <p className="text-sm leading-5 text-gray-500">
        How do you prefer to receive notifications?
      </p>
      <fieldset className="mt-4">
        <legend className="sr-only">Notification method</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
          {notificationMethods.map(notificationMethod => (
            <div key={notificationMethod.id} className="flex items-center">
              <input
                id={notificationMethod.id}
                name="notification-method"
                type="radio"
                defaultChecked={notificationMethod.id === 'email'}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor={notificationMethod.id}
                className="ml-3 block text-sm font-medium text-gray-700"
              >
                {notificationMethod.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  )
}
export default RadioGroup2

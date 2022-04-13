/* eslint-disable prettier/prettier */
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'
import { useState } from 'react'
import type { FC } from 'react'
const settings = [
  {
    name: 'Public access',
    description: 'This project would be available to anyone who has the link'
  },
  {
    name: 'Private to Project Members',
    description: 'Only members of this project would be able to access'
  },
  {
    name: 'Private to you',
    description: 'You are the only one able to access this project'
  }
]

export const config = {
  title: 'Simple native'
}

interface RadioGroup12Props {}

const RadioGroup12: FC<RadioGroup12Props> = () => {
  const [selected, setSelected] = useState(settings[0])

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="sr-only">Privacy setting</RadioGroup.Label>
      <div className="-space-y-px rounded-md bg-white">
        {settings.map((setting, settingIdx) => (
          <RadioGroup.Option
            key={setting.name}
            value={setting}
            className={({ checked }) =>
              clsx(
                settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                settingIdx === settings.length - 1
                  ? 'rounded-bl-md rounded-br-md'
                  : '',
                checked
                  ? 'z-10 border-indigo-200 bg-indigo-50'
                  : 'border-gray-200',
                'relative flex cursor-pointer border p-4 focus:outline-none'
              )
            }
          >
            {({ active, checked }) => (
              <>
                <span
                  className={clsx(
                    checked
                      ? 'border-transparent bg-indigo-600'
                      : 'border-gray-300 bg-white',
                    active ? 'ring-2 ring-indigo-500 ring-offset-2' : '',
                    'mt-0.5 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full border'
                  )}
                  aria-hidden="true"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                <div className="ml-3 flex flex-col">
                  <RadioGroup.Label
                    as="span"
                    className={clsx(
                      checked ? 'text-indigo-900' : 'text-gray-900',
                      'block text-sm font-medium'
                    )}
                  >
                    {setting.name}
                  </RadioGroup.Label>
                  <RadioGroup.Description
                    as="span"
                    className={clsx(
                      checked ? 'text-indigo-700' : 'text-gray-500',
                      'block text-sm'
                    )}
                  >
                    {setting.description}
                  </RadioGroup.Description>
                </div>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
export default RadioGroup12

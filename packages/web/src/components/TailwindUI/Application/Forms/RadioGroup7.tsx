/* eslint-disable prettier/prettier */
/* This example requires Tailwind CSS v2.0+ */
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'
import type { FC } from 'react'
import { useState } from 'react'
const colors = [
  { name: 'Pink', bgColor: 'bg-pink-500', selectedColor: 'ring-pink-500' },
  {
    name: 'Purple',
    bgColor: 'bg-purple-500',
    selectedColor: 'ring-purple-500'
  },
  { name: 'Blue', bgColor: 'bg-blue-500', selectedColor: 'ring-blue-500' },
  { name: 'Green', bgColor: 'bg-green-500', selectedColor: 'ring-green-500' },
  { name: 'Yellow', bgColor: 'bg-yellow-500', selectedColor: 'ring-yellow-500' }
]

export const config = {
  title: 'cards'
}

interface RadioGroup7Props {}

const RadioGroup7: FC<RadioGroup7Props> = () => {
  const [selectedColor, setSelectedColor] = useState(colors[1])

  return (
    <RadioGroup value={selectedColor} onChange={setSelectedColor}>
      <RadioGroup.Label className="block text-sm font-medium text-gray-700">
        Choose a label color
      </RadioGroup.Label>
      <div className="mt-4 flex items-center space-x-3">
        {colors.map(color => (
          <RadioGroup.Option
            key={color.name}
            value={color}
            className={({ active, checked }) =>
              clsx(
                color.selectedColor,
                active && checked ? 'ring ring-offset-1' : '',
                !active && checked ? 'ring-2' : '',
                'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
              )
            }
          >
            <RadioGroup.Label as="p" className="sr-only">
              {color.name}
            </RadioGroup.Label>
            <span
              aria-hidden="true"
              className={clsx(
                color.bgColor,
                'h-8 w-8 rounded-full border border-black border-opacity-10'
              )}
            />
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
export default RadioGroup7

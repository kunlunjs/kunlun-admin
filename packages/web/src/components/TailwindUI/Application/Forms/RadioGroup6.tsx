import type { FC } from 'react'

/* eslint-disable prettier/prettier */
const sides = [
  { id: null, name: 'None' },
  { id: 1, name: 'Baked beans' },
  { id: 2, name: 'Coleslaw' },
  { id: 3, name: 'French fries' },
  { id: 4, name: 'Garden salad' },
  { id: 5, name: 'Mashed potatoes' }
]
export const config = {
  title: 'Color picker'
}

interface RadioGroup6Props {}

const RadioGroup6: FC<RadioGroup6Props> = () => {
  return (
    <fieldset>
      <legend className="text-lg font-medium text-gray-900">Side</legend>
      <div className="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
        {sides.map((side, sideIdx) => (
          <div key={sideIdx} className="relative flex items-start py-4">
            <div className="min-w-0 flex-1 text-sm">
              <label
                htmlFor={`side-${side.id}`}
                className="select-none font-medium text-gray-700"
              >
                {side.name}
              </label>
            </div>
            <div className="ml-3 flex h-5 items-center">
              <input
                id={`side-${side.id}`}
                name="plan"
                type="radio"
                defaultChecked={side.id === null}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  )
}
export default RadioGroup6

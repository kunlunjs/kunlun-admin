/* eslint-disable prettier/prettier */
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'
import type { FC } from 'react'
import { useState } from 'react'

const plans = [
  {
    name: 'Startup',
    priceMonthly: 29,
    priceYearly: 290,
    limit: 'Up to 5 active job postings'
  },
  {
    name: 'Business',
    priceMonthly: 99,
    priceYearly: 990,
    limit: 'Up to 25 active job postings'
  },
  {
    name: 'Enterprise',
    priceMonthly: 249,
    priceYearly: 2490,
    limit: 'Unlimited active job postings'
  }
]

export const config = {
  title: 'Simple table'
}

interface RadioGroup11Props {}

const RadioGroup11: FC<RadioGroup11Props> = () => {
  const [selected, setSelected] = useState(plans[0])

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="sr-only">Pricing plans</RadioGroup.Label>
      <div className="relative -space-y-px rounded-md bg-white">
        {plans.map((plan, planIdx) => (
          <RadioGroup.Option
            key={plan.name}
            value={plan}
            className={({ checked }) =>
              clsx(
                planIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                planIdx === plans.length - 1
                  ? 'rounded-bl-md rounded-br-md'
                  : '',
                checked
                  ? 'z-10 border-indigo-200 bg-indigo-50'
                  : 'border-gray-200',
                'relative flex cursor-pointer flex-col border p-4 focus:outline-none md:grid md:grid-cols-3 md:pl-4 md:pr-6'
              )
            }
          >
            {({ active, checked }) => (
              <>
                <div className="flex items-center text-sm">
                  <span
                    className={clsx(
                      checked
                        ? 'border-transparent bg-indigo-600'
                        : 'border-gray-300 bg-white',
                      active ? 'ring-2 ring-indigo-500 ring-offset-2' : '',
                      'flex h-4 w-4 items-center justify-center rounded-full border'
                    )}
                    aria-hidden="true"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                  <RadioGroup.Label
                    as="span"
                    className={clsx(
                      checked ? 'text-indigo-900' : 'text-gray-900',
                      'ml-3 font-medium'
                    )}
                  >
                    {plan.name}
                  </RadioGroup.Label>
                </div>
                <RadioGroup.Description className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
                  <span
                    className={clsx(
                      checked ? 'text-indigo-900' : 'text-gray-900',
                      'font-medium'
                    )}
                  >
                    ${plan.priceMonthly} / mo
                  </span>{' '}
                  <span
                    className={checked ? 'text-indigo-700' : 'text-gray-500'}
                  >
                    (${plan.priceYearly} / yr)
                  </span>
                </RadioGroup.Description>
                <RadioGroup.Description
                  className={clsx(
                    checked ? 'text-indigo-700' : 'text-gray-500',
                    'ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right'
                  )}
                >
                  {plan.limit}
                </RadioGroup.Description>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
export default RadioGroup11

import { CheckIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import type { FC } from 'react'

interface Step7Props {}
const steps = [
  {
    name: 'Create account',
    description: 'Vitae sed mi luctus laoreet.',
    href: '#',
    status: 'complete'
  },
  {
    name: 'Profile information',
    description: 'Cursus semper viverra facilisis et et some more.',
    href: '#',
    status: 'current'
  },
  {
    name: 'Business information',
    description: 'Penatibus eu quis ante.',
    href: '#',
    status: 'upcoming'
  },
  {
    name: 'Theme',
    description: 'Faucibus nec enim leo et.',
    href: '#',
    status: 'upcoming'
  },
  {
    name: 'Preview',
    description: 'Iusto et officia maiores porro ad non quas.',
    href: '#',
    status: 'upcoming'
  }
]

const Step7: FC<Step7Props> = () => {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="overflow-hidden">
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={clsx(
              stepIdx !== steps.length - 1 ? 'pb-10' : '',
              'relative'
            )}
          >
            {step.status === 'complete' ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div
                    className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-indigo-600"
                    aria-hidden="true"
                  />
                ) : null}
                <a href={step.href} className="relative flex items-start group">
                  <span className="flex items-center h-9">
                    <span className="relative z-10 flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                      <CheckIcon
                        className="w-5 h-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                  <span className="flex flex-col min-w-0 ml-4">
                    <span className="text-xs font-semibold tracking-wide uppercase">
                      {step.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {step.description}
                    </span>
                  </span>
                </a>
              </>
            ) : step.status === 'current' ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div
                    className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                    aria-hidden="true"
                  />
                ) : null}
                <a
                  href={step.href}
                  className="relative flex items-start group"
                  aria-current="step"
                >
                  <span className="flex items-center h-9" aria-hidden="true">
                    <span className="relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 border-indigo-600 rounded-full">
                      <span className="h-2.5 w-2.5 bg-indigo-600 rounded-full" />
                    </span>
                  </span>
                  <span className="flex flex-col min-w-0 ml-4">
                    <span className="text-xs font-semibold tracking-wide text-indigo-600 uppercase">
                      {step.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {step.description}
                    </span>
                  </span>
                </a>
              </>
            ) : (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div
                    className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                    aria-hidden="true"
                  />
                ) : null}
                <a href={step.href} className="relative flex items-start group">
                  <span className="flex items-center h-9" aria-hidden="true">
                    <span className="relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                      <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" />
                    </span>
                  </span>
                  <span className="flex flex-col min-w-0 ml-4">
                    <span className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                      {step.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {step.description}
                    </span>
                  </span>
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
export default Step7

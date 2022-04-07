import type { FC } from 'react'

interface Step1Props {}
const steps = [
  { id: 'Step 1', name: 'Job details', href: '#', status: 'complete' },
  { id: 'Step 2', name: 'Application form', href: '#', status: 'current' },
  { id: 'Step 3', name: 'Preview', href: '#', status: 'upcoming' }
]

const Step1: FC<Step1Props> = () => {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="space-y-4 md:flex md:space-y-0 md:space-x-8">
        {steps.map(step => (
          <li key={step.name} className="md:flex-1">
            {step.status === 'complete' ? (
              <a
                href={step.href}
                className="flex flex-col py-2 pl-4 border-l-4 border-indigo-600 group hover:border-indigo-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
              >
                <span className="text-xs font-semibold tracking-wide text-indigo-600 uppercase group-hover:text-indigo-800">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </a>
            ) : step.status === 'current' ? (
              <a
                href={step.href}
                className="flex flex-col py-2 pl-4 border-l-4 border-indigo-600 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
                aria-current="step"
              >
                <span className="text-xs font-semibold tracking-wide text-indigo-600 uppercase">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </a>
            ) : (
              <a
                href={step.href}
                className="flex flex-col py-2 pl-4 border-l-4 border-gray-200 group hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
              >
                <span className="text-xs font-semibold tracking-wide text-gray-500 uppercase group-hover:text-gray-700">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
export default Step1

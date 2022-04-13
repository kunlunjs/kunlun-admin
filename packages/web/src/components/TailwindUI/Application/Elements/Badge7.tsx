import type { FC } from 'react'
import { badgeCloseSvg } from '@/components/svgs'

interface Badge7Props {}

export const config = {
  title: 'Badge with remove button'
}

const Badge7: FC<Badge7Props> = () => {
  return (
    <>
      <span className="inline-flex items-center rounded-full bg-indigo-100 py-0.5 pl-2 pr-0.5 text-xs font-medium text-indigo-700">
        Small
        <button
          type="button"
          className="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:bg-indigo-500 focus:text-white focus:outline-none"
        >
          <span className="sr-only">Remove small option</span>
          {badgeCloseSvg}
        </button>
      </span>
      <span className="inline-flex items-center rounded-full bg-indigo-100 py-0.5 pl-2.5 pr-1 text-sm font-medium text-indigo-700">
        Large
        <button
          type="button"
          className="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:bg-indigo-500 focus:text-white focus:outline-none"
        >
          <span className="sr-only">Remove large option</span>
          {badgeCloseSvg}
        </button>
      </span>
    </>
  )
}

export default Badge7

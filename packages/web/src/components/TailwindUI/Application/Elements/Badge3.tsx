import type { FC } from 'react'
import { badgeDotSvg } from '@/components/svgs'

interface Badge3Props {}

export const config = {
  title: 'Badge with dot'
}

const Badge3: FC<Badge3Props> = () => {
  return (
    <>
      <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
        {badgeDotSvg}
        Small
      </span>
      <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-sm font-medium text-indigo-800">
        {badgeDotSvg}
        Large
      </span>
    </>
  )
}

export default Badge3

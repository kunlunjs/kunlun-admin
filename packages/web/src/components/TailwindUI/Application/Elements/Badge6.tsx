import type { FC } from 'react'
import { badgeDotSvg } from '@/components/svgs'

interface Badge6Props {}

export const config = {
  title: 'Rounded badges with dot'
}

const Badge6: FC<Badge6Props> = () => {
  return (
    <>
      <span className="inline-flex items-center rounded bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-800">
        {badgeDotSvg}
        Small
      </span>
      <span className="inline-flex items-center rounded-md bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800">
        {badgeDotSvg}
        Large
      </span>
    </>
  )
}

export default Badge6

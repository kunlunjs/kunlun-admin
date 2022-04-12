import type { FC } from 'react'

interface SectionHeading9Props {}
export const config = {
  title: 'With label'
}

const SectionHeading9: FC<SectionHeading9Props> = () => {
  return (
    <div className="border-b border-gray-200 pb-5">
      <div className="-mt-2 -ml-2 flex flex-wrap items-baseline">
        <h3 className="mt-2 ml-2 text-lg font-medium leading-6 text-gray-900">
          Job Postings
        </h3>
        <p className="mt-1 ml-2 truncate text-sm text-gray-500">
          in Engineering
        </p>
      </div>
    </div>
  )
}
export default SectionHeading9

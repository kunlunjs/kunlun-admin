import type { FC } from 'react'

interface SectionHeading1Props {}
export const config = {
  title: 'Simple'
}

const SectionHeading1: FC<SectionHeading1Props> = () => {
  return (
    <div className="border-b border-gray-200 pb-5">
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        Job Postings
      </h3>
    </div>
  )
}
export default SectionHeading1

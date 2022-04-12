import type { FC } from 'react'

interface SectionHeading2Props {}
export const config = {
  title: 'With description'
}

const SectionHeading2: FC<SectionHeading2Props> = () => {
  return (
    <div className="border-b border-gray-200 pb-5">
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        Job Postings
      </h3>
      <p className="mt-2 max-w-4xl text-sm text-gray-500">
        Workcation is a property rental website. Etiam ullamcorper massa viverra
        consequat, consectetur id nulla tempus. Fringilla egestas justo massa
        purus sagittis malesuada.
      </p>
    </div>
  )
}
export default SectionHeading2

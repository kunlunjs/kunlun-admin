/* eslint-disable prettier/prettier */
import type { FC } from 'react'
interface Dividers5Props {}

export const config = {
  title: 'With title on left'
}
const Dividers5: FC<Dividers5Props> = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-start">
        <span className="bg-white pr-3 text-lg font-medium text-gray-900">
          Projects
        </span>
      </div>
    </div>
  )
}
export default Dividers5

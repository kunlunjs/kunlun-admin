import type { FC } from 'react'
interface Dividers1Props {}

const Dividers1: FC<Dividers1Props> = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="px-2 text-sm text-gray-500 bg-white">Continue</span>
      </div>
    </div>
  )
}
export default Dividers1

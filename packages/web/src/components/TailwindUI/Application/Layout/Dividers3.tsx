import type { FC } from 'react'
interface Dividers3Props {}

const Dividers3: FC<Dividers3Props> = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-start">
        <span className="pr-2 text-sm text-gray-500 bg-white">Continue</span>
      </div>
    </div>
  )
}
export default Dividers3

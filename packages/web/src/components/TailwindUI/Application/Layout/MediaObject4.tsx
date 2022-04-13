/* eslint-disable prettier/prettier */
import type { FC } from 'react'

interface MediaObject4Props {}

export const config = {
  title: 'Stretched to fit'
}
const MediaObject4: FC<MediaObject4Props> = () => {
  return (
    <div className="flex">
      <div className="mr-4 flex-shrink-0">
        <svg
          className="h-full w-16 border border-gray-300 bg-white text-gray-300"
          preserveAspectRatio="none"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <path
            vectorEffect="non-scaling-stroke"
            strokeWidth={1}
            d="M0 0l200 200M0 200L200 0"
          />
        </svg>
      </div>
      <div>
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
          expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
        </p>
      </div>
    </div>
  )
}
export default MediaObject4

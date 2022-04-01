import type { FC } from 'react'

interface MediaObject3Props {}

const MediaObject3: FC<MediaObject3Props> = () => {
  return (
    <div className="flex">
      <div className="self-end flex-shrink-0 mr-4">
        <svg
          className="w-16 h-16 text-gray-300 bg-white border border-gray-300"
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
export default MediaObject3

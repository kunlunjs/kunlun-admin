import type { FC } from 'react'

interface Avatar8Props {}

export const config = {
  title: 'Circular avatars with placeholder initials'
}

const Avatar8: FC<Avatar8Props> = () => {
  return (
    <>
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-500">
        <span className="text-xs font-medium leading-none text-white">TW</span>
      </span>

      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-500">
        <span className="text-sm font-medium leading-none text-white">TW</span>
      </span>

      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500">
        <span className="font-medium leading-none text-white">TW</span>
      </span>

      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-500">
        <span className="text-lg font-medium leading-none text-white">TW</span>
      </span>

      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gray-500">
        <span className="text-xl font-medium leading-none text-white">TW</span>
      </span>
    </>
  )
}

export default Avatar8

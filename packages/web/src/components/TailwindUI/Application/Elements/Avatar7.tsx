import type { FC } from 'react'
import { avatarSvg } from '@/components/svgs'

interface Avatar7Props {}

export const config = {
  title: 'Circular avatars with placeholder icon'
}

const Avatar7: FC<Avatar7Props> = () => {
  return (
    <>
      <span className="inline-block h-6 w-6 overflow-hidden rounded-full bg-gray-100">
        {avatarSvg}
      </span>
      <span className="inline-block h-8 w-8 overflow-hidden rounded-full bg-gray-100">
        {avatarSvg}
      </span>
      <span className="inline-block h-10 w-10 overflow-hidden rounded-full bg-gray-100">
        {avatarSvg}
      </span>
      <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
        {avatarSvg}
      </span>
      <span className="inline-block h-14 w-14 overflow-hidden rounded-full bg-gray-100">
        {avatarSvg}
      </span>
    </>
  )
}

export default Avatar7

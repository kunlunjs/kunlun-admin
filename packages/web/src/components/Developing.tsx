import type { FC } from 'react'

interface DevelopingProps {}

export const Developing: FC<DevelopingProps> = ({ children }) => (
  <div
    className="flex items-center justify-center text-xl text-orange-400"
    style={{ height: '100vh' }}
  >
    {children || '开发中，敬请期待...'}
  </div>
)

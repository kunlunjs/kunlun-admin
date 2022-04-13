import type { FC } from 'react'

interface Containers3Props {}

export const config = {
  title:
    'Full-width on mobile, constrained to breakpoint with padded content above mobile'
}
const Containers3: FC<Containers3Props> = () => {
  return (
    <div className="container mx-auto sm:px-6 lg:px-8">
      {/* Content goes here */}
    </div>
  )
}
export default Containers3

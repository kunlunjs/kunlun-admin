import { Transition } from '@headlessui/react'
import type { FC } from 'react'
import { Fragment } from 'react'

interface KLTransitionChildProps {
  isLinear?: boolean
  isEaseInOut?: boolean
}

const normal = {
  as: Fragment,
  enter: 'ease-out duration-300',
  enterFrom: 'opacity-0',
  enterTo: 'opacity-100',
  leave: 'ease-in duration-200',
  leaveFrom: 'opacity-100',
  leaveTo: 'opacity-0'
}
const linear = {
  as: Fragment,
  enter: 'transition-opacity ease-linear duration-300',
  enterFrom: 'opacity-0',
  enterTo: 'opacity-100',
  leave: 'transition-opacity ease-linear duration-300',
  leaveFrom: 'opacity-100',
  leaveTo: 'opacity-0'
}
const easeInOut = {
  as: Fragment,
  enter: 'transition ease-in-out duration-300 transform',
  enterFrom: '-translate-x-full',
  enterTo: 'translate-x-0',
  leave: 'transition ease-in-out duration-300 transform',
  leaveFrom: 'translate-x-0',
  leaveTo: '-translate-x-full'
}

export const KLTransitionChild: FC<KLTransitionChildProps> = ({
  isLinear = false,
  isEaseInOut = false,
  children
}) => {
  let props = normal
  if (isLinear) {
    props = linear
  }
  if (isEaseInOut) {
    props = easeInOut
  }
  return <Transition.Child {...props}>{children}</Transition.Child>
}

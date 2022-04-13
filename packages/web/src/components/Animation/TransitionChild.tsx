import { Transition } from '@headlessui/react'
import type { FC } from 'react'
import { Fragment } from 'react'

interface KLTransitionChildProps {
  isEaseLinear?: boolean
  isEaseInOutOpacity?: boolean
  isEaseInOutTranslateX?: boolean
  isEaseOutEaseInTranslateY?: boolean
  isEaseOutEaseInOpacityScale?: boolean
}

const easeOutEaseIn = {
  as: Fragment,
  enter: 'ease-out duration-300',
  enterFrom: 'opacity-0',
  enterTo: 'opacity-100',
  leave: 'ease-in duration-200',
  leaveFrom: 'opacity-100',
  leaveTo: 'opacity-0'
}
const easeLinear = {
  as: Fragment,
  enter: 'transition-opacity ease-linear duration-300',
  enterFrom: 'opacity-0',
  enterTo: 'opacity-100',
  leave: 'transition-opacity ease-linear duration-300',
  leaveFrom: 'opacity-100',
  leaveTo: 'opacity-0'
}
const easeInOutOpacity = {
  as: Fragment,
  enter: 'ease-in-out duration-300',
  enterFrom: 'opacity-0',
  enterTo: 'opacity-100',
  leave: 'ease-in-out duration-300',
  leaveFrom: 'opacity-100',
  leaveTo: 'opacity-0'
}
const easeInOutTranslateX = {
  as: Fragment,
  enter: 'transition ease-in-out duration-300 transform',
  enterFrom: '-translate-x-full',
  enterTo: 'translate-x-0',
  leave: 'transition ease-in-out duration-300 transform',
  leaveFrom: 'translate-x-0',
  leaveTo: '-translate-x-full'
}
const easeOutEaseInOpacityScale = {
  as: Fragment,
  enter: 'ease-out duration-300',
  enterFrom: 'opacity-0 scale-95',
  enterTo: 'opacity-100 scale-100',
  leave: 'ease-in duration-200',
  leaveFrom: 'opacity-100 scale-100',
  leaveTo: 'opacity-0 scale-95'
}
const easeOutEaseInTranslateY = {
  as: Fragment,
  enter: 'ease-out duration-300',
  enterFrom: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
  enterTo: 'opacity-100 translate-y-0 sm:scale-100',
  leave: 'ease-in duration-200',
  leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
  leaveTo: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
}

export const KLTransitionChild: FC<KLTransitionChildProps> = ({
  isEaseLinear,
  isEaseInOutOpacity,
  isEaseInOutTranslateX,
  isEaseOutEaseInTranslateY,
  isEaseOutEaseInOpacityScale,
  children
}) => {
  let props = easeOutEaseIn
  if (isEaseLinear) {
    props = easeLinear
  }
  if (isEaseInOutOpacity) {
    props = easeInOutOpacity
  }
  if (isEaseInOutTranslateX) {
    props = easeInOutTranslateX
  }
  if (isEaseOutEaseInTranslateY) {
    props = easeOutEaseInTranslateY
  }
  if (isEaseOutEaseInOpacityScale) {
    props = easeOutEaseInOpacityScale
  }
  return <Transition.Child {...props}>{children}</Transition.Child>
}

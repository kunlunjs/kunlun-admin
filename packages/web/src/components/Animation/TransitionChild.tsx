import { Transition } from '@headlessui/react'
import type { FC } from 'react'
import { Fragment } from 'react'

interface KLTransitionChildProps {
  isLinear?: boolean
}

export const KLTransitionChild: FC<KLTransitionChildProps> = ({
  isLinear = false,
  children
}) => {
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
  const props = isLinear ? linear : normal
  return <Transition.Child {...props}>{children}</Transition.Child>
}

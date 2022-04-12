import type { CSSProperties } from 'react'

export function selectBackgroundColor(
  isActive: boolean,
  canDrop: boolean
): CSSProperties['backgroundColor'] {
  if (isActive) {
    return 'lightgreen'
  }
  if (canDrop) {
    return 'lightcyan'
  }
  return 'white'
}

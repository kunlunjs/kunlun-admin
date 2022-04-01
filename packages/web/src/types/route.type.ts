import type { ReactElement } from 'react'

export type RouteItem = {
  path: string
  element?: ReactElement | string
  factory?: {
    type: 'Table' | 'Description'
    config?: any
  }
  children?: RouteItem[]
}
export type RouteItems = RouteItem[]

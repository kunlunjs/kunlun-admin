import type { ReactElement } from 'react'

export type RouteItem = {
  path: string
  element?: ReactElement | string
  factory?: {
    type:
      | 'Chart'
      | 'Description'
      | 'Document'
      | 'File'
      | 'Form'
      | 'Image'
      | 'Process'
      | 'Table'
    config?: any
  }
  children?: RouteItem[]
}
export type RouteItems = RouteItem[]

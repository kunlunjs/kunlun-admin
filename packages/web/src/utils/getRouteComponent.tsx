import loadable from '@loadable/component'
import { isElement, isValidElementType } from 'react-is'
import type { RouteItem } from '@/types'

export function getRouteComponent({ path, element, factory }: RouteItem) {
  // match example: { element: <Home /> }
  if (isElement(element)) {
    return {
      path,
      element
    }
  }
  // match example: { element: 'KLTableFactory' }
  if (typeof element === 'string' && /^KL[a-zA-Z]+Factory$/.test(element)) {
    const Factory = loadable(
      () =>
        import(
          /* @vite-ignore */ /* webpackChunkName: "[request][index]" */ `@/components/Factories/${element}`
        )
    )
    return isValidElementType(Factory)
      ? {
          path,
          element: <Factory />
        }
      : { path, element: <div>开发中...</div> }
  }
  // match exampel: factory: { type: 'KLTableFactory' }
  if (!element && factory?.type) {
    const Factory = loadable(
      () =>
        import(
          /* @vite-ignore */ /* webpackChunkName: "[request][index]" */ `@/components/Factories/KL${factory.type}Factory`
        )
    )
    return isValidElementType(Factory)
      ? {
          path,
          element: <Factory />
        }
      : { path, element: <div>开发中...</div> }
  }
  if (!element && !factory) {
    // 查找 features 目录，'/datas/[id]/' -> datas/[id]
    const p = path.replace(/^\//, '').replace(/\/$/, '')
    const Component = loadable(
      () =>
        import(
          /* @vite-ignore */ /* webpackChunkName: "[request][index]" */ `@/features/${p}`
        )
    )
    return isValidElementType(Component)
      ? {
          path,
          element: <Component />
        }
      : { path, element: <div>开发中...</div> }
  }
  return null
}

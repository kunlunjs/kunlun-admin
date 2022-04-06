import loadable from '@loadable/component'
import { isElement, isValidElementType } from 'react-is'
import type { RouteItem, RouteItems } from '@/types'

// ['./KLChartFactory.tsx', ...]
const Factories = require
  .context('../features/factories', false, /KL[a-zA-Z]+Factory\.tsx/)
  .keys()
// ['Chart', ...]
export const FactoryNames = Factories.map(
  i => (i.match(/KL([a-zA-Z]+)Factory\.tsx/) as string[])[1]
)
// ['KLChartFactory', ...]
const FactoryFileNames = Factories.map(i => i.slice(2, -4))

export const Developing = () => (
  <div
    className="flex items-center justify-center text-xl text-orange-400"
    style={{ height: '100vh' }}
  >
    开发中，敬请期待...
  </div>
)

/**
 *
 * @see https://www.npmjs.com/package/react-is
 */
export function getRouteItem({ path, element, factory }: RouteItem) {
  // match example: { element: <Home /> }
  if (isElement(element)) {
    return {
      path,
      element
    }
  }
  // match example: { element: 'KLTableFactory' }
  if (typeof element === 'string' && FactoryFileNames.includes(element)) {
    const Factory = loadable(
      () =>
        import(
          /* @vite-ignore */ /* webpackChunkName: "[request][index]" */ `@/features/factories/${element}`
        )
    )
    return isValidElementType(Factory)
      ? {
          path,
          element: <Factory />
        }
      : { path, element: <Developing /> }
  }
  // match exampel: { factory: { type: 'Table' } }
  if (!element && FactoryNames.includes(factory?.type as string)) {
    const Factory = loadable(
      () =>
        import(
          /* @vite-ignore */ /* webpackChunkName: "[request]" */ `@/features/factories/KL${factory?.type}Factory`
        )
    )
    return isValidElementType(Factory)
      ? {
          path,
          element: <Factory />
        }
      : { path, element: <Developing /> }
  }
  if (!element && !factory) {
    // 查找 features 目录，'/datas/[id]/' -> datas/[id]
    const p = path.replace(/^\//, '').replace(/\/$/, '')
    const Component = loadable(
      () =>
        import(
          /* @vite-ignore */ /* webpackChunkName: "[request]" */ `@/features/${p}`
        )
    )
    return isValidElementType(Component)
      ? {
          path,
          element: <Component />
        }
      : { path, element: <Developing /> }
  }
  return null
}

export const getRoutes = (items: RouteItems): RouteItems => {
  return items
    .map(i => {
      if (i.children?.length) {
        const childs = i.children
          .map(j => {
            return getRouteItem(j)
          })
          .filter(Boolean)
        return { ...i, children: childs }
      }
      return getRouteItem(i)
    })
    .filter(Boolean) as RouteItems
}

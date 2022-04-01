import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Spinner } from '@/components/Elements'
import { BasicLayout } from '@/components/Layout'
import type { RouteItems } from '@/types'
import { lazyImport } from '@/utils/lazyImport'

const { AuthRoutes } = lazyImport(
  () =>
    import(/* @vite-ignore */ /* webpackChunkName: "auth" */ '@/features/auth'),
  'AuthRoutes'
)
const { KLTableFactory } = lazyImport(
  () =>
    import(
      /* @vite-ignore */ /* webpackChunkName: "KLTableFactory" */ '@/features/factories/KLTableFactory'
    ),
  'KLTableFactory'
)
const { KLDescriptionFactory } = lazyImport(
  () =>
    import(
      /* @vite-ignore */ /* webpackChunkName: "KLDescriptionFactory" */ '@/features/factories/KLDescriptionFactory'
    ),
  'KLDescriptionFactory'
)
const { Templates } = lazyImport(
  () =>
    import(
      /* @vite-ignore */ /* webpackChunkName: "templates" */ '@/features/templates'
    ),
  'Templates'
)
const { Assemble } = lazyImport(
  () =>
    import(
      /* @vite-ignore */ /* webpackChunkName: "assemble" */ '@/features/assemble'
    ),
  'Assemble'
)
const { Charts } = lazyImport(
  () =>
    import(
      /* @vite-ignore */ /* webpackChunkName: "charts" */ '@/features/charts'
    ),
  'Charts'
)
const { Datas } = lazyImport(
  () =>
    import(
      /* @vite-ignore */ /* webpackChunkName: "datas" */ '@/features/datas'
    ),
  'Datas'
)
const { Icons } = lazyImport(
  () =>
    import(
      /* @vite-ignore */ /* webpackChunkName: "icons" */ '@/features/icons'
    ),
  'Icons'
)

const Layout = () => {
  return (
    <BasicLayout>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <Spinner size="xl" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </BasicLayout>
  )
}

export const publicRoutes: RouteItems = [
  {
    path: '/auth/*',
    element: <AuthRoutes />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'datas',
        element: <Datas />
      },
      {
        path: 'icons',
        element: <Icons />
      },
      {
        path: 'charts',
        element: <Charts />
      },
      {
        path: 'assemble',
        element: <Assemble />
      },
      /* 渲染工厂 */
      {
        path: '/factories/table',
        element: <KLTableFactory />
        // or element: 'KLTableFactory'
        // factory: {
        //   type: 'Table'
        // }
      },
      {
        path: '/factories/description',
        element: <KLDescriptionFactory />
        // factory: {
        //   type: 'Description'
        // }
      }
    ]
  },
  /* 组件/模板工厂 */
  {
    path: 'templates',
    element: <Templates />
  }
]

import { Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Spinner } from '@/components/Elements'
import { MainLayout } from '@/components/Layout'
import { lazyImport } from '@/utils/lazyImport'

const { DiscussionsRoutes } = lazyImport(
  () =>
    import(
      /* @vite-ignore */ /* webpackChunkName: "discussions" */ '@/features/discussions'
    ),
  'DiscussionsRoutes'
)
const { Dashboard } = lazyImport(
  () =>
    import(/* @vite-ignore */ /* webpackChunkName: "misc" */ '@/features/misc'),
  'Dashboard'
)
const { Profile } = lazyImport(
  () =>
    import(
      /* @vite-ignore */ /* webpackChunkName: "profile" */ '@/features/users'
    ),
  'Profile'
)
const { Users } = lazyImport(
  () =>
    import(
      /* @vite-ignore */ /* webpackChunkName: "users" */ '@/features/users'
    ),
  'Users'
)

const App = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <Spinner size="xl" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  )
}

export const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [
      { path: '/discussions/*', element: <DiscussionsRoutes /> },
      { path: '/users', element: <Users /> },
      { path: '/profile', element: <Profile /> },
      { path: '/', element: <Dashboard /> },
      { path: '*', element: <Navigate to="." /> }
    ]
  }
]

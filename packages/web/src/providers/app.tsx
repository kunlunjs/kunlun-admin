import type { ReactNode } from 'react'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter as Router } from 'react-router-dom'
import { Button, Spinner } from '@/components/Elements'
import { Notifications } from '@/components/Notifications/Notifications'
import { AuthProvider } from '@/lib/auth'
import { queryClient } from '@/lib/react-query'

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">发生了一些异常 :( </h2>
      <Button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        刷新
      </Button>
    </div>
  )
}

type AppProviderProps = {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Spinner size="xl" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            {process.env.NODE_ENV !== 'test' && (
              <ReactQueryDevtools position="bottom-right" />
            )}
            <Notifications />
            <AuthProvider>
              <Router>{children}</Router>
            </AuthProvider>
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </Suspense>
  )
}

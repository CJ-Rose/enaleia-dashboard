import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

export const Route = createRootRoute({
  component: RootComponent,
})

const queryClient = new QueryClient()

function RootComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-2 flex gap-2 text-lg">
        <Link
          to="/"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Enaleia
        </Link>{' '}
        <Link
          to="/locations"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Locations
        </Link>
        <Link
          to="/vessels"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Vessels
        </Link>
        <Link
          to="/about"
          activeProps={{
            className: 'font-bold',
          }}
        >
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </QueryClientProvider>
  )
}

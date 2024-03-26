import { Outlet, createRootRoute } from '@tanstack/react-router'

import NavBar from '../components/NavBar'

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar />
      <Outlet />
    </>
  ),
})

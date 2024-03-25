/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ContactImport } from './routes/Contact'
import { Route as AboutImport } from './routes/About'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const ContactRoute = ContactImport.update({
  path: '/Contact',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/About',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/About': {
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/Contact': {
      preLoaderRoute: typeof ContactImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AboutRoute,
  ContactRoute,
])

/* prettier-ignore-end */

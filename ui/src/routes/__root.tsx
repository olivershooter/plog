import { Outlet, createRootRoute } from '@tanstack/react-router'
import { styled } from 'styled-components'

import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import globalStyleVars from '../globalStyleVariables'

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar />
      <MainWrapperDiv>
      <Outlet />
      </MainWrapperDiv>
      <Footer />
    </>
  ),
})

const MainWrapperDiv = styled('main')({
  margin: 'auto',
  padding: '10px',
  maxWidth: globalStyleVars.maxPageWidth,
})
import { Link } from '@tanstack/react-router'
import { styled } from 'styled-components'

import Logo from '../../assets/react.svg'

const NavBar = () => {
  return (
    <TopBarWrapper>
    <NavLogoWrapper>
      <img alt='logo' src={Logo}/>
      </NavLogoWrapper>
      <StyledNavBar>
        <NavBarLinksUl>
          <NavBarButton>
            <NavBarLinkA to="/">Home</NavBarLinkA>
          </NavBarButton>
          <NavBarButton>
            <NavBarLinkA to="/about">About</NavBarLinkA>
          </NavBarButton>
          <NavBarButton>
            <NavBarLinkA to="/contact">Contact</NavBarLinkA>
          </NavBarButton>
        </NavBarLinksUl>
      </StyledNavBar>
    </TopBarWrapper>
  )
}

const TopBarWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  background: '#00000008',
  justifyContent: 'center',
})

const NavLogoWrapper = styled('div')({
  })

const StyledNavBar = styled('nav')({
  flexGrow: 1,
  maxWidth: '1100px',
})

const NavBarLinksUl = styled('ul')({
  display: 'flex',
  listStyleType: 'none',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 0,
  margin: 0,
})

const NavBarButton = styled('li')({
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center'
})

const NavBarLinkA = styled(Link)({
  textDecoration: 'none',
  color: '#000011',
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center',
    justifyContent: 'center',
  padding: '0.5rem 0.3rem',
  width: '100%',
  height: '2.2rem',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    background: '#00000010',
    transition: 'all 0.3s ease-in-out',
  },
})

export default NavBar

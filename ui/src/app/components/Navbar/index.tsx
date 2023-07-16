import React from 'react';
import { AppBar, CssBaseline, Toolbar, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <StyledLogo>Navbar</StyledLogo>
        <StyledDiv>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/mypage">My Page</StyledLink>
        </StyledDiv>
      </Toolbar>
    </AppBar>
  );
};

const StyledLogo = styled('div')({
  marginLeft: 10,
  display: 'flex',
});

const StyledDiv = styled('h2')({
  flexGrow: 1,
  cursor: 'pointer',
});

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'white',
  fontSize: '30px',
  marginLeft: 20,
  '&:hover': {
    color: 'black',
    borderBottom: '1px solid white',
  },
});

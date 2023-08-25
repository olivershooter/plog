import React from 'react';
import { AppBar, Avatar, CssBaseline, styled, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

// eslint-disable-next-line no-restricted-imports
import vitesvg from "../../assets/vite.svg";

const Navbar = () => {
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Avatar component={Link} to="/" src={vitesvg} sx={{marginLeft: 4, display: 'flex'}}/>
        <StyledDiv>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/mypage">My Page</StyledLink>
        </StyledDiv>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

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

import React from 'react';
import { AppBar, CssBaseline, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import './index.css';

export const Navbar = () => {
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <div className="Main navCont">
          <div className="navLogoCont">
            <h2>Navbar</h2>
          </div>
          <div className="navLinkCont">
            <a href="/" className="navLink">
              Home
            </a>
            <a href="/" className="navLink">
              About
            </a>
            <a href="/" className="navLink">
              Contact
            </a>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

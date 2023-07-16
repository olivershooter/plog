import React from 'react';
import { AppContainer } from './containers/AppContainer';
import Router from './routes/routes';
import { CopyrightBanner } from './components/CopyrightBanner';
import { styled } from '@mui/material';

function App() {
  return (
    <>
      <AppContainer />
      <Router />
      <footer>
        <CopyrightBanner />
      </footer>
    </>
  );
}

export default App;

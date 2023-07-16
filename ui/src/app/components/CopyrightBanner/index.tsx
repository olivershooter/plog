import React from 'react';
import { Typography, Link, styled } from '@mui/material';

export const CopyrightBanner = () => {
  return (
    <StyledFooter>
      <Typography variant="body2" color="textSecondary" align="center" sx={{ color: 'white' }}>
        {'Copyright Oliver & Dave© '}
        <Link color="inherit" href="https://plog.com/">
          https://plog.com/
        </Link>{' '}
        {new Date().getFullYear()}.
      </Typography>
    </StyledFooter>
  );
};

const StyledFooter = styled('div')({
  padding: '8px',
  width: '100%',
  backgroundColor: '#1976d2',
  marginTop: 'auto',
});

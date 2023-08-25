import React from 'react';
import { Link, styled, Typography } from '@mui/material';

const CopyrightBanner = () => {
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

export default CopyrightBanner;

const StyledFooter = styled('div')({
  padding: '8px',
  width: '100%',
  backgroundColor: '#1976d2',
});

import React from 'react';
import { Box } from '@mui/material';

export const InitialAnimation = () => {
  return (
    <Box
      sx={{
        display: 'block',
        position: 'fixed',
        width: '100vw',
        height: '100svh',
        bgcolor: 'primary.dark',
        top: 0,
        left: 0,
        zIndex: 20,
        overscrollBehavior: 'none',
      }}
    >
      <Box />
    </Box>
  );
};

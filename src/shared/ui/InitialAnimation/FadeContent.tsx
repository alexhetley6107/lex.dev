import React from 'react';
import { Box } from '@mui/material';

export const FadeContent = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 20,
        width: '100vw',
        height: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'primary.dark',
        overscrollBehavior: 'none',
        color: 'white',
      }}
    >
      ...LOADING...
    </Box>
  );
};

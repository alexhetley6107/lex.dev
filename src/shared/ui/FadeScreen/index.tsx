import React from 'react';
import { Box } from '@mui/material';

export const FadeScreen = () => {
  return (
    <Box
      className="fade_screen"
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
        transition: 'opacity 1s',
        color: 'white',
      }}
    >
      ...LOADING...
    </Box>
  );
};

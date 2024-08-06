import { Box } from '@mui/material';
import React, { FC, forwardRef, PropsWithChildren } from 'react';

export const ScreenBox = forwardRef<HTMLDivElement, PropsWithChildren>(({ children }, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        width: '100vw',
        height: '100svh',
        bgcolor: 'secondary.light',
        overflowX: 'hidden',
        overflowY: 'auto',
      }}
    >
      {children}
    </Box>
  );
});

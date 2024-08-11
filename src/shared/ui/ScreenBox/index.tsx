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
        '&::-webkit-scrollbar-thumb': {
          borderWidth: { xs: '3px', md: `5px` },
          borderStyle: 'solid',
          borderColor: 'secondary.light',
          backgroundColor: 'secondary.dark',
          borderRadius: '30px',
        },
        '&::-webkit-scrollbar': {
          width: { xs: '6px', md: '14px' },
        },
      }}
    >
      {children}
    </Box>
  );
});

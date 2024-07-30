import { Box, Paper } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';

// type Props = {};

export const ShadowBox: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Paper
      elevation={10}
      sx={{
        borderRadius: '20px',
        bgcolor: 'secondary.light',
        backgroundImage: 'none',
      }}
    >
      {children}
    </Paper>
  );
};

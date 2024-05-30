import { Box } from '@mui/material';
import { ReactNode } from 'react';

export const ScreenBox = ({ children }: { children: ReactNode }) => {
  return <Box sx={{ height: '100svh' }}>{children}</Box>;
};

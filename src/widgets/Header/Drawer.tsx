import React, { FC } from 'react';
import { DrawerProps, Drawer as MuiDrawer, Stack } from '@mui/material';

export const Drawer: FC<DrawerProps> = (props) => {
  return (
    <MuiDrawer anchor={'right'} {...props} sx={{ zIndex: 10 }}>
      <Stack sx={{ width: '100svw', height: '100svh', bgcolor: 'secondary.light' }}></Stack>
    </MuiDrawer>
  );
};

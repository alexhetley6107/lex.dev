import React, { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { HEADER_HEIGHT } from '@/shared/lib';
import { LogoTitle } from '@/shared/ui';

export const Header: FC = () => {
  return (
    <AppBar sx={{ height: HEADER_HEIGHT, bgcolor: 'secondary.light', boxShadow: 'none', p: '10px' }}>
      <LogoTitle />
    </AppBar>
  );
};

'use client';
import React from 'react';
import Typography from '@mui/material/Typography';
import { useToggleColorMode } from '@/shared/lib';

export const LogoTitle = () => {
  const toggleTheme = useToggleColorMode();

  return (
    <Typography onClick={toggleTheme} variant="h5" sx={{ fontWeight: 700, color: 'secondary.dark' }}>
      lex.dev
    </Typography>
  );
};

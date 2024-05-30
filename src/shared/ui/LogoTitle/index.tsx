'use client';
import React from 'react';
import Typography from '@mui/material/Typography';
import { useToggleColorMode } from '@/shared/lib';

const letters = ['l', 'e', 'x', '.', 'd', 'e', 'v'];

export const LogoTitle = () => {
  const toggleTheme = useToggleColorMode();

  return (
    <Typography
      onClick={toggleTheme}
      variant="h5"
      sx={{
        fontWeight: 700,
        span: {
          color: 'secondary.dark',
          transition: 'all 0.3s',
          fontSize: '24px',
          lineHeight: '24px',
        },
        '@media (hover: hover)': {
          'span:hover': {
            color: 'primary.main',
            fontSize: '34px',
            lineHeight: '24px',
          },
        },
      }}
    >
      {letters.map((l, i) => (
        <span key={i}>{l}</span>
      ))}
    </Typography>
  );
};

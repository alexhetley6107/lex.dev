import React, { FC } from 'react';
import Typography from '@mui/material/Typography';

import { Box, BoxProps } from '@mui/material';

const letters = ['l', 'e', 'x', '.', 'd', 'e', 'v'];

export const LogoTitle: FC<BoxProps> = ({ onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        '*': { textDecoration: 'none' },
        display: 'flex',
        alignItems: 'flex-start',
        width: '90px',
        cursor: 'pointer',
        fontWeight: 700,
        span: {
          display: 'block',
          color: 'secondary.dark',
          transition: 'all 0.3s',
          fontSize: '24px',
          lineHeight: '20px',
        },
        '@media (hover: hover)': {
          'span:hover': {
            color: 'primary.main',
            fontSize: '34px',
            lineHeight: '20px',
            transform: 'translateY(-6px)',
          },
        },
      }}
    >
      <>
        {letters.map((l, i) => (
          <span key={i}>{l}</span>
        ))}
      </>
    </Box>
  );
};

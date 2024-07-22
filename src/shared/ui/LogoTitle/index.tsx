import React, { FC } from 'react';
import Typography from '@mui/material/Typography';

import { Box, BoxProps } from '@mui/material';

const letters = ['l', 'e', 'x', '.', 'd', 'e', 'v'];

export const LogoTitle: FC<BoxProps> = ({ onClick }) => {
  return (
    <Box onClick={onClick} sx={{ '*': { textDecoration: 'none' } }}>
      <Typography
        variant="h5"
        sx={{
          cursor: 'pointer',
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
    </Box>
  );
};

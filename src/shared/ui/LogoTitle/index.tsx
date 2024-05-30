import React from 'react';
import Typography from '@mui/material/Typography';
import { ROUTE } from '@/shared/lib';
import Link from 'next/link';
import { Box } from '@mui/material';

const letters = ['l', 'e', 'x', '.', 'd', 'e', 'v'];

export const LogoTitle = () => {
  return (
    <Box sx={{ '*': { textDecoration: 'none' } }}>
      <Link href={ROUTE.HOME}>
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
      </Link>
    </Box>
  );
};

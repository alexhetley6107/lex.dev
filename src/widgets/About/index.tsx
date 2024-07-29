import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { ANCHOR } from '@/shared';

export const About: FC = () => {
  return (
    <section id={ANCHOR.ABOUT}>
      <Box sx={{ pt: '70px' }}>
        {[...new Array(10)].map((_, i) => (
          <Box key={i} sx={{ color: 'primary.main' }}>
            <Typography variant="h1" color="primary" sx={{}}>
              About
            </Typography>
            <h1>About</h1>
            <h1>Рассказ</h1>
          </Box>
        ))}
      </Box>
    </section>
  );
};

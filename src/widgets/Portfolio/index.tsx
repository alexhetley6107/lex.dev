import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { ANCHOR } from '@/shared';

export const Portfolio: FC = () => {
  return (
    <section id={ANCHOR.PORTFOLIO}>
      {[...new Array(10)].map((_, i) => (
        <Typography key={i} variant="h1" color="primary" sx={{}}>
          Portfolio
        </Typography>
      ))}
    </section>
  );
};

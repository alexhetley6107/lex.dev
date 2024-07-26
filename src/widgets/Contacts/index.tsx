import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { ANCHOR } from '@/shared';

export const Contacts: FC = () => {
  return (
    <section id={ANCHOR.CONTACTS}>
      {[...new Array(10)].map((_, i) => (
        <Typography key={i} variant="h1" color="primary" sx={{}}>
          Contacts
        </Typography>
      ))}
    </section>
  );
};

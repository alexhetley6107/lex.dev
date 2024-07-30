import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { ANCHOR } from '@/shared';
import { ShadowBox } from '@/shared/ui/ShadowBox';

export const Contacts: FC = () => {
  return (
    <section id={ANCHOR.CONTACTS}>
      <ShadowBox>
        {[...new Array(2)].map((_, i) => (
          <Typography key={i} variant="h1" color="primary" sx={{}}>
            Contacts
          </Typography>
        ))}
      </ShadowBox>

      {[...new Array(2)].map((_, i) => (
        <Typography key={i} variant="h1" color="primary" sx={{}}>
          Contacts
        </Typography>
      ))}
    </section>
  );
};

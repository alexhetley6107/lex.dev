import React, { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { ANCHOR, Text } from '@/shared';
import { Project } from './Project';

export const Portfolio: FC = () => {
  return (
    <section id={ANCHOR.PORTFOLIO} style={{ paddingTop: '60px' }}>
      <Text sx={{ fontSize: '36px' }}>
        My <span>Portfolio</span>
      </Text>
      <Stack gap="20px" sx={{ paddingTop: '10px', p: 0 }} component="ul">
        <Project />
        <Project />
        <Project />
      </Stack>
    </section>
  );
};

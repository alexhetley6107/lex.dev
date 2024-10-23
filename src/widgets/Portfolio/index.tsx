import React, { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { ANCHOR, Text } from '@/shared';
import { Project } from './Project';
import { projects } from './projects';

export const Portfolio: FC = () => {
  return (
    <Box component="section" id={ANCHOR.PORTFOLIO} sx={{ pt: '60px', mt: '-40px' }}>
      <Text sx={{ fontSize: { xs: '24px', sm: '36px' } }}>
        My <span>Portfolio</span>
      </Text>
      <Stack component="ul" sx={{ p: 0, gap: { xs: '10px', sm: '20px' } }}>
        {projects.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </Stack>
    </Box>
  );
};

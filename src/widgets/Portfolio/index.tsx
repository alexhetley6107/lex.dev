import React, { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { ANCHOR, Text } from '@/shared';
import { Project } from './Project';

export const Portfolio: FC = () => {
  return (
    <Box component="section" id={ANCHOR.PORTFOLIO} sx={{ pt: '60px', '@media (max-width: 600px)': { mt: '-40px' } }}>
      <Text sx={{ fontSize: '36px', '@media (max-width: 600px)': { fontSize: '24px' } }}>
        My <span>Portfolio</span>
      </Text>
      <Stack component="ul" sx={{ p: 0, gap: '20px', '@media (max-width: 600px)': { gap: '10px' } }}>
        <Project />
        <Project />
        <Project />
      </Stack>
    </Box>
  );
};

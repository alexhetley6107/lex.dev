import React, { FC } from 'react';
import { ANCHOR, Row } from '@/shared';
import { Box, Stack } from '@mui/material';
import { TextAnimation } from './TextAnimation';

export const About: FC = () => {
  return (
    <Box component="section" id={ANCHOR.ABOUT}>
      <Row sx={{ pt: '70px', height: 'calc(100svh - 60px)' }}>
        <Stack alignItems="flex-start" gap="50px">
          <TextAnimation />
        </Stack>
      </Row>
    </Box>
  );
};

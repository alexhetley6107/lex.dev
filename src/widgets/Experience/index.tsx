import React, { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { ANCHOR, Row, Text } from '@/shared';
import { JobItem } from './JobItem';

export const Experience: FC = () => {
  return (
    <Box component="section" id={ANCHOR.EXPERIENCE} sx={{ pt: '60px', '@media (max-width: 600px)': { pt: '20px' } }}>
      <Text sx={{ fontSize: '36px', '@media (max-width: 600px)': { fontSize: '24px' } }}>
        Work <span>Experience</span>
      </Text>
      <Row justifyContent="flex-start" alignItems="normal">
        <Stack
          sx={{
            gap: '20px',
            '@media (max-width: 600px)': { gap: '10px' },

            p: 0,
            flexGrow: 1,
          }}
          component="ul"
        >
          <JobItem />
          <JobItem />
          <JobItem last />
        </Stack>
      </Row>
    </Box>
  );
};

import React, { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { ANCHOR, Row, ScrollAnimateContainer, Text } from '@/shared';
import { JobItem } from './JobItem';
import { jobs } from './jobs';

export const Experience: FC = () => {
  return (
    <Box component="section" id={ANCHOR.EXPERIENCE} sx={{ pt: '60px', mt: '-40px' }}>
      <ScrollAnimateContainer>
        <Text sx={{ fontSize: { xs: '24px', sm: '36px' } }}>
          Work <span>Experience</span>
        </Text>
      </ScrollAnimateContainer>
      <Row justifyContent="flex-start" alignItems="normal">
        <Stack
          sx={{
            gap: { xs: '10px', sm: '20px' },
            p: 0,
            flexGrow: 1,
          }}
          component="ul"
        >
          {jobs.map((job, i, arr) => (
            <JobItem key={job.id} job={job} last={i == arr.length - 1} />
          ))}
        </Stack>
      </Row>
    </Box>
  );
};

import React, { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { ANCHOR, Row, Text } from '@/shared';
import { JobItem } from './JobItem';

export const Experience: FC = () => {
  return (
    <section id={ANCHOR.EXPERIENCE} style={{ paddingTop: '60px' }}>
      <Text sx={{ fontSize: '36px' }}>
        Work <span>Experience</span>
      </Text>
      <Row justifyContent="flex-start" alignItems="normal" sx={{ paddingTop: '10px' }}>
        <Stack gap="20px" sx={{ p: 0, flexGrow: 1 }} component="ul">
          <JobItem />
          <JobItem />
          <JobItem last />
        </Stack>
      </Row>
    </section>
  );
};

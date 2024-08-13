import { Row, ScrollAnimateContainer, ShadowBox, ShadowCircle, Text } from '@/shared';
import { Box, Stack } from '@mui/material';
import React, { FC } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import CircleIcon from '@mui/icons-material/Circle';
import { JobType } from './jobs';

type Props = {
  job: JobType;
  last?: boolean;
};

export const JobItem: FC<Props> = ({ job, last }) => {
  return (
    <Box component="li" sx={{ position: 'relative', listStyle: 'none', ml: '40px' }}>
      <ScrollAnimateContainer>
        <ShadowBox
          sx={{
            padding: '34px 40px',

            '@media (max-width: 600px)': { padding: '24px 20px' },
          }}
        >
          <Stack component="article" alignItems="flex-start">
            <ShadowBox sx={{ p: '5px 10px', '@media (max-width: 600px)': { p: '2px 10px' }, mb: '15px' }}>
              <Text>{job.date}</Text>
            </ShadowBox>
            <Text sx={{ fontSize: '30px', '@media (max-width: 600px)': { fontSize: '24px' } }}>
              <span>{job.title}</span>
            </Text>
            <Text sx={{ m: '5px 0 15px 0' }}>{job.description}</Text>
            <Row width={'50%'} gap="20px" justifyContent={'flex-start'}>
              <ShadowCircle>
                <InstagramIcon />
              </ShadowCircle>
              <ShadowCircle>
                <InstagramIcon />
              </ShadowCircle>
              <ShadowCircle>
                <InstagramIcon />
              </ShadowCircle>
            </Row>
          </Stack>
        </ShadowBox>
      </ScrollAnimateContainer>

      <Box
        sx={{
          position: 'absolute',
          left: '-40px',
          top: 'calc(50% - 12px)',
          zIndex: 1,
        }}
      >
        <ShadowCircle sx={{ padding: '0px 6px', width: '24px', height: '24px' }}>
          <CircleIcon color="primary" sx={{ width: '12px' }} />
        </ShadowCircle>
      </Box>
      {!last && (
        <Box
          sx={{
            position: 'absolute',
            left: '-29px',
            top: 'calc(50% + 10px)',
            width: '2px',
            bgcolor: 'primary.main',
            height: 'calc(100% + 10px)',
            zIndex: 0,
          }}
        />
      )}
    </Box>
  );
};

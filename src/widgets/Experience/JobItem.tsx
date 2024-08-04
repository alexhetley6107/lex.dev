import { Row, ShadowBox, ShadowCircle, Text } from '@/shared';
import { Box, Stack } from '@mui/material';
import React, { FC } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import CircleIcon from '@mui/icons-material/Circle';

type Props = { last?: boolean };

export const JobItem: FC<Props> = ({ last }) => {
  return (
    <ShadowBox
      component="li"
      sx={{
        position: 'relative',
        padding: '34px 40px',
        listStyle: 'none',
        ml: '40px',
        '@media (max-width: 600px)': { padding: '24px 20px' },
      }}
    >
      <Stack alignItems="flex-start">
        <ShadowBox sx={{ p: '5px 10px', '@media (max-width: 600px)': { p: '2px 10px' }, mb: '15px' }}>
          <Text>September 2022 - May 2024</Text>
        </ShadowBox>
        <Text sx={{ fontSize: '30px', '@media (max-width: 600px)': { fontSize: '24px' } }}>
          <span>Your Next Agency</span>
        </Text>
        <Text sx={{ my: '15px' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit possimus ipsum officia neque atque nostrum
          assumenda nam..
        </Text>
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
    </ShadowBox>
  );
};

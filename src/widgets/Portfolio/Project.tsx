import { Row, ShadowBox, ShadowCircle, Text } from '@/shared';
import { Box, Stack } from '@mui/material';
import React, { FC } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';

type Props = {};

export const Project: FC<Props> = () => {
  return (
    <ShadowBox
      component="li"
      sx={{
        listStyle: 'none',
        p: '40px',
        '@media (max-width: 600px)': { p: '20px' },
      }}
    >
      <Row
        gap="30px"
        alignItems={'flex-start'}
        sx={{
          flexWrap: 'nowrap',
          justifyContent: 'flex-start',
          '@media (max-width: 800px)': { flexWrap: 'wrap', justifyContent: 'center' },
        }}
      >
        <Box
          sx={{
            justifySelf: 'center',
            maxWidth: '400px',
            width: '400px',
            aspectRatio: '2/1.5',
            bgcolor: 'primary.main',
            borderRadius: '20px',
          }}
        />

        <Stack alignItems="flex-start">
          <ShadowBox sx={{ p: '5px 10px', '@media (max-width: 600px)': { p: '2px 10px' }, mb: '15px' }}>
            <Text>December 2022</Text>
          </ShadowBox>
          <Text sx={{ fontSize: '30px', '@media (max-width: 600px)': { fontSize: '24px' } }}>
            <span>Adeart - Online Gift Shop</span>
          </Text>
          <Text sx={{ my: '15px' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit possimus ipsum officia neque atque nostrum
            assumenda nam. Perferendis delectus est atque cum nihil eligendi eum, officia voluptates.
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
      </Row>
    </ShadowBox>
  );
};

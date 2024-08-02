import React, { FC } from 'react';
import { ANCHOR, Row, Text } from '@/shared';
import { Stack } from '@mui/material';
import { CheckButton } from './CheckButton';

export const About: FC = () => {
  return (
    <section id={ANCHOR.ABOUT}>
      <Row sx={{ pt: '70px', height: 'calc(100svh - 60px)' }}>
        <Stack alignItems="flex-start">
          <Text sx={{ fontSize: '50px' }}>
            <span>Hello!</span> My name is Aleksandr Bredun.
          </Text>
          <Text sx={{ fontSize: '50px', mb: '30px' }}>I can do some great things for you.</Text>
          <CheckButton />
        </Stack>
      </Row>
    </section>
  );
};

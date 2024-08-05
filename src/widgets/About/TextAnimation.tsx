'use client';
import { Row } from '@/shared';
import { Box, Fade, Stack } from '@mui/material';
import React, { FC, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { CheckButton } from './CheckButton';

export const TextAnimation: FC = () => {
  const [typing, setTyping] = useState(true);
  const [isButton, setIsButton] = useState(false);

  return (
    <Stack alignItems="flex-start" gap="50px">
      <Row>
        <TypeAnimation
          sequence={[
            'Hello! My name is\n Aleksandr Bredun.',
            500,
            'Hello! My name is\n Aleksandr Bredun.\n I am a frontend developer.',
            500,
            'Hello! My name is\n Aleksandr Bredun.\n I can do some great\n things for you.',

            () => setTyping(false),
            () => setIsButton(true),
          ]}
          speed={50}
          style={{ whiteSpace: 'pre-line', display: 'block', fontSize: '50px' }}
          cursor={typing}
        />
      </Row>
      <Fade in={isButton}>
        <div>
          <CheckButton />
        </div>
      </Fade>
    </Stack>
  );
};

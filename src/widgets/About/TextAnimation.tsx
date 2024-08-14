'use client';
import { Box, Fade, Stack } from '@mui/material';
import React, { FC, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { CheckButton } from './CheckButton';

const CURSOR_CLASS = 'anim-cursor';
const ACTIVE_CLASS = 'active';
const HELLO_CLASS = 'hello';

export const TextAnimation: FC = () => {
  const [isButton, setIsButton] = useState(false);

  return (
    <Stack
      alignItems="flex-start"
      gap="50px"
      sx={{
        '.anim-cursor.active::after': {
          content: '"|"',
          color: 'primary.main',
        },
        '.anim-cursor::after': {
          content: '""',
        },
        '.hello': {
          color: 'primary.main',
          content: '""',
        },
        '.hello::after': {
          content: '""',
        },
        height: { xs: '205px', sm: '305px' },
        fontSize: { xs: '22px', sm: '30px', md: '50px' },
      }}
    >
      <Box>
        <TypeAnimation sequence={[1500, 'Hello!']} speed={50} className={HELLO_CLASS} />
        <TypeAnimation
          sequence={[
            2500,
            ' My name is Aleksandr Bredun.',
            500,
            ' My name is Aleksandr Bredun.\n I am a frontend developer.',
            500,
            ' My name is Aleksandr Bredun.\n I can do some great things for you.',
            (el) => (el as HTMLElement).classList.remove(ACTIVE_CLASS),
            () => setIsButton(true),
          ]}
          speed={50}
          className={[CURSOR_CLASS, ACTIVE_CLASS].join(' ')}
          style={{ whiteSpace: 'pre-line', display: 'inline' }}
        />
      </Box>
      <Fade in={isButton}>
        <div>
          <CheckButton />
        </div>
      </Fade>
    </Stack>
  );
};

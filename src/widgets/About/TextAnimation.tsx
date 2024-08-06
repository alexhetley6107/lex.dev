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
        height: '405px',
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
        fontSize: '50px',
        '@media (max-width: 1000px)': { fontSize: '36px' },
        '@media (max-width: 600px)': { fontSize: '22px' },
      }}
    >
      <Box>
        <TypeAnimation sequence={[1000, 'Hello!']} speed={50} className={HELLO_CLASS} />
        <TypeAnimation
          sequence={[
            1500,
            ' My name is\n Aleksandr Bredun.',
            500,
            ' My name is\n Aleksandr Bredun.\n I am a frontend developer.',
            500,
            ' My name is\n Aleksandr Bredun.\n I can do some great\n things for you.',
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

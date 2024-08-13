'use client';
import { Box, Fade, Slide } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';
import { useInView } from 'react-intersection-observer';

export const ScrollAnimateContainer: FC<PropsWithChildren> = ({ children }) => {
  const { ref, inView } = useInView({
    delay: 100,
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <Box ref={ref}>
      <Slide in={inView} direction="left" timeout={500}>
        <div>{children}</div>
      </Slide>
    </Box>
  );
};

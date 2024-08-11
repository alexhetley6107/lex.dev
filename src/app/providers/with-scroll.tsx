'use client';
import React, { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { ANCHOR, ScreenBox, ScrollContext } from '@/shared';
import { Box } from '@mui/material';

export const ScrollProvider: FC<PropsWithChildren> = ({ children }) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [isTop, setIsTop] = useState(true);

  const handleSetTop = () => {
    const scrollTop = boxRef.current?.scrollTop;
    setIsTop(0 === scrollTop);
  };

  useEffect(() => {
    boxRef.current?.addEventListener('scroll', handleSetTop);
    return () => {
      boxRef.current?.removeEventListener('scroll', handleSetTop);
    };
  }, []);

  const scrollTo = (anchor: ANCHOR) => {
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <ScrollContext.Provider value={{ isTop, scrollTo }}>
      <Box sx={{}}>
        <ScreenBox ref={boxRef}>{children}</ScreenBox>
      </Box>
    </ScrollContext.Provider>
  );
};

'use client';
import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { Box } from '@mui/material';

export const FadeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 1200);
    setTimeout(() => setIsHidden(true), 1700);
  }, []);

  const opacityStyle = { opacity: 0 };
  const displayStyle = { display: 'none' };

  return (
    <Box
      sx={{
        '.fade_screen': {
          ...(isHidden && displayStyle),
          ...(isLoaded && opacityStyle),
        },
      }}
    >
      {children}
    </Box>
  );
};

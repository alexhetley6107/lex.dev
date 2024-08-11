'use client';
import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { Box } from '@mui/material';

export const FadeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const width = { opacity: 0 };

  return (
    <Box
      sx={{
        '.fade_screen': {
          ...(isLoaded && width),
        },
      }}
    >
      {children}
    </Box>
  );
};

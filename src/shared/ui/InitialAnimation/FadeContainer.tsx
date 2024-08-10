'use client';
import { Fade } from '@mui/material';
import React, { FC, PropsWithChildren, useEffect, useState } from 'react';

export const FadeContainer: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  }, []);

  return (
    <Fade in={open}>
      <div>{children}</div>
    </Fade>
  );
};

'use client';
import React, { FC, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Container, LogoTitle, Row } from '@/shared/ui';
import { Menu } from './Menu';
import { Toggler } from './Toggler';

export const Header: FC = () => {
  const [isTop, setIsTop] = useState(true);

  const setHeaderHeight = () => {
    setIsTop(0 === window.scrollY ? true : false);
  };

  useEffect(() => {
    window.addEventListener('scroll', setHeaderHeight);
    return () => {
      window.removeEventListener('scroll', setHeaderHeight);
    };
  }, []);

  return (
    <AppBar
      position="sticky"
      elevation={isTop ? 0 : 3}
      sx={{
        zIndex: 990,
        bgcolor: 'secondary.light',
        height: isTop ? '70px' : '50px',
        transition: 'all 0.3s',
        backgroundImage: 'none !important',
      }}
    >
      <Container sx={{ height: '100%' }}>
        <Row sx={{ height: '100%' }}>
          <LogoTitle />
          <Menu />
          <Toggler />
        </Row>
      </Container>
    </AppBar>
  );
};

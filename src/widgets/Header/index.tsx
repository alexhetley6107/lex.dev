'use client';
import React, { FC, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Container, LogoTitle, Row } from '@/shared/ui';
import { Paper } from '@mui/material';
import { Menu } from './Menu';
import { Toggler } from './Toggler';

export const Header: FC = () => {
  const [isTop, setIsTop] = useState(true);

  const setHeaderHeight = () => {
    setIsTop(0 === window.scrollY ? true : false);
    console.log({ scrollY: window.scrollY });
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
      elevation={5}
      sx={{
        zIndex: 990,
        bgcolor: 'secondary.light',
        boxShadow: 'none',
        backgroundImage: 'none',
        height: isTop ? '70px' : '50px',
        transition: 'all 0.3s',
      }}
    >
      <Paper elevation={isTop ? 0 : 3} sx={{ borderRadius: 0, height: '100%' }}>
        <Container sx={{ height: '100%' }}>
          <Row sx={{ height: '100%' }}>
            <LogoTitle />
            <Menu />
            <Toggler />
          </Row>
        </Container>
      </Paper>
    </AppBar>
  );
};

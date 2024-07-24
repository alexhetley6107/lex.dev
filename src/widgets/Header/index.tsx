'use client';
import React, { FC, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Container, LogoTitle, Row } from '@/shared/ui';
import { Menu } from './Menu';
import { Toggler } from './Toggler';
import { Burger } from './Burger';
import { useMediaQuery } from '@mui/material';
import { Drawer } from './Drawer';

export const Header: FC = () => {
  const [isTop, setIsTop] = useState(true);
  const [isMenu, setIsMenu] = useState(false);
  const isMobile = useMediaQuery('(max-width:730px)');

  const setHeaderHeight = () => setIsTop(0 === window.scrollY ? true : false);
  const onToggleMenu = () => setIsMenu((prev) => !prev);

  useEffect(() => {
    window.addEventListener('scroll', setHeaderHeight);
    return () => {
      window.removeEventListener('scroll', setHeaderHeight);
    };
  }, []);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={isTop ? 0 : 3}
        sx={{
          zIndex: 10,
          bgcolor: 'secondary.light',
          height: isTop ? '70px' : '50px',
          transition: 'all 0.3s',
          backgroundImage: 'none !important',
        }}
      >
        <Container sx={{ height: '100%' }}>
          <Row sx={{ height: '100%' }}>
            <LogoTitle />
            {!isMobile && <Menu />}

            <Toggler margin={isMobile ? '40px' : '0'} />
          </Row>
        </Container>
      </AppBar>
      {isMobile && <Burger open={isMenu} isTop={isTop} onClick={onToggleMenu} />}
      <Drawer open={isMenu} onClose={onToggleMenu} />
    </>
  );
};

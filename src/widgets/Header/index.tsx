'use client';
import React, { FC, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Container, LinkButton, LogoTitle, Row } from '@/shared/ui';
import { Toggler } from './Toggler';
import { Burger } from './Burger';
import { useMediaQuery } from '@mui/material';
import { Drawer } from './Drawer';
import { useScroll } from '@/shared';
import { menuLinks } from './menuLinks';

export const Header: FC = () => {
  const isMobile = useMediaQuery('(max-width:730px)');
  const { isTop, scrollTo } = useScroll();

  const [isMenu, setIsMenu] = useState(false);
  const onToggleMenu = () => setIsMenu((prev) => !prev);
  const onLogoClick = () => document.location.reload();

  return (
    <>
      <AppBar
        elevation={isTop ? 0 : 3}
        sx={{
          zIndex: 10,
          bgcolor: isTop ? 'transparent' : 'primary.light',
          height: isTop ? '70px' : '50px',
          transition: 'height 0.3s',
          backgroundImage: 'none !important',
          marginRight: { xs: '0px', md: '14px' },
          boxShadow: 'none',
          width: { xs: '100vw', md: 'calc(100vw - 16px)' },
        }}
      >
        <Container sx={{ height: '100%' }}>
          <Row sx={{ height: '100%' }}>
            <LogoTitle onClick={onLogoClick} />
            {!isMobile && (
              <Row sx={{ gap: '10px' }}>
                {menuLinks.map(({ title, anchor }) => (
                  <LinkButton key={anchor} onClick={() => scrollTo(anchor)}>
                    {title}
                  </LinkButton>
                ))}
              </Row>
            )}

            <Toggler margin={isMobile ? '60px' : '0'} />
          </Row>
        </Container>
      </AppBar>

      {isMobile && <Burger open={isMenu} isTop={isTop} onClick={onToggleMenu} />}
      <Drawer open={isMenu} onClose={onToggleMenu} scrollTo={scrollTo} />
    </>
  );
};

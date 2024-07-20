'use client';
import React, { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import { HEADER_HEIGHT, ROUTE, THEME_MODE, useToggleColorMode } from '@/shared';
import { LinkButton, LogoTitle, Row } from '@/shared/ui';
import { IconButton, useTheme } from '@mui/material';
import MoonIcon from '@mui/icons-material/DarkMode';
import SunIcon from '@mui/icons-material/WbSunny';

const menuLinks = [
  { title: 'Home', href: ROUTE.HOME },
  { title: 'About', href: ROUTE.ABOUT },
  { title: 'Projects', href: ROUTE.PROJECTS },
  { title: 'Contacts', href: ROUTE.CONTACTS },
];

export const Header: FC = () => {
  const toggleTheme = useToggleColorMode();
  const theme = useTheme();

  const isLight = theme.palette.mode === THEME_MODE.LIGHT;

  return (
    <AppBar
      sx={{
        height: HEADER_HEIGHT,
        zIndex: 990,
        bgcolor: 'secondary.light',
        boxShadow: 'none',
        p: '10px',
        backgroundImage: 'none',
      }}
    >
      <Row>
        <LogoTitle />

        <Row>
          <Row>
            {menuLinks.map(({ title, href }) => (
              <LinkButton href={href} sx={{ mr: 3 }}>
                {title}
              </LinkButton>
            ))}
          </Row>
          <IconButton onClick={toggleTheme}>
            {isLight ? <SunIcon sx={{ color: 'secondary.dark' }} /> : <MoonIcon />}
          </IconButton>
        </Row>
      </Row>
    </AppBar>
  );
};

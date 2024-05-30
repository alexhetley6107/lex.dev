import React, { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import { HEADER_HEIGHT, ROUTE } from '@/shared/lib';
import { LinkButton, LogoTitle, Row } from '@/shared/ui';

const menuLinks = [
  { title: 'Home', href: ROUTE.HOME },
  { title: 'About', href: ROUTE.ABOUT },
  { title: 'Projects', href: ROUTE.PROJECTS },
  { title: 'Contacts', href: ROUTE.CONTACTS },
];

export const Header: FC = () => {
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
          {menuLinks.map(({ title, href }) => (
            <LinkButton href={href} sx={{ ml: 3 }}>
              {title}
            </LinkButton>
          ))}
        </Row>
      </Row>
    </AppBar>
  );
};

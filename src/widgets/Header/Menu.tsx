import { ANCHOR, LinkButton, Row } from '@/shared';
import React, { FC } from 'react';

const menuLinks = [
  { title: 'Home', href: ANCHOR.HOME },
  { title: 'About', href: ANCHOR.ABOUT },
  { title: 'Projects', href: ANCHOR.PROJECTS },
  { title: 'Contacts', href: ANCHOR.CONTACTS },
];

export const Menu: FC = () => {
  return (
    <Row>
      {menuLinks.map(({ title, href }) => (
        <LinkButton href={href} sx={{ mr: 3 }}>
          {title}
        </LinkButton>
      ))}
    </Row>
  );
};

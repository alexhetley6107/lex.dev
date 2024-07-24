import { LinkButton, Row } from '@/shared';
import React, { FC } from 'react';
import { menuLinks } from './menuLinks';

export const Menu: FC = () => {
  return (
    <Row>
      {menuLinks.map(({ title, href }) => (
        <LinkButton href={href} sx={{ mr: '20px' }}>
          {title}
        </LinkButton>
      ))}
    </Row>
  );
};

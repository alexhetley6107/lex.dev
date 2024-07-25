import { LinkButton, Row } from '@/shared';
import React, { FC } from 'react';
import { menuLinks } from './menuLinks';
import { ScrollService } from '@/shared/services';

export const Menu: FC = () => {
  return (
    <Row>
      {menuLinks.map(({ title, anchor }) => (
        <LinkButton onClick={() => ScrollService.toAnchor(anchor)} sx={{ mr: '20px' }}>
          {title}
        </LinkButton>
      ))}
    </Row>
  );
};

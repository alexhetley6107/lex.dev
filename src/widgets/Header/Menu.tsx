import { LinkButton, Row } from '@/shared';
import React, { FC } from 'react';
import { menuLinks } from './menuLinks';
import { ScrollService } from '@/shared/services';

export const Menu: FC = () => {
  return (
    <Row sx={{ gap: '10px' }}>
      {menuLinks.map(({ title, anchor }) => (
        <LinkButton onClick={() => ScrollService.toAnchor(anchor)}>{title}</LinkButton>
      ))}
    </Row>
  );
};

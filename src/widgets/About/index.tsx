import React, { FC } from 'react';
import { ANCHOR, Row, Text } from '@/shared';

export const About: FC = () => {
  return (
    <section id={ANCHOR.ABOUT}>
      <Row sx={{ pt: '70px', height: 'calc(100svh - 60px)' }}>
        <div>
          <Text sx={{ fontSize: '50px' }}>
            <span>Hello!</span> My name is Aleksandr Bredun.
          </Text>
          <Text sx={{ fontSize: '50px' }}>I can do some great things for you.</Text>
        </div>
      </Row>
    </section>
  );
};

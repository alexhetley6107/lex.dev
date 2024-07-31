import React, { FC } from 'react';
import { ANCHOR, Row, Text } from '@/shared';
import { ShadowBox } from '@/shared/ui/ShadowBox';

export const Contacts: FC = () => {
  return (
    <footer id={ANCHOR.CONTACTS} style={{ paddingBlock: '40px 60px' }}>
      <ShadowBox sx={{ padding: '30px 40px' }}>
        <Row alignItems="flex-start" sx={{ mb: '30px' }}>
          <Text sx={{ fontSize: '36px' }}>
            Do you want to ask <br /> <span> something interesting?</span>
          </Text>

          <Row width={'50%'}>Links</Row>
        </Row>
        <Row>
          <Text>Contact me. I am in touch mon-fri from 8 am to 8 pm (gmt).</Text>
          <Text>© Aleksandr Bredun, 2024</Text>
        </Row>
      </ShadowBox>
    </footer>
  );
};

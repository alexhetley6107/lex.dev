import React, { FC } from 'react';
import { ANCHOR, getCurrentYear, Row, ShadowCircle, Text } from '@/shared';
import { ShadowBox } from '@/shared/ui/ShadowBox';
import Link from 'next/link';
import { Box } from '@mui/material';
import { links } from './links';

export const Contacts: FC = () => {
  return (
    <Box component="footer" id={ANCHOR.CONTACTS} sx={{ pb: '50px', pt: { xs: '20px', sm: '40px' } }}>
      <ShadowBox sx={{ p: { xs: '14px 24px', sm: '30px 40px' } }}>
        <Row alignItems="flex-start" flexWrap={'wrap'} gap={'20px'} sx={{ mb: '30px' }}>
          <Text sx={{ fontSize: { xs: '24px', sm: '36px' } }}>
            Do you want to ask <br /> <span> something interesting?</span>
          </Text>

          <Row flexWrap={'wrap'} gap={{ xs: '10px', sm: '20px' }}>
            {links.map(({ link, Icon }) => (
              <Link href={link} target="_blank">
                <ShadowBox sx={{ borderRadius: '100px', height: '44px', p: '10px' }}>
                  <Icon />
                </ShadowBox>
              </Link>
            ))}
          </Row>
        </Row>
        <Row flexWrap={'wrap'} gap={'20px'}>
          <Text sx={{ wordWrap: 'nowrap' }}>Contact me. I am in touch mon-fri from 7 am to 7 pm (GMT+3).</Text>
          <Text>© Aleksandr Bredun, {getCurrentYear()}</Text>
        </Row>
      </ShadowBox>
    </Box>
  );
};

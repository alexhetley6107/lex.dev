import React, { FC } from 'react';
import { ANCHOR, Row, ShadowCircle, Text } from '@/shared';
import { ShadowBox } from '@/shared/ui/ShadowBox';
import Link from 'next/link';
import { Box } from '@mui/material';
import { links } from './links';

export const Contacts: FC = () => {
  return (
    <Box
      component="footer"
      id={ANCHOR.CONTACTS}
      sx={{ pb: '50px', pt: '40px', '@media (max-width: 600px)': { pt: '20px' } }}
    >
      <ShadowBox sx={{ padding: '30px 40px', '@media (max-width: 600px)': { padding: '14px 24px' } }}>
        <Row alignItems="flex-start" flexWrap={'wrap'} gap={'20px'} sx={{ mb: '30px' }}>
          <Text sx={{ fontSize: '36px', '@media (max-width: 600px)': { fontSize: '24px' } }}>
            Do you want to ask <br /> <span> something interesting?</span>
          </Text>

          <Row flexWrap={'wrap'} sx={{ gap: '20px', '@media (max-width: 600px)': { gap: '10px' } }}>
            {links.map(({ link, Icon }) => (
              <Link href={link} target="_blank">
                <ShadowCircle>
                  <Icon />
                </ShadowCircle>
              </Link>
            ))}
          </Row>
        </Row>
        <Row flexWrap={'wrap'} gap={'20px'}>
          <Text sx={{ wordWrap: 'nowrap' }}>Contact me. I am in touch mon-fri from 8 am to 8 pm (GMT+3).</Text>
          <Text>© Aleksandr Bredun, 2024</Text>
        </Row>
      </ShadowBox>
    </Box>
  );
};

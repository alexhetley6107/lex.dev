import React, { FC } from 'react';
import { ANCHOR, Row, ShadowCircle, Text } from '@/shared';
import { ShadowBox } from '@/shared/ui/ShadowBox';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';

const links = [
  { link: 'https://github.com/alexhetley6107', Icon: GitHubIcon },
  { link: 'https://www.linkedin.com/in/aleksandr-bredun', Icon: LinkedInIcon },
  { link: 'https://telegram.me/lexhetley', Icon: TelegramIcon },
  { link: 'mailto:hetleyofficial@gmail.com', Icon: MailIcon },
  { link: 'https://www.instagram.com/alhetley', Icon: InstagramIcon },
];

export const Contacts: FC = () => {
  return (
    <footer id={ANCHOR.CONTACTS} style={{ paddingBlock: '60px' }}>
      <ShadowBox sx={{ padding: '30px 40px' }}>
        <Row alignItems="flex-start" sx={{ mb: '30px' }}>
          <Text sx={{ fontSize: '36px' }}>
            Do you want to ask <br /> <span> something interesting?</span>
          </Text>

          <Row width={'50%'} gap="20px" justifyContent="flex-end">
            {links.map(({ link, Icon }) => (
              <Link href={link} target="_blank">
                <ShadowCircle>
                  <Icon />
                </ShadowCircle>
              </Link>
            ))}
          </Row>
        </Row>
        <Row>
          <Text>Contact me. I am in touch mon-fri from 8 am to 8 pm (gmt).</Text>
          <Text>© Aleksandr Bredun, 2024</Text>
        </Row>
      </ShadowBox>
    </footer>
  );
};

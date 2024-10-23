import { Icon, ProjectType, Row, ScrollAnimateContainer, ShadowBox, ShadowCircle, Text } from '@/shared';
import { Box, Stack } from '@mui/material';
import Link from 'next/link';
import React, { FC } from 'react';

export const Project: FC<ProjectType> = ({ link, image, title, description, date, skills }) => {
  return (
    <ScrollAnimateContainer>
      <ShadowBox component="li" sx={{ listStyle: 'none', p: { xs: '24px 20px', sm: '30px' } }}>
        <Row
          component="article"
          gap="30px"
          alignItems={'flex-start'}
          sx={{
            flexWrap: { xs: 'wrap', md: 'nowrap' },
            justifyContent: 'flex-start',
          }}
        >
          <Box
            sx={{
              justifySelf: 'center',
              minWidth: { xs: '100%', md: '380px' },
              width: { xs: '100%', md: '380px' },
              height: '250px',
              borderRadius: '20px',
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              cursor: 'pointer',
            }}
          />

          <Stack alignItems="flex-start">
            <ShadowBox sx={{ p: '5px 10px', '@media (max-width: 600px)': { p: '2px 10px' }, mb: '15px' }}>
              <Text>{date}</Text>
            </ShadowBox>
            <Text sx={{ fontSize: '30px', '@media (max-width: 600px)': { fontSize: '24px' } }}>
              <Link href={link} target={'_blank'}>
                <span>{title}</span>
              </Link>
            </Text>
            <Text sx={{ my: '15px' }}>{description}</Text>
            <Row gap={{ xs: '5px', sm: '20px' }} justifyContent={'flex-start'} flexWrap={'wrap'}>
              {skills.map((name, i) => (
                <ShadowBox key={i} circle>
                  <Icon name={name} />
                </ShadowBox>
              ))}
            </Row>
          </Stack>
        </Row>
      </ShadowBox>
    </ScrollAnimateContainer>
  );
};

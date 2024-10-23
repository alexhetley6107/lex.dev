import { Icon, ProjectType, Row, ScrollAnimateContainer, ShadowBox, ShadowCircle, Text } from '@/shared';
import { Box, Stack } from '@mui/material';
import Link from 'next/link';
import React, { FC } from 'react';

export const Project: FC<ProjectType> = ({ link, image, title, description, date, skills }) => {
  return (
    <ScrollAnimateContainer>
      <ShadowBox component="li" sx={{ listStyle: 'none', p: { xs: '24px 20px', sm: '34px 40px' } }}>
        <Row
          component="article"
          gap="30px"
          alignItems={'flex-start'}
          sx={{
            flexWrap: 'nowrap',
            justifyContent: 'flex-start',
            '@media (max-width: 800px)': { flexWrap: 'wrap', justifyContent: 'center' },
          }}
        >
          <Link href={link} target={'_blank'}>
            <Box
              sx={{
                justifySelf: 'center',
                maxWidth: '400px',
                width: '400px',
                aspectRatio: '2/1.5',
                borderRadius: '20px',
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                cursor: 'pointer',
              }}
            />
          </Link>

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

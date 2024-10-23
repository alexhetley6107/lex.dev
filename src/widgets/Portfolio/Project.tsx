import { Icon, ProjectType, Row, ScrollAnimateContainer, ShadowBox, ShadowCircle, Text } from '@/shared';
import { Box, Stack } from '@mui/material';
import React, { FC } from 'react';

export const Project: FC<ProjectType> = ({ link, image, title, description, date, skills }) => {
  return (
    <ScrollAnimateContainer>
      <ShadowBox component="li" sx={{ listStyle: 'none', p: { xs: '20px', sm: '40px' } }}>
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
          <Box
            sx={{
              justifySelf: 'center',
              maxWidth: '400px',
              width: '400px',
              aspectRatio: '2/1.5',
              bgcolor: 'primary.main',
              borderRadius: '20px',
            }}
          />

          <Stack alignItems="flex-start">
            <ShadowBox sx={{ p: '5px 10px', '@media (max-width: 600px)': { p: '2px 10px' }, mb: '15px' }}>
              <Text>{date}</Text>
            </ShadowBox>
            <Text sx={{ fontSize: '30px', '@media (max-width: 600px)': { fontSize: '24px' } }}>
              <span>{title}</span>
            </Text>
            <Text sx={{ my: '15px' }}>{description}</Text>
            <Row width={'50%'} gap="20px" justifyContent={'flex-start'}>
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

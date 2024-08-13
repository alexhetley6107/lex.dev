import React, { FC } from 'react';
import { ANCHOR, Row, ScrollAnimateContainer, Text } from '@/shared';
import { Box, Stack } from '@mui/material';
import { hardSkills, softSkills } from './data';
import { SkillItem } from './SkillItem';

export const Skills: FC = () => {
  return (
    <Box component="section" id={ANCHOR.SKILLS}>
      <Row gap="20px" alignItems="flex-start" flexWrap={'wrap'} sx={{ paddingTop: '65px' }}>
        <Stack sx={{ width: '48%', '@media (max-width: 800px)': { width: '100%' } }}>
          <ScrollAnimateContainer>
            <Text sx={{ fontSize: '36px', '@media (max-width: 600px)': { fontSize: '24px' } }}>
              Hard <span>Skills</span>
            </Text>
          </ScrollAnimateContainer>
          <Stack gap="10px" component="ul" p={0}>
            {hardSkills.map((skill, i) => (
              <ScrollAnimateContainer key={i}>
                <SkillItem>{skill}</SkillItem>
              </ScrollAnimateContainer>
            ))}
          </Stack>
        </Stack>
        <Stack sx={{ width: '48%', '@media (max-width: 800px)': { width: '100%' } }}>
          <ScrollAnimateContainer>
            <Text sx={{ fontSize: '36px', '@media (max-width: 600px)': { fontSize: '24px' } }}>
              Soft <span>Skills</span>
            </Text>
          </ScrollAnimateContainer>
          <Stack gap="10px" component="ul" p={0}>
            {softSkills.map((skill, i) => (
              <ScrollAnimateContainer key={i}>
                <SkillItem>{skill}</SkillItem>
              </ScrollAnimateContainer>
            ))}
          </Stack>
        </Stack>
      </Row>
    </Box>
  );
};

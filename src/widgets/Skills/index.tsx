import React, { FC } from 'react';
import { ANCHOR, Row, Text } from '@/shared';
import { Stack } from '@mui/material';
import { hardSkills, softSkills } from './data';
import { SkillItem } from './SkillItem';

export const Skills: FC = () => {
  return (
    <section id={ANCHOR.SKILLS}>
      <Row gap="20px" alignItems="flex-start" flexWrap={'wrap'} sx={{ paddingTop: '60px' }}>
        <Stack sx={{ width: '48%', '@media (max-width: 800px)': { width: '100%' } }}>
          <Text sx={{ fontSize: '36px', '@media (max-width: 600px)': { fontSize: '24px' } }}>
            Hard <span>Skills</span>
          </Text>
          <Stack gap="10px" component="ul" p={0}>
            {hardSkills.map((skill) => (
              <SkillItem>{skill}</SkillItem>
            ))}
          </Stack>
        </Stack>
        <Stack sx={{ width: '48%', '@media (max-width: 800px)': { width: '100%' } }}>
          <Text sx={{ fontSize: '36px', '@media (max-width: 600px)': { fontSize: '24px' } }}>
            Soft <span>Skills</span>
          </Text>
          <Stack gap="10px" component="ul" p={0}>
            {softSkills.map((skill) => (
              <SkillItem>{skill}</SkillItem>
            ))}
          </Stack>
        </Stack>
      </Row>
    </section>
  );
};

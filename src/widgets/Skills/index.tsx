import React, { FC } from 'react';
import { ANCHOR, Row, Text } from '@/shared';
import { Stack } from '@mui/material';
import { hardSkills, softSkills } from './data';
import { SkillItem } from './SkillItem';

export const Skills: FC = () => {
  return (
    <section id={ANCHOR.SKILLS}>
      <Row gap="20px" alignItems="flex-start" sx={{ paddingTop: '60px' }}>
        <Stack gap="10px" width="49%">
          <Text sx={{ fontSize: '36px' }}>
            Hard <span>Skills</span>
          </Text>

          {hardSkills.map((skill) => (
            <SkillItem>{skill}</SkillItem>
          ))}
        </Stack>
        <Stack gap="10px" width="49%">
          <Text sx={{ fontSize: '36px' }}>
            Soft <span>Skills</span>
          </Text>

          {softSkills.map((skill) => (
            <SkillItem>{skill}</SkillItem>
          ))}
        </Stack>
      </Row>
    </section>
  );
};

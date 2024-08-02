import React, { FC } from 'react';
import { ANCHOR, Row, Text } from '@/shared';
import { Stack } from '@mui/material';
import { hardSkills, softSkills } from './data';
import { SkillItem } from './SkillItem';

export const Skills: FC = () => {
  return (
    <section id={ANCHOR.SKILLS}>
      <Row gap="20px" alignItems="flex-start" sx={{ paddingTop: '60px' }}>
        <Stack width="49%">
          <Text sx={{ fontSize: '36px' }}>
            Hard <span>Skills</span>
          </Text>
          <Stack gap="10px" component="ul" p={0}>
            {hardSkills.map((skill) => (
              <SkillItem>{skill}</SkillItem>
            ))}
          </Stack>
        </Stack>
        <Stack width="49%">
          <Text sx={{ fontSize: '36px' }}>
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

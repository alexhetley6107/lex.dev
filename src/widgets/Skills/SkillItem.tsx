import { Row, Text } from '@/shared';
import { ShadowBox } from '@/shared/ui/ShadowBox';
import React, { FC, PropsWithChildren } from 'react';
import CircleIcon from '@mui/icons-material/Circle';

export const SkillItem: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ShadowBox sx={{ p: '16px', '@media (max-width: 600px)': { p: '12px' }, listStyle: 'none' }} component="li">
      <Row alignItems={'flex-start'} justifyContent="flex-start">
        <CircleIcon color="primary" sx={{ width: '12px', mr: '12px' }} />
        <Text>{children}</Text>
      </Row>
    </ShadowBox>
  );
};

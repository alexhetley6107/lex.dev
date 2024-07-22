import { Stack, StackProps } from '@mui/material';
import React, { FC } from 'react';

export const Row: FC<StackProps> = (props) => {
  return (
    <Stack
      direction="row"
      alignItems={props.alignItems ?? 'center'}
      justifyContent={props.justifyContent ?? 'space-between'}
      sx={{ ...props.sx }}
    >
      {props.children}
    </Stack>
  );
};

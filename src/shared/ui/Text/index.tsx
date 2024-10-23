import { Box, BoxProps } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren<BoxProps>;

export const Text: FC<Props> = ({ children, sx, component, ...props }) => {
  return (
    <Box
      component={component ?? 'p'}
      sx={{
        color: 'secondary.dark',
        m: 0,
        '& span': { color: 'primary.main' },
        '*': { textDecoration: 'none' },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

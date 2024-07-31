import { Box, BoxProps } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren<BoxProps>;

export const Text: FC<Props> = ({ children, sx, ...props }) => {
  return (
    <Box
      sx={{
        color: 'secondary.dark',
        '& p': { m: 0 },
        '& span': { color: 'primary.main' },
        ...sx,
      }}
      {...props}
    >
      <p>{children}</p>
    </Box>
  );
};

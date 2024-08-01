import { Paper, PaperProps } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren<PaperProps>;

export const ShadowCircle: FC<Props> = ({ children, ...props }) => {
  return (
    <Paper
      elevation={10}
      {...props}
      sx={{
        borderRadius: '100px',
        width: '44px',
        height: '44px',
        bgcolor: 'secondary.light',
        backgroundImage: 'none',
        padding: '10px',
        ...props.sx,
      }}
    >
      {children}
    </Paper>
  );
};

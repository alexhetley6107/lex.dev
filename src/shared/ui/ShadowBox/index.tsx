import { Paper, PaperProps } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren<PaperProps>;

export const ShadowBox: FC<Props> = ({ children, ...props }) => {
  return (
    <Paper
      elevation={10}
      {...props}
      sx={{
        borderRadius: '20px',
        bgcolor: 'secondary.light',
        backgroundImage: 'none',
        padding: '20px',
        ...props.sx,
      }}
    >
      {children}
    </Paper>
  );
};

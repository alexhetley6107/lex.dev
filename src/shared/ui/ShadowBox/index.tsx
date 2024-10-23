'use client';
import React, { FC } from 'react';
import { Paper, PaperProps, useTheme } from '@mui/material';
import { THEME_MODE } from '@/shared/types';

const circleStyle = {
  borderRadius: '200px',
  width: { xs: '32px', sm: '44px' },
  height: { xs: '32px', sm: '44px' },
  padding: { xs: '4px', sm: '10px' },
};

type Props = PaperProps & { circle?: boolean };

export const ShadowBox: FC<Props> = ({ children, circle, ...props }) => {
  const theme = useTheme();
  const boxShadow =
    theme.palette.mode === THEME_MODE.LIGHT
      ? '-8px -8px 12px hsla(0, 0%, 100%, .8), 8px 8px 12px rgba(0, 0, 0, .10)'
      : '-4px -4px 12px hsla(0, 0%, 100%, .05), 4px 4px 12px rgba(255, 255, 255, .15)';
  const boxShadowInset =
    theme.palette.mode === THEME_MODE.LIGHT
      ? 'inset 0px 0px 12px rgba(0, 0, 0, .10)'
      : 'inset 0px 0px 20px rgba(255, 255, 255, .15)';

  return (
    <Paper
      {...props}
      sx={{
        borderRadius: '20px',
        bgcolor: 'secondary.light',
        backgroundImage: 'none',
        padding: '20px',
        boxShadow,
        '@media (hover: hover)': {
          '&:hover': {
            boxShadow: boxShadowInset,
          },
        },
        ...(circle && circleStyle),
        ...props.sx,
      }}
    >
      {children}
    </Paper>
  );
};

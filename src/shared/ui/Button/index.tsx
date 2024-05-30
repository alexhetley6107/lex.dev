import { Box, ButtonProps, Button as MuiButton } from '@mui/material';
import React, { FC } from 'react';

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <MuiButton
      {...props}
      sx={{
        border: '2px solid black',
        borderRadius: '8px',
        color: 'secondary.light',
        fontWeight: 600,
        position: 'relative',
        overflow: 'hidden',
        '@media (hover: hover)': {
          '&:hover': {
            color: 'secondary.dark',
            div: {
              left: '110%',
            },
          },
        },
      }}
    >
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          transition: 'all 0.3s',
          bgcolor: 'secondary.dark',
        }}
      />
    </MuiButton>
  );
};

import { Box, BoxProps } from '@mui/material';
import React, { FC } from 'react';

export const Button: FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        color: 'secondary.dark',
        zIndex: 0,
        fontWeight: 600,
        position: 'relative',
        overflow: 'hidden',
        textTransform: 'capitalize',
        borderRadius: '16px',
        cursor: 'pointer',
        padding: '8px 14px',
        fontSize: '24px',
        border: '2px solid gray',
        borderColor: 'secondary.dark',

        '@media (hover: hover)': {
          '&:hover': {
            color: 'secondary.main',
            div: { right: '0%', opacity: 1 },
            borderColor: 'primary.main',
          },
        },
        '@media (max-width: 600px)': {
          fontSize: '18px',
          borderWidth: '1px',
          borderRadius: '10px',
        },

        ...props.sx,
      }}
    >
      <span
        style={{
          transition: 'all 0.2s',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {children}
      </span>

      <Box
        sx={{
          position: 'absolute',
          height: '110%',
          width: '110%',
          top: '-5%',
          right: '110%',
          zIndex: 0,
          opacity: 0,
          transition: 'all 0.4s',
          bgcolor: 'primary.main',
          borderRadius: '10px',
        }}
      />
    </Box>
  );
};

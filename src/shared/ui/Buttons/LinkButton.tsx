import React, { FC } from 'react';
import { Box, BoxProps } from '@mui/material';

export const LinkButton: FC<BoxProps> = ({ children, ...props }) => {
  return (
    <a>
      <Box
        {...props}
        sx={{
          color: 'secondary.dark',
          zIndex: 0,
          fontWeight: 600,
          position: 'relative',
          overflow: 'hidden',
          textTransform: 'capitalize',
          borderRadius: '8px',
          cursor: 'pointer',
          padding: '3px 10px',

          '@media (hover: hover)': {
            '&:hover': {
              color: 'secondary.light',
              div: { right: '0%', opacity: 1 },
            },
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
            height: '100%',
            width: '100%',
            top: 0,
            right: '110%',
            zIndex: 0,
            opacity: 0,
            transition: 'all 0.3s',
            bgcolor: 'secondary.dark',
            borderRadius: '6px',
          }}
        />
      </Box>
    </a>
  );
};

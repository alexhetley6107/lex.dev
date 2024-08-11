import React from 'react';
import { Box } from '@mui/material';

const boxStyle = {
  width: '33%',
  height: '100svh',
  bgcolor: 'primary.main',
  position: 'absolute',
  top: '100%',
  animation: 'slidein 1s',
  '@keyframes slidein': {
    from: {
      top: '100%',
    },
    to: {
      top: '-100%',
    },
  },
};

export const FadeScreen = () => {
  return (
    <Box
      className="fade_screen"
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 1500,
        width: '100vw',
        height: '100svh',
        bgcolor: 'primary.dark',
        overscrollBehavior: 'none',
        transition: 'opacity 0.7s',
        color: 'white',
      }}
    >
      <Box
        className="box1"
        sx={{
          ...boxStyle,
          left: 0,
          animationDelay: '0.4s',
        }}
      />
      <Box className="box2" sx={{ ...boxStyle, left: '33.25%', animationDelay: '0.6s' }} />
      <Box className="box3" sx={{ ...boxStyle, left: '66.5%', animationDelay: '0.8s' }} />
    </Box>
  );
};

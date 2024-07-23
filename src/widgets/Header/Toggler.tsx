import React from 'react';
import { Row, THEME_MODE, useToggleColorMode } from '@/shared';
import { Box, Button, Paper, useTheme } from '@mui/material';
import MoonIcon from '@mui/icons-material/DarkMode';
import SunIcon from '@mui/icons-material/WbSunny';

export const Toggler = () => {
  const toggleTheme = useToggleColorMode();
  const theme = useTheme();

  const isLight = theme.palette.mode === THEME_MODE.LIGHT;
  return (
    <Button
      onClick={toggleTheme}
      sx={{
        borderRadius: '100px',
        p: 0,
        '&:focus': {
          outline: `2px solid ${theme.palette.primary.main}`,
        },
      }}
    >
      <Paper sx={{ width: '80px', borderRadius: '100px', bgcolor: 'secondary.light' }}>
        <Row sx={{ position: 'relative', height: '100%', borderRadius: '100px', p: '10px' }}>
          <SunIcon
            sx={{
              color: 'white',
              position: 'relative',
              zIndex: 1,
            }}
          />
          <MoonIcon
            sx={{
              position: 'relative',
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              width: '36px',
              height: '36px',
              borderRadius: '100px',
              bgcolor: 'primary.main',
              top: '4px',
              left: isLight ? '4px' : '40px',
              zIndex: 0,
              transition: 'all 0.3s',
            }}
          />
        </Row>
      </Paper>
    </Button>
  );
};

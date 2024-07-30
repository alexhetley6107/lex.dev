import React, { FC } from 'react';
import { Row, THEME_MODE, useToggleColorMode } from '@/shared';
import { Box, Button, Paper, useTheme } from '@mui/material';
import MoonIcon from '@mui/icons-material/DarkMode';
import SunIcon from '@mui/icons-material/WbSunny';

type Props = {
  margin: string;
};

export const Toggler: FC<Props> = ({ margin }) => {
  const toggleTheme = useToggleColorMode();
  const theme = useTheme();

  const isLight = theme.palette.mode === THEME_MODE.LIGHT;
  return (
    <Button
      onClick={toggleTheme}
      sx={{
        mr: margin,
        borderRadius: '100px',
        p: 0,
        backgroundImage: 'none',
        '&:focus': {
          outline: `2px solid ${theme.palette.primary.main}`,
        },
      }}
    >
      <Paper sx={{ width: '65px', borderRadius: '100px', bgcolor: 'secondary.light' }}>
        <Row sx={{ position: 'relative', height: '100%', borderRadius: '100px', p: '5px' }}>
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
              width: '20x',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              width: '28px',
              height: '28px',
              borderRadius: '100px',
              bgcolor: 'primary.main',
              top: '3px',
              left: isLight ? '3px' : '33px',
              zIndex: 0,
              transition: 'all 0.3s',
            }}
          />
        </Row>
      </Paper>
    </Button>
  );
};

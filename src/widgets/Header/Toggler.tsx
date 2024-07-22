import React from 'react';
import { THEME_MODE, useToggleColorMode } from '@/shared';
import { IconButton, useTheme } from '@mui/material';
import MoonIcon from '@mui/icons-material/DarkMode';
import SunIcon from '@mui/icons-material/WbSunny';

export const Toggler = () => {
  const toggleTheme = useToggleColorMode();
  const theme = useTheme();

  const isLight = theme.palette.mode === THEME_MODE.LIGHT;
  return (
    <IconButton onClick={toggleTheme}>
      {isLight ? <SunIcon sx={{ color: 'secondary.dark' }} /> : <MoonIcon />}
    </IconButton>
  );
};

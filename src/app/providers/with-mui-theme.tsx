'use client';
import React, { FC, PropsWithChildren, useState, useEffect } from 'react';
import { createTheme, CssBaseline, ThemeProvider as MUIThemeProvider } from '@mui/material';
import { ColorModeContext, THEME_MODE } from '@/shared';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = useState<THEME_MODE>(THEME_MODE.LIGHT);

  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode') as THEME_MODE;
    if (savedMode) {
      setMode(savedMode);
    } else {
      localStorage.setItem('themeMode', mode as string);
    }
  }, []);

  const toggleColorMode = () => {
    const newMode = mode === THEME_MODE.LIGHT ? THEME_MODE.DARK : THEME_MODE.LIGHT;
    setMode(newMode);
    localStorage.setItem('themeMode', newMode as string);
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === THEME_MODE.LIGHT
            ? {
                primary: {
                  main: 'rgb(98, 82, 225)',
                  dark: 'rgba(25, 24, 32, 1)',
                  light: 'rgba(236, 236, 236, 0.9)',
                },
                secondary: {
                  main: 'rgba(236, 236, 236, 1)',
                  dark: 'rgba(25, 24, 32, 1)',
                  light: 'rgba(236, 236, 236, 1)',
                },
              }
            : {
                primary: {
                  main: 'rgb(71, 123, 247)',
                  dark: 'rgba(25, 24, 32, 1)',
                  light: 'rgba(25, 24, 32, 0.9)',
                },
                secondary: {
                  main: 'rgba(236, 236, 236, 1)',
                  dark: 'rgba(235, 235, 235, 1)',
                  light: 'rgba(25, 24, 32, 1)',
                },
              }),
        },
        typography: {
          fontFamily: 'Nunito, Arial, sans-serif',
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ColorModeContext.Provider>
  );
};

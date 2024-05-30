'use client';
import React, { FC, PropsWithChildren, useState, useEffect } from 'react';
import { createTheme, CssBaseline, ThemeProvider as MUIThemeProvider } from '@mui/material';
import { ColorModeContext, THEME_MODE } from '@/shared/lib';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = useState<THEME_MODE>(THEME_MODE.LIGHT);

  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode') as THEME_MODE;

    setMode(savedMode ?? THEME_MODE.LIGHT);
  }, []);

  useEffect(() => {
    localStorage.setItem('themeMode', mode as string);
  }, [mode]);

  const toggleColorMode = () => setMode(mode === THEME_MODE.LIGHT ? THEME_MODE.DARK : THEME_MODE.LIGHT);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === THEME_MODE.LIGHT
            ? {
                primary: {
                  main: 'rgba(52, 112, 255, 1)',
                  dark: 'rgba(52, 112, 255, 1)',
                },
                secondary: {
                  main: 'rgba(62, 62, 62, 1)',
                  dark: 'rgba(10, 10, 10, 1)',
                  light: 'rgba(255, 255, 255, 1)',
                },
                error: {
                  main: '#c9473f',
                },
              }
            : {
                primary: {
                  main: 'rgba(92, 177, 255, 1)',
                  dark: 'rgba(52, 112, 255, 1)',
                },
                secondary: {
                  main: 'rgba(62, 62, 62, 1)',
                  dark: 'rgba(255, 255, 255, 1)',
                  light: 'rgba(10, 10, 10, 1)',
                },
                error: {
                  main: '#c9473f',
                },
              }),
        },
        typography: {
          fontFamily: 'Montserrat, sans-serif',
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

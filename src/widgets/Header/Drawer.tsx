import React, { FC } from 'react';
import { DrawerProps, Drawer as MuiDrawer, Stack } from '@mui/material';
import { menuLinks } from './menuLinks';
import { LinkButton } from '@/shared';

export const Drawer: FC<DrawerProps> = (props) => {
  const onClick = (e: any) => {
    props.onClose?.(e, 'backdropClick');
    window.scrollTo(0, 0);
  };

  return (
    <MuiDrawer anchor={'right'} {...props} sx={{ zIndex: 10 }}>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ width: '100svw', height: '100svh', bgcolor: 'secondary.light' }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ width: '100svw', height: '100svh', bgcolor: 'secondary.light' }}
        >
          {menuLinks.map(({ title, href }) => (
            <LinkButton onClick={(e) => onClick(e)} sx={{ fontSize: '26px' }}>
              {title}
            </LinkButton>
          ))}
        </Stack>
      </Stack>
    </MuiDrawer>
  );
};

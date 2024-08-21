import React, { FC } from 'react';
import { DrawerProps, Drawer as MuiDrawer, Stack } from '@mui/material';
import { menuLinks } from './menuLinks';
import { ANCHOR, LinkButton } from '@/shared';

type Props = DrawerProps & {
  scrollTo: (a: ANCHOR) => void;
};

export const Drawer: FC<Props> = (props) => {
  const onClickLink = (e: React.MouseEvent<HTMLDivElement>, anchor: ANCHOR) => {
    props.onClose?.(e, 'backdropClick');
    props.scrollTo(anchor);
  };

  return (
    <MuiDrawer anchor={'right'} {...props} sx={{ zIndex: 10, height: '100svh !important' }}>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ width: '100svw', height: '100svh !important', bgcolor: 'secondary.light' }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          gap="10px"
          sx={{ width: '100svw', height: '100svh !important', bgcolor: 'secondary.light' }}
        >
          {menuLinks.map(({ title, anchor }) => (
            <LinkButton key={anchor} onClick={(e) => onClickLink(e, anchor)} sx={{ fontSize: '26px' }}>
              {title}
            </LinkButton>
          ))}
        </Stack>
      </Stack>
    </MuiDrawer>
  );
};

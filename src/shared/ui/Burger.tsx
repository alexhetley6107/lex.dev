import { ButtonProps, IconButton } from '@mui/material';
import React, { FC } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const iconStyles = {
  width: '32px',
  height: '32px',
  position: 'absolute',
  transition: 'all 0.2s',
};

type Props = ButtonProps & { open?: boolean };

export const Burger: FC<Props> = ({ open, ...props }) => {
  return (
    <IconButton
      {...props}
      sx={{
        position: 'relative',
        width: '38px',
        height: '38px',
        overflow: 'hidden',
      }}
    >
      <MenuIcon sx={{ ...iconStyles, left: open ? '40px' : '2px' }} />
      <CloseIcon sx={{ ...iconStyles, right: open ? '2px' : '40px' }} />
    </IconButton>
  );
};

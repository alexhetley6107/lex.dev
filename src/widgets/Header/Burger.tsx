import { ButtonProps, IconButton, Paper } from '@mui/material';
import React, { FC } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const iconStyles = {
  width: '30px',
  height: '30px',
  position: 'absolute',
  transition: 'all 0.2s',
  color: 'secondary.dark',
  top: '3px',
};

type Props = ButtonProps & { open: boolean; isTop: boolean };

export const Burger: FC<Props> = ({ open, isTop, ...props }) => {
  return (
    <IconButton
      {...props}
      sx={{
        position: 'fixed',
        width: '36px',
        height: '36px',
        ml: 1,
        zIndex: 1400,
        top: isTop ? '17px' : '6px',
        right: '6px',
        transition: 'all 0.3s',
        p: 0,
      }}
    >
      <Paper
        elevation={2}
        sx={{
          position: 'relative',
          p: '8px',
          width: '100%',
          height: '100%',
          borderRadius: '100px',
          bgcolor: 'secondary.light',
          overflow: 'hidden',
        }}
      >
        <MenuIcon sx={{ ...iconStyles, right: open ? '40px' : '3px' }} />
        <CloseIcon sx={{ ...iconStyles, left: open ? '3px' : '40px' }} />
      </Paper>
    </IconButton>
  );
};

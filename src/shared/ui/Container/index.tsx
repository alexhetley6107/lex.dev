import { Container as MuiContainer, ContainerProps } from '@mui/material';
import React, { FC } from 'react';

type Props = ContainerProps;

export const Container: FC<Props> = ({ children, ...props }) => {
  return <MuiContainer {...props}>{children}</MuiContainer>;
};

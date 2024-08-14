import React, { FC } from 'react';
import { SvgIcon } from '@mui/material';
import { iconsMap } from './iconsMap';

type Props = {
  name: string;
};

export const Icon: FC<Props> = ({ name }) => {
  return <SvgIcon>{iconsMap[name]}</SvgIcon>;
};

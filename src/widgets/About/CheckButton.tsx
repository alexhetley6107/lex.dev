'use client';
import React from 'react';
import { ANCHOR, Button, useScroll } from '@/shared';

export const CheckButton = () => {
  const { scrollTo } = useScroll();

  const handleCheck = () => scrollTo(ANCHOR.CONTACTS);

  return <Button onClick={handleCheck}>Let's check!</Button>;
};

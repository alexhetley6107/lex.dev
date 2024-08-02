'use client';
import React from 'react';
import { ANCHOR, Button, ScrollService } from '@/shared';

export const CheckButton = () => {
  const handleCheck = () => ScrollService.toAnchor(ANCHOR.CONTACTS);

  return <Button onClick={handleCheck}>Let's check!</Button>;
};

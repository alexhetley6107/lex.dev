'use client';
import React, { FC } from 'react';
import { FadeContainer } from './FadeContainer';
import { FadeContent } from './FadeContent';

export const InitialAnimation: FC = () => {
  return (
    <FadeContainer>
      <FadeContent />
    </FadeContainer>
  );
};

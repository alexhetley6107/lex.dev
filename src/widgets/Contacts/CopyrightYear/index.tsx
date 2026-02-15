'use client';

import { getCurrentYear } from '@/shared';

export const CopyrightYear = () => {
  const year = getCurrentYear();
  return <>{year}</>;
};

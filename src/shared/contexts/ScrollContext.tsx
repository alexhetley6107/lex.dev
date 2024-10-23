'use client';
import { createContext, useContext } from 'react';
import { ANCHOR } from '../types';

interface IThemeState {
  isTop: boolean;
  scrollTo: (anchor: ANCHOR) => void;
}

export const ScrollContext = createContext<IThemeState>({
  isTop: true,
  scrollTo: () => {},
});

export const useScroll = () => {
  const { isTop, scrollTo } = useContext(ScrollContext);

  return { isTop, scrollTo };
};

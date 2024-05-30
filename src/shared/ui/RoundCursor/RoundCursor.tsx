'use client';
import { THEME_MODE } from '@/shared/lib';
import { useTheme } from '@mui/material';
import AnimatedCursor from 'react-animated-cursor';

export const RoundCursor = () => {
  const theme = useTheme();
  const color = theme.palette.mode === THEME_MODE.LIGHT ? '0, 0, 0' : '255, 255, 255';

  return (
    <AnimatedCursor
      innerSize={20}
      outerSize={20}
      color={color}
      outerAlpha={0.3}
      innerScale={0.7}
      outerScale={3}
      innerStyle={{
        border: '1px solid black',
        backgroundColor: 'transparent',
      }}

      // clickables={[
      //   'a',
      //   'input[type="text"]',
      //   'input[type="email"]',
      //   'input[type="number"]',
      //   'input[type="submit"]',
      //   'input[type="image"]',
      //   'label[for]',
      //   'select',
      //   'textarea',
      //   'button',
      //   '.link',
      // ]}
    />
  );
};

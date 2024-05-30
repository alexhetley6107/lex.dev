'use client';
import { ROUTE } from '@/shared/lib';
import { Box, ButtonProps, Button as MuiButton } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';

interface Props extends ButtonProps {
  href: string;
}

export const LinkButton: FC<Props> = ({ children, href, ...props }) => {
  const pathname = usePathname();
  const isHighLighted = href !== ROUTE.HOME && href === pathname;
  console.log({ pathname });

  return (
    <Link href={href}>
      <MuiButton
        {...props}
        sx={{
          color: 'secondary.dark',
          bgcolor: 'secondary.light',
          zIndex: 0,
          fontWeight: 600,
          position: 'relative',
          overflow: 'hidden',
          textTransform: 'capitalize',
          borderRadius: '6px',

          '@media (hover: hover)': {
            '&:hover': {
              // bgcolor: 'secondary.dark',
              bgcolor: isHighLighted ? 'primary.main' : 'secondary.dark',

              color: 'secondary.light',
              div: { left: '110%' },
            },
          },
          ...props.sx,
        }}
      >
        <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>

        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            transition: 'all 0.3s',
            bgcolor: 'secondary.light',
            borderRadius: '6px',
          }}
        />
      </MuiButton>
    </Link>
  );
};

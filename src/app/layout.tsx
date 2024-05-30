import { ThemeProvider } from '@/providers';
import { RoundCursor, ScreenBox } from '@/shared/ui';
import { Header } from '@/widgets';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

export const metadata: Metadata = {
  title: 'lex.dev',
  description: 'Portfolio',
};

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider>
          <ScreenBox>
            <Header />
            {children}
          </ScreenBox>
        </ThemeProvider>
      </body>
    </html>
  );
}

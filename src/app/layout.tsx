import { ThemeProvider } from '@/providers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'lex.dev',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

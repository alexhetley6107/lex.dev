import { ThemeProvider } from './providers';
import { Container } from '@/shared';
import { Header } from '@/widgets';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

export const metadata: Metadata = {
  title: 'lex.dev',
  description: 'Portfolio',
};

const nunito = Nunito({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
  fallback: ['Roboto', 'sans-serif'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ThemeProvider>
          <Header />
          <Container>
            <main>{children}</main>
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}

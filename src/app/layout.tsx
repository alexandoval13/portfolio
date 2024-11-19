import { Metadata } from 'next';
import { ThemeProvider } from '@mui/material/styles';
import { Lobster } from 'next/font/google';
import theme from '../theme';

export const metadata: Metadata = {
  title: 'Alexandra Sandoval | Full-Stack Software Engineer',
  description: 'Portfolio',
};

const lobster = Lobster({ weight: '400', preload: false });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body className={lobster.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}

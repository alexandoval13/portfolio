import { Metadata } from 'next';
// import { Lobster } from 'next/font/google';
import localFont from 'next/font/local';

const lobster = localFont({
  src: './fonts/Lobster.woff',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Alexandra Sandoval | Full-Stack Software Engineer',
  description: 'Portfolio',
};

// const lobster = Lobster({ weight: '400', preload: false });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lobster.className}>{children}</body>
    </html>
  );
}

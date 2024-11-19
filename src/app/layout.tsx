import { Metadata } from 'next';
// import { Lobster } from 'next/font/google';
import localFont from 'next/font/local';

const geist = localFont({
  src: './fonts/GeistMonoVF.woff',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Alexandra Sandoval | Full-Stack Software Engineer',
  description: `Alexandra's Portfolio Site`,
};

// const lobster = Lobster({ weight: '400', preload: false });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>{children}</body>
    </html>
  );
}

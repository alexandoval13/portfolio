import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alexandra Sandoval | Full-Stack Software Engineer',
  description: `Alexandra's Portfolio Site`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
          {`@import
          url('https://fonts.googleapis.com/css2?family=Carlito:ital,wght@0,400;0,700;1,400;1,700&family=Lobster&family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&display=swap');`}
        </style>
      </head>
      <body>{children}</body>
    </html>
  );
}

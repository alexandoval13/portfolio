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
        <style type="text/css">
          {`@import
          url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

            body {
              font-family: "Lobster";
            }
          `}
        </style>
      </head>
      <body>
        <div></div>
        {children}
      </body>
    </html>
  );
}

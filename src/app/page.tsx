'use client';

// import Link from 'next/link';
import { useState } from 'react';
import { ThemeProvider, Typography } from '@mui/material';
import theme from './theme/theme';

export default function Home() {
  const [name, setName] = useState<string | null>(null);

  const handleChange = (e: React.BaseSyntheticEvent) => {
    console.log({ eVal: e.target.value });
    setName(e.target.value);
  };

  const handleSubmitHello = () => {
    const nameL = name?.toLowerCase();
    if (nameL && (nameL === 'sebastian' || nameL === 'sebastián')) {
      alert(
        `Holaaa :) I think you're sweet, and kind, and smart, and so fucking incredible. But i know you can and will beat someone up... for real.`
      );
    } else {
      alert(`Hello${(name && ` ${name}`) || ''}`);
    }
  };

  return (
    <div>
      <title>Alexandra Sandoval | Full-Stack Software Engineer</title>
      <main>
        <ThemeProvider theme={theme}>
          <Typography
            variant={'h1'}
            // sx={{ color: theme.palette.primary.main }}
          >{`Hello,`}</Typography>

          <Typography variant="h2">
            {`My name is Alexandra Sandoval, I'm a Full-Stack Software Engineer.`}
          </Typography>
          <input placeholder="Name" onChange={handleChange}></input>
          <button onClick={handleSubmitHello}>Hello</button>
          {/* <div>
          <Link href="/resume">View Resume</Link>
          </div> */}
        </ThemeProvider>
      </main>
    </div>
  );
}

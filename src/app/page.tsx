'use client';

import Link from 'next/link';
import { useState } from 'react';

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
        <h1>
          {`Hi, my name is Alexandra Sandoval.`}
          <br />
          {`I'm a Full-Stack Software Engineer.`}
        </h1>
        <input placeholder="Name" onChange={handleChange}></input>
        <button onClick={handleSubmitHello}>Hello</button>
        <div>
          <Link href="/src/resume">View Resume</Link>
        </div>
      </main>
    </div>
  );
}

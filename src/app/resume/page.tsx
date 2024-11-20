'use client';
import dynamic from 'next/dynamic';

// Dynamically import the Resume component with SSR disabled
const DynamicResume = dynamic(() => import('../components/Resume'), {
  ssr: false,
});

const ResumePage = () => {
  return (
    <div>
      <h1>My Resume</h1>
      <DynamicResume />
    </div>
  );
};

export default ResumePage;

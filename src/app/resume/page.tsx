'use client';
// import DynamicComponentWithNoSSR from '../components/DynamicComponentWithNoSSR';
// import PdfViewer from '../components/PdfViewer';
import dynamic from 'next/dynamic';

const Resume = () => {
  const DynamicPdfViewer = dynamic(() => import('../components/PdfViewer'), {
    ssr: false,
  });

  return (
    <div>
      <DynamicPdfViewer path="/alexandra-sandoval-resume.pdf" />
    </div>
  );
};

export default Resume;

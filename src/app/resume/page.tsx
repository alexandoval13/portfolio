'use client';
import dynamic from 'next/dynamic';
// import { Document, Page } from 'react-pdf';

// Set the workerSrc globally for pdf.js
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.mjs',
//   import.meta.url
// ).toString();

// Dynamically import the Resume component with SSR disabled
const DynamicResume = dynamic(() => import('../components/Resume'), {
  ssr: false,
});

const ResumePage = () => {
  // const onDocumentLoadSuccess = () => console.log('success');

  return (
    <div>
      <h1>My Resume</h1>
      <DynamicResume />
      {/* <Document
        file={'/alexandra-sandoval-resume.pdf'}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={1} />
      </Document> */}
    </div>
  );
};

export default ResumePage;

'use client';

import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc =
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.mjs';

// import { worker } from 'pdfjs-dist/webpack';

// pdfjs.GlobalWorkerOptions.workerSrc = worker;

// import pdfjsWorker from '../../../node_modules/react-pdf/node_modules/pdfjs-dist/build/pdf.worker.min.mjs';
// //3.11.174 or 4.4.168

// pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url
// ).toString();

const Resume = () => {
  const onDocumentLoadSuccess = () => {
    console.log('success');
  };

  return (
    <div>
      <Document
        file={'/AlexandraSandoval-Resume.pdf'}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default Resume;

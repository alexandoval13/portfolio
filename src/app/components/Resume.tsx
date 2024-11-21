'use client';

import React from 'react';
import { Document, Page } from 'react-pdf';

import { pdfjs } from 'react-pdf';

// Set the workerSrc globally for pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js`;

const Resume = () => {
  const onDocumentLoadSuccess = () => {
    console.log('success');
  };

  return (
    <div>
      <Document
        file={'../../../public/alexandra-sandoval-resume.pdf'}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={1} />
      </Document>
      {/* <h1>My Resume</h1>

      <Document
        file="/alexandra-sandoval-resume.pdf" // Path to the PDF file in the public folder
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>

      <div>
        <button
          disabled={pageNumber === 1}
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          Previous
        </button>
        <span>{`Page ${pageNumber} of ${numPages}`}</span>
        <button
          disabled={pageNumber === numPages}
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default Resume;

'use client';

import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

import { pdfjs } from 'react-pdf';

// Set the workerSrc globally for pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <h1>My Resume</h1>
      {/* Document component renders the PDF */}
      <Document
        file="public/alexandra-sandoval-resume.pdf" // Path to the PDF file in the public folder
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {/* Render one page */}
        <Page pageNumber={pageNumber} />
      </Document>

      {/* Pagination controls */}
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
      </div>
    </div>
  );
};

export default Resume;

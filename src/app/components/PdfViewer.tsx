import React, { useRef, useEffect } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';

interface PdfViewerProps {
  path: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ path }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const renderPDF = async () => {
      // Set the worker source
      GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.3.122/pdf.worker.min.js`;

      try {
        const pdf = await getDocument(path).promise;
        const page = await pdf.getPage(1);

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        const viewport = page.getViewport({ scale: 2.0 }); // Increase scale for better quality

        // Adjust canvas size for high-DPI displays
        const outputScale = window.devicePixelRatio || 1;
        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = `${viewport.width}px`;
        canvas.style.height = `${viewport.height}px`;

        const transform =
          outputScale !== 1
            ? [outputScale, 0, 0, outputScale, 0, 0]
            : undefined;

        await page.render({
          canvasContext: context,
          viewport,
          transform,
        }).promise;
      } catch (error) {
        console.error('Error rendering PDF:', error);
      }
    };

    renderPDF();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default PdfViewer;

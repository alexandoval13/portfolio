import * as pdfjs from 'pdfjs-dist';

async function renderPDF(url: string, container: HTMLDivElement) {
  const loadingTask = pdfjs.getDocument(url);
  const pdf = await loadingTask.promise;

  const page = await pdf.getPage(1);
  const viewport = page.getViewport({ scale: 1 });

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (!context) return; // throw error or fail

  canvas.height = viewport.height;
  canvas.width = viewport.width;
  container.appendChild(canvas);

  const renderContext = {
    canvasContext: context,
    viewport,
  };

  page.render(renderContext);
}

const container = document.getElementById('pdf-container') as HTMLDivElement;

export const runRenderPDF = (path: string) => {
  return renderPDF(path, container);
};

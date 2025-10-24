import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

// Point pdf.js worker to a CDN (works with Vite, CRA, Next, etc.)
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

type Props = {
  file: string | File | Blob | ArrayBuffer; // e.g. "/example.pdf"
  maxWidth?: number;                         // optional page width cap
  className?: string;
};

export default function AutoSizedPdf({ file, maxWidth, className }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageWidth, setPageWidth] = useState<number | undefined>(undefined);

  // Observe container width so pages fit responsively
  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;

    const setWidth = () => {
      const w = el.clientWidth;
      setPageWidth(maxWidth ? Math.min(w, maxWidth) : w);
    };

    setWidth();
    const ro = new ResizeObserver(setWidth);
    ro.observe(el);
    return () => ro.disconnect();
  }, [maxWidth]);

  return (
    <div ref={containerRef} className={className} style={{ width: "100%" }}>
      <Document file={file} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
        {Array.from({ length: numPages }, (_, i) => (
          <div key={i} style={{ marginBottom: 16 }}>
            <Page pageNumber={i + 1} width={pageWidth} renderTextLayer renderAnnotationLayer />
          </div>
        ))}
      </Document>
    </div>
  );
}
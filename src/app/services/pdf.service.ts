import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export interface PdfOptions {
  fileName?: string;
  /** Scale factor for html2canvas rendering (2-3 is crisp on retina). */
  scale?: number;
  /** Add small margins on each page in points (1pt ≈ 1.333px). */
  marginPt?: number;
}

@Injectable({ providedIn: 'root' })
export class PdfService {
  async generateBlobFromElement(element: HTMLElement, options: PdfOptions = {}): Promise<Blob> {
    const { scale = 2, marginPt = 16 } = options;

    // Guard against zero dimensions which can cause non-finite canvas math
    const width = Math.max(
      1,
      Math.floor(
        (element.scrollWidth || element.clientWidth || element.offsetWidth || element.getBoundingClientRect().width || 0)
      )
    );
    const height = Math.max(
      1,
      Math.floor(
        (element.scrollHeight || element.clientHeight || element.offsetHeight || element.getBoundingClientRect().height || 0)
      )
    );

    // Render the element to canvas at high resolution for crisp PDF output
    const canvas = await html2canvas(element, {
      scale,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      // Using foreignObjectRendering avoids CanvasGradient.addColorStop issues from complex CSS gradients
      foreignObjectRendering: true,
      // Clamp to non-zero values; zero sizes can lead to non-finite gradient offsets in some browsers
      windowWidth: width,
      windowHeight: height,
    });

    const safeCanvasWidth = Math.max(1, canvas.width);
    const safeCanvasHeight = Math.max(1, canvas.height);
    const imageData = canvas.toDataURL('image/png');

    // Create A4 pdf in portrait
    const pdf = new jsPDF('p', 'pt', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth() - marginPt * 2;
    const pageHeight = pdf.internal.pageSize.getHeight() - marginPt * 2;

    // Calculate target image dimensions
    const imgWidth = pageWidth;
    const imgHeight = (safeCanvasHeight * imgWidth) / safeCanvasWidth; // keep aspect ratio

    let remainingHeight = imgHeight;
    let positionY = marginPt;

    // First page
    pdf.addImage(imageData, 'PNG', marginPt, positionY, imgWidth, imgHeight, undefined, 'FAST');
    remainingHeight -= pageHeight;
    positionY = marginPt - pageHeight;

    // Additional pages if the content is longer than one page
    while (remainingHeight > 0) {
      pdf.addPage();
      pdf.addImage(imageData, 'PNG', marginPt, positionY, imgWidth, imgHeight, undefined, 'FAST');
      remainingHeight -= pageHeight;
      positionY -= pageHeight;
    }

    return pdf.output('blob');
  }

  async downloadFromElement(element: HTMLElement, options: PdfOptions = {}): Promise<void> {
    const fileName = options.fileName || 'document.pdf';
    const blob = await this.generateBlobFromElement(element, options);

    // IE/Edge legacy
    const navAny = window.navigator as any;
    if (navAny && typeof navAny.msSaveOrOpenBlob === 'function') {
      navAny.msSaveOrOpenBlob(blob, fileName);
      return;
    }

    const blobUrl = URL.createObjectURL(blob);

    // Safari/iOS fallback: open in a new tab instead of forced download
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && (navigator as any).maxTouchPoints > 1);
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isIOS || isSafari) {
      window.open(blobUrl, '_blank');
      // Do not revoke immediately to allow the viewer to load
      setTimeout(() => URL.revokeObjectURL(blobUrl), 10000);
      return;
    }

    // Standard download
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(blobUrl);
  }
}

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

    // Render the element to canvas at high resolution for crisp PDF output
    const canvas = await html2canvas(element, {
      scale,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
    });

    const imageData = canvas.toDataURL('image/png');

    // Create A4 pdf in portrait
    const pdf = new jsPDF('p', 'pt', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth() - marginPt * 2;
    const pageHeight = pdf.internal.pageSize.getHeight() - marginPt * 2;

    // Calculate target image dimensions
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width; // keep aspect ratio

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
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(blobUrl);
  }
}

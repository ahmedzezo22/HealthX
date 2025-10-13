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

    // Ensure fonts and images are ready to avoid blank renders
    await Promise.all([
      (document as any).fonts?.ready?.catch?.(() => undefined),
      this.waitForImages(element),
    ]);

    // Guard against zero dimensions which can cause non-finite canvas math
    const width = Math.max(
      1,
      Math.floor(
        element.scrollWidth || element.clientWidth || element.offsetWidth || element.getBoundingClientRect().width || 0
      )
    );
    const height = Math.max(
      1,
      Math.floor(
        element.scrollHeight || element.clientHeight || element.offsetHeight || element.getBoundingClientRect().height || 0
      )
    );

    const renderCommon = {
      scale,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: width,
      windowHeight: height,
      scrollX: 0,
      scrollY: -window.scrollY,
      removeContainer: true,
    } as const;

    // Try foreignObjectRendering first (better CSS fidelity), then fallback to canvas renderer
    let canvas = await html2canvas(element, {
      ...renderCommon,
      foreignObjectRendering: true,
    }).catch(() => undefined as unknown as HTMLCanvasElement);

    if (!canvas || this.isCanvasBlank(canvas)) {
      canvas = await html2canvas(element, {
        ...renderCommon,
        foreignObjectRendering: false,
        allowTaint: true,
      });
    }

    const safeCanvasWidth = Math.max(1, canvas.width);
    const safeCanvasHeight = Math.max(1, canvas.height);
    const imageData = canvas.toDataURL('image/png');

    // Create A4 pdf in portrait
    const pdf = new jsPDF('p', 'pt', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth() - marginPt * 2;
    const pageHeight = pdf.internal.pageSize.getHeight() - marginPt * 2;

    // Calculate target image dimensions (keep aspect ratio)
    const imgWidth = pageWidth;
    const imgHeight = (safeCanvasHeight * imgWidth) / safeCanvasWidth;

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

  private async waitForImages(root: HTMLElement): Promise<void> {
    const images = Array.from(root.querySelectorAll('img')) as HTMLImageElement[];
    if (images.length === 0) return;
    await Promise.all(
      images.map((img) =>
        img.complete && img.naturalWidth > 0
          ? Promise.resolve()
          : new Promise<void>((resolve) => {
              img.addEventListener('load', () => resolve(), { once: true });
              img.addEventListener('error', () => resolve(), { once: true });
            })
      )
    );
  }

  private isCanvasBlank(canvas: HTMLCanvasElement): boolean {
    try {
      const ctx = canvas.getContext('2d');
      if (!ctx) return false;
      const { width, height } = canvas;
      const data = ctx.getImageData(0, 0, Math.min(16, width), Math.min(16, height)).data;
      // If all sampled pixels are white/transparent, treat as blank
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];
        if (!(a === 0 || (r === 255 && g === 255 && b === 255))) {
          return false;
        }
      }
      return true;
    } catch {
      return false;
    }
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

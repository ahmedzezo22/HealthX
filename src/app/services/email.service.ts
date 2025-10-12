import { Injectable } from '@angular/core';

export interface EmailPayload {
  to: string;
  subject: string;
  bodyText?: string; // Plain text for quick previews
  bodyHtml?: string; // Optional HTML version
}

@Injectable({ providedIn: 'root' })
export class EmailService {
  /**
   * Stub sendEmail method. In production, post the FormData or JSON + Blob
   * to your server API. Here we only simulate by logging and returning success.
   */
  async sendEmailWithAttachment(payload: EmailPayload, attachment: Blob, fileName = 'document.pdf'): Promise<{ ok: boolean }> {
    try {
      // This is where you'd call your backend API, e.g.:
      // const formData = new FormData();
      // formData.append('to', payload.to);
      // formData.append('subject', payload.subject);
      // formData.append('bodyText', payload.bodyText ?? '');
      // formData.append('file', attachment, fileName);
      // await fetch('/api/send-email', { method: 'POST', body: formData });

      // For now, only demo the attachment size and recipient
      console.log('Email stub -> to:', payload.to, 'subject:', payload.subject, 'file:', fileName, 'size:', attachment.size);

      // Simulate latency
      await new Promise((res) => setTimeout(res, 600));
      return { ok: true };
    } catch (error) {
      console.error('sendEmailWithAttachment failed', error);
      return { ok: false };
    }
  }
}

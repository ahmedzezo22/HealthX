import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PdfService } from '../../services/pdf.service';
import { EmailService, EmailPayload } from '../../services/email.service';

interface ReportData {
  name: string;
  mrn: string;
  dob: string;
  nationality: string;
  clinic: string;
  doctor: string;
  status: 'In-patient' | 'Outpatient' | 'Emergency patient' | '';
  dateOfIncident: string;
  timeOfIncident: string;
  incidentLocation: string;
  department: string;
  briefDescription: string;
}

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  @ViewChild('pdfArea', { static: false }) pdfAreaRef?: ElementRef<HTMLDivElement>;

  form: ReportData = {
    name: '',
    mrn: '',
    dob: '',
    nationality: '',
    clinic: '',
    doctor: '',
    status: '',
    dateOfIncident: '',
    timeOfIncident: '',
    incidentLocation: '',
    department: '',
    briefDescription: ''
  };

  emailTo = '';

  constructor(private pdf: PdfService, private email: EmailService) {}

  async downloadPdf() {
    if (!this.pdfAreaRef) return;
    await this.pdf.downloadFromElement(this.pdfAreaRef.nativeElement, {
      fileName: 'occurrence-report.pdf',
      scale: 2
    });
  }

  async sendEmail() {
    if (!this.pdfAreaRef) return;
    const blob = await this.pdf.generateBlobFromElement(this.pdfAreaRef.nativeElement, { scale: 2 });

    const payload: EmailPayload = {
      to: this.emailTo,
      subject: 'Occurrence / Variance Report',
      bodyText: 'Please find the attached occurrence report PDF.'
    };

    const res = await this.email.sendEmailWithAttachment(payload, blob, 'occurrence-report.pdf');
    alert(res.ok ? 'Email queued (stub).' : 'Failed to send (stub).');
  }
}

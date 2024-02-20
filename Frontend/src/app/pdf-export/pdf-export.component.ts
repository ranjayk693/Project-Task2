import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebScrapingService } from '../services/web-scraping.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import internal from 'stream';

@Component({
  selector: 'app-pdf-export',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pdf-export.component.html',
  styleUrl: './pdf-export.component.css',
})
export class PdfExportComponent {
  url: string = '';
  pdfContent: string = '';
  constructor(private webScraping: WebScrapingService) {}

  ngOnInit() {
    this.webScraping
      .getData()
      .then((response) => {
        // console.log(response.data.content);
        this.pdfContent = response.data.content;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async captureWebPageContent() {
    // try {
    //   this.pdfContent = await this.webScraping.scrapeWebPage(this.url);
    // } catch (error: any) {
    //   console.error(error.message);
    // }
  }

  async exportAsPdf() {
    const element = document.getElementById('pdf-content');
    if (element) {
      html2canvas(element).then((canvas) => {
        const width = canvas.width;
        const height = canvas.height;
        const pdf = new jsPDF('p', 'pt');
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 0, 0, width, height);
        pdf.save('web-page-content.pdf');
      });
    } else {
      console.error('Element with ID "pdf-content" not found.');
    }
  }
}

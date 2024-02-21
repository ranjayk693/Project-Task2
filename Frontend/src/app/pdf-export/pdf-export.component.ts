import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebScrapingService } from '../services/web-scraping.service';
import html2canvas from 'html2canvas';



@Component({
  selector: 'app-pdf-export',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,],
  templateUrl: './pdf-export.component.html',
  styleUrl: './pdf-export.component.css',
})

export class PdfExportComponent {
  url=new FormControl('');
  pdfContent: string = '';
  IsSpin:boolean=true;
  ISContent:boolean=false;
  constructor(private webScraping: WebScrapingService) {}


  onSubmitURL() {
    const weburl: string = this.url.value!;
    this.webScraping.sendData(weburl)
      .then((response) => {
        console.log(response)
        this.ISContent='code' in response.data;
        this.IsSpin=false;
        // if(this.ISContent){
        //   this.pdfContent=response.data.content;
        // }
        // console.log("response from server side :",typeof response.data.content);
      })
      .catch((error) => {
        console.log("Failed to connect with Server");
      });
  }

  exportAsPdf() {
    // const element = document.getElementById('pdf-content');
    // const htmlFile=this.pdfContent;
    // const div=document.createElement('div');
    // const bodyElement = div.querySelector('body');
    // div.innerHTML=htmlFile;
    // console.log(div)
  
    
    
    if (true) {
      // html2canvas(div).then((canvas) => {
      //   const width = canvas.width;
      //   const height = canvas.height;
      //   const pdf = new jsPDF('p', 'pt');
      //   const imgData = canvas.toDataURL('image/png');
      //   pdf.addImage(imgData, 'PNG', 0, 0, width, height);
      //   pdf.save('web-page-content.pdf');
      // });
  //     const doc = new jsPDF();
  //  doc.html(div, {
  //   callback: (doc) => {
  //     doc.save('web-page-content.pdf');
  //   }
  // });
    }
  };

  // convertToPdf() {
  //   // Assume htmlContent is the HTML content coming from the API
  //   const htmlContent = this.pdfContent;
  //   const element = document.createElement('div');
  //   element.innerHTML = htmlContent;

  //   // Extract CSS styles from the <head> section of the HTML content
  //   const styleElement = document.createElement('style');
  //   const headElement = document.createElement('head');
  //   headElement.innerHTML = htmlContent.match(/<head>([\s\S]*?)<\/head>/)?.[0] ?? '';
  //   const styleSheets = headElement.querySelectorAll('style, link[rel="stylesheet"]');
  //   styleSheets.forEach((styleSheet) => {
  //     styleElement.appendChild(styleSheet.cloneNode(true));
  //   });

    // html2pdf(element, {
    //   style: styleElement.innerHTML
    // });

    // html2pdf(element)
//   }

 
}

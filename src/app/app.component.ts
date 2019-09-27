import { Component } from '@angular/core';
import * as html2pdf from 'html2pdf.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'htmlToPdf';

  downloadPdf() {
    const element = document.body;
    const opt = {
      margin: 1,
      filename: 'myfile.pdf',
      image: { type: 'png' },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf(element, opt);
  }
}

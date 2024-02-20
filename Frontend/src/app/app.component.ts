import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PdfExportComponent } from './pdf-export/pdf-export.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PdfExportComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pdf-exporter';
}

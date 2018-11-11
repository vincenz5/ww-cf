import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whitepaper',
  template: `
    <div>
      <label>PDF src</label>
    </div>
    <pdf-viewer
      [src]="pdfSrc"
      [render-text]="true"
      style="display: block;"
    ></pdf-viewer>
  `,
  styleUrls: ['./whitepaper.component.scss']
})
export class WhitepaperComponent implements OnInit {
  constructor() {}

  pdfSrc = '../assets/whitepaper.pdf';

  ngOnInit() {}
}

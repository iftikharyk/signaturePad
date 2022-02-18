import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild(SignaturePad) signaturePad: SignaturePad | undefined;

  title = 'signaturePad';
  signatureImg: any  = '';

  signaturePadOptions: Object = { 
    'minWidth': 2,
    'canvasWidth': 700,
    'canvasHeight': 300
  };

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.signaturePad?.set('minWidth', 2); 
    this.signaturePad?.clear();
  }

  drawStart() {
    console.log('begin drawing');
  }

  drawComplete() {
    console.log('end drawing');
    console.log(this.signaturePad?.toDataURL());
  }

  clearSignature() {
    this.signaturePad?.clear();
  }

  savePad() {
    const base64Data = this.signaturePad?.toDataURL();
    this.signatureImg = base64Data;
  }

}

import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {STANDARD_SEG_MAPPING} from './seg-mapping';

@Component({
  selector: 'lib-seven-seg-digit',
  templateUrl: './seven-seg-digit.component.html',
  styleUrls: ['./seven-seg-digit.component.css']
})
export class SevenSegDigitComponent implements OnInit, OnChanges {
  @Input('digit') digit = '';
  @Input('color') color = 'black';
  @Input('thickness') thickness = '12px';
  @Input('width') width = '0px';
  @Input('height') height = '18px';
  @ViewChild('box1') box1: ElementRef<HTMLDivElement>;
  @ViewChild('box2') box2: ElementRef<HTMLDivElement>;
  box1Style: object;
  box2Style: object;
  private segments = STANDARD_SEG_MAPPING;

  recalc(s: object): object {
    const o = s;
    for (const k in o) {
      o[k] = this.sanitizer.bypassSecurityTrustStyle(o[k]);
    }
    return o;
  }

  setStyle(e: HTMLElement, s: object): void {
    console.log([e, s]);
    for (const k in s) {
      e.style[k] = this.sanitizer.bypassSecurityTrustStyle(s[k]);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setStyle(this.box1.nativeElement, {
      borderWidth: this.thickness + ' solid  transparent',
      borderBottomWidth: 'calc(0.5*' + this.thickness + ')',
      width: 'calc(' + this.width + '-4*' + this.thickness + ')',
      height: 'calc(0.5*' + this.height + '-1.5*' + this.thickness + ')'
    });
    this.setStyle(this.box2.nativeElement, {
      border: this.thickness + ' solid ' + this.color,
      borderTopWidth: 'calc(0.5*' + this.thickness + ')',
      width: 'calc(' + this.width + '-4*' + this.thickness + ')',
      height: 'calc(0.5*' + this.height + '-1.5*' + this.thickness + ')'
    });
  }


  get segState(): {[key: string]: boolean} {
    const s = {};
    for (const k of 'ABCDEFG.') {
      s[k] = false;
    }
    for (const d of this.digit) {
      for (const k of this.segments[d]) {
        s[k] = true;
      }
    }
    return s;
  }

  constructor(public sanitizer: DomSanitizer) {
    for (const k in this.segments) {
      if (!this.segments[k.toLowerCase()]) {
        this.segments[k.toLowerCase()] = this.segments[k];
      }
      if (!this.segments[k.toUpperCase()]) {
        this.segments[k.toUpperCase()] = this.segments[k];
      }
    }
  }


  ngOnInit() {
    console.log({'init digit': this.digit});
  }

}

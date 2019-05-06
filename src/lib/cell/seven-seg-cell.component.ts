import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {STANDARD_SEG_MAPPING} from '../seg-mapping';

// import {sanitizeStyle} from '@angular/core/src/sanitization/sanitization';

@Component({
  selector: 'lib-seven-seg-cell',
  templateUrl: './seven-seg-cell.component.html',
  styleUrls: ['./seven-seg-cell.component.css']
})
export class SevenSegCellComponent implements OnInit, OnChanges {
  /* This property setter intercept changes int digit-state input,
     and build a dictionary with a logical mask that specify
     what segments are visible.
 */
  horizontalH: number;
  horizontalW: number;
  verticalW: number;
  verticalH: number;
  segState: {[key: string]:boolean;};
  _digit = '';
  @Input('digit') set digit(digit: string) {
    const s = {};
    this._digit = digit;
    for (const k of 'ABCDEFG.,:') {
      s[k] = false;
    }
    // the user may specify any custom character using a sintax similar to
    // entities, &.*; the character will be the combination of all the segments
    // whose identifier is present in the entity.
    if (this.digit[0] === '&') {
      for (const k of this._digit) {
        if (k !== ';' && k !== '&') {
          s[k] = true;
        }
      }
    } else {
      for (const d of this._digit) {
        for (const k of this.segments[d]) {
          s[k] = true;
        }
      }
    }
    this.segState = s;
  }

  get digit(): string {
    return this._digit;
  }

  // Style and dimensions are not supposed to change all the time
  // and when they change there are a lot of properties of the html
  // elements that will change, thus instead of writing setters and
  // getters a global input change callback will be issued.
  @Input('color') color = 'black';
  @Input('spacing') spacing = 0;
  @Input('thickness') thickness = 6;
  @Input('width') width = 30;
  @Input('height') height = 34;

  // gather all the
  @ViewChild('bed') bed: ElementRef<HTMLDivElement>;

  ngOnChanges(changes: SimpleChanges): void {
    this.fit();
  }

  fit(): void {
    let el: HTMLDivElement;
    const w = this.width;
    const t = this.thickness;
    const h = this.height;
    const elements = {};
    const styleMeasure = (d: number): string => d + 'px';

    this.bed.nativeElement.style.width = styleMeasure(w);
    this.bed.nativeElement.style.height = styleMeasure(h);
    this.bed.nativeElement.style.top = styleMeasure(0);
    this.bed.nativeElement.style.left = styleMeasure(0);

    // I did not find a way to iterate over elements, so I am doing using
    // native DOM method.
    for (el = this.bed.nativeElement.firstChild as HTMLDivElement;
         el !== null; el = el.nextSibling as HTMLDivElement) {
      elements[el.id] = el;
    }

    ///////////////////////////////////////////////////////////////
    //  Set color
    //////////////////////////////////////////////////////////////
    for (const id of 'ABCDEFG') {
      elements[id].style.backgroundColor = 'transparent';
    }
    for (const id of '.:,') {
      elements[id].style.backgroundColor = this.color;
    }

    ///////////////////////////////////////////////////////////////
    ///  Set size
    ///////////////////////////////////////////////////////////////
    this.horizontalW = w - 1.5 * t;
    this.horizontalH = t;
    for (const id of 'ADG') // horizontal elements
    {
      el = elements[id];
      el.style.width = styleMeasure(w - 1.5 * t);
      el.style.height = styleMeasure(t);
    }
    this.verticalW = t;
    this.verticalH = 0.5 * h;
    for (const id of 'BCEF') // vertical elements
    {
      el = elements[id];
      el.style.width = styleMeasure(t);
      el.style.height = styleMeasure(0.5 * h);
    }
    elements['.'].style.width = styleMeasure(t);
    elements['.'].style.height = styleMeasure(t);
    elements[':'].style.width = styleMeasure(t);
    elements[':'].style.height = styleMeasure(t);
    elements[','].style.width = styleMeasure(0.5 * t);
    elements[','].style.height = styleMeasure(t);

    ///////////////////////////////////////////////////////////
    /// Set position
    ///////////////////////////////////////////////////////////

    // ** left

    // ADEFG all have left = 0;
    for (const id of 'ADEFG') {
      elements[id].style.left = styleMeasure(0);
    }
    // the segments on the right hand side (1)
    for (const id of 'BC') // vertical elements
    {
      elements[id].style.left = styleMeasure(w - 2.5 * t);
    }
    for (const id of '.:') {
      elements[id].style.left = styleMeasure(w - 1.5 * t);
    }
    elements[','].style.left = styleMeasure(w - t);

    // ** top
    for (const id of 'ABF') {
      elements[id].style.top = styleMeasure(0);
    }
    for (const id of 'CEG:') // segments of n
    {
      elements[id].style.top = styleMeasure(0.5 * h - t);
    }
    for (const id of 'D.') {
      elements[id].style.top = styleMeasure(h - 2 * t);
    }
    console.log([this.spacing, this.thickness, this.horizontalH, this.horizontalW, this.verticalW, this.verticalH]);
    elements[','].style.top = styleMeasure(h - t);
    console.log('style changed');
  }


  private segments = STANDARD_SEG_MAPPING;

  recalc(s: object): object {
    const o = s;
    for (const k in o) {
      o[k] = this.sanitizer.bypassSecurityTrustStyle(o[k]);
    }
    console.log(o);
    return o;
  }

  constructor(private sanitizer: DomSanitizer) {
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

  }

}

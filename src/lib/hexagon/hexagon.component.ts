import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-hexagon',
  templateUrl: './hexagon.component.html',
  styleUrls: ['./hexagon.component.css']
})
export class HexagonComponent implements OnInit {
  @Input('color') color = 'black';

  @Input('spacing') set spacing(value: number) {
    this.s = value;
    this.fit();
  }

  get spacing(): number {
    return this.s;
  }

  @Input('width') set width(value: number) {
    this.w = value;
    this.fit();
  }

  get width(): number {
    return this.w;
  }

  @Input('height') set height(value: number) {
    this.h = value;
    this.fit();
  }

  get height(): number {
    return this.h;
  }

  h: number;
  w: number;
  s: number;
  t: number;
  sw: number;
  sh: number;
  x0: number;
  y0: number;
  x1: number;
  y1: number;

  fit(): void {
    const w = this.width;
    const h = this.height;
    const s = this.spacing * Math.sqrt(2);
    let sw: number;
    let sh: number;
    let x0: number;
    let y0: number;
    let x1: number;
    let y1: number;
    let t: number;
    if (w < h) { // vertical
      t = w / 2;
      x0 = -t;
      x1 = t;
      y0 = t + s / 2;
      y1 = t + s / 2;
      sw = 0;
      sh = h - 4 * t - s;
    } else { // horizontal
      t = h / 2;
      x0 = t + s / 2;
      x1 = t + s / 2;
      y0 = -t;
      y1 = t;
      sw = w - 4 * t - s;
      sh = 0;
    }
    this.t = t;
    this.x0 = x0;
    this.y0 = y0;
    this.x1 = x1;
    this.y1 = y1;
    this.sw = sw;
    this.sh = sh;
    console.log({w: w, h: h, t: t, s: s});
  }

  constructor() {
  }

  ngOnInit() {
    this.fit();
  }

}

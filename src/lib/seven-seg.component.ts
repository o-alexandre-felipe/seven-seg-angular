import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'lib-seven-seg',
  template: `
    <span *ngFor="let d of digitState">
      <lib-seven-seg-cell [digit]="d" [color]="color"
        [width]="width" [height]="height"
        [spacing]="spacing" [thickness]="thickness"></lib-seven-seg-cell>
    </span>
  `,
  styles: []
})

export class SevenSegComponent implements OnInit {
  @Input('count') nDigs = 8;
  @Input('chars') value = '';
  @Input('thickness') thickness = 3;
  @Input('char-width') width = 18;
  @Input('char-height') height = 42;
  @Input('color') color = 'black';
  @Input('spacing') spacing = 0.5;
  get digitState(): string[] {
    const m = this.value.match(/(&[^;]*;?|.)([.,:;]?)/g);
    const result = [];
    for ( let i = 0; i < this.nDigs; ++i ) {
      if (i + m.length < this.nDigs) {
        result.push('');
      } else {
        result.push(m[i + m.length - this.nDigs]);
      }
    }
    return result;
  }
  indices: number [];
  constructor() {
  }

  ngOnInit() { }

}

import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, Input, ViewChild, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SevenSegComponent {
    constructor() {
        this.nDigs = 8;
        this.value = '';
        this.thickness = 3;
        this.width = 18;
        this.height = 42;
        this.color = 'black';
        this.spacing = 0.5;
    }
    /**
     * @return {?}
     */
    get digitState() {
        /** @type {?} */
        const m = this.value.match(/(&[^;]*;?|.)([.,:;]?)/g);
        /** @type {?} */
        const result = [];
        for (let i = 0; i < this.nDigs; ++i) {
            if (i + m.length < this.nDigs) {
                result.push('');
            }
            else {
                result.push(m[i + m.length - this.nDigs]);
            }
        }
        return result;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SevenSegComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-seven-seg',
                template: `
    <span *ngFor="let d of digitState">
      <lib-seven-seg-cell [digit]="d" [color]="color"
        [width]="width" [height]="height"
        [spacing]="spacing" [thickness]="thickness"></lib-seven-seg-cell>
    </span>
  `
            }] }
];
/** @nocollapse */
SevenSegComponent.ctorParameters = () => [];
SevenSegComponent.propDecorators = {
    nDigs: [{ type: Input, args: ['count',] }],
    value: [{ type: Input, args: ['chars',] }],
    thickness: [{ type: Input, args: ['thickness',] }],
    width: [{ type: Input, args: ['char-width',] }],
    height: [{ type: Input, args: ['char-height',] }],
    color: [{ type: Input, args: ['color',] }],
    spacing: [{ type: Input, args: ['spacing',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const STANDARD_SEG_MAPPING = {
    0: 'ABCDEF',
    1: 'BC',
    2: 'ABGED',
    3: 'ABGCD',
    4: 'BCFG',
    5: 'AFGCD',
    6: 'ACDEFG',
    7: 'ABCF',
    8: 'ABCDEFG',
    9: 'ABCDFG',
    '-': 'G',
    A: 'ABCEFG',
    a: 'ABCDEG',
    B: 'CDEFG',
    C: 'DEFA',
    c: 'DEG',
    D: 'BCDEG',
    E: 'ADEFG',
    e: 'ABDEFG',
    F: 'AEFG',
    G: 'ACDEF',
    H: 'BCEFG',
    h: 'CEFG',
    i: 'C',
    J: 'BCDE',
    L: 'FED',
    n: 'CEG',
    N: 'ABCEF',
    o: 'CDEG',
    O: 'ABCDEF',
    P: 'ABEFG',
    q: 'ABCFG',
    r: 'EG',
    s: 'ACDFG',
    t: 'DEFG',
    U: 'BCDEF',
    u: 'CDE',
    V: 'BCDEF',
    // same as U
    v: 'CDE',
    // same as u
    Y: 'BEFG',
    '&o;': 'ABFG',
    '\'': 'F',
    '\"': 'BF',
    _: 'D',
    '=': 'DG',
    '[': 'ADEF',
    ']': 'ABCD',
    ';': ':.,',
    ',': '.,',
    '.': '.',
    ':': ':.',
    ' ': ''
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SevenSegDigitComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.digit = '';
        this.color = 'black';
        this.thickness = '12px';
        this.width = '0px';
        this.height = '18px';
        this.segments = STANDARD_SEG_MAPPING;
        for (const k in this.segments) {
            if (!this.segments[k.toLowerCase()]) {
                this.segments[k.toLowerCase()] = this.segments[k];
            }
            if (!this.segments[k.toUpperCase()]) {
                this.segments[k.toUpperCase()] = this.segments[k];
            }
        }
    }
    /**
     * @param {?} s
     * @return {?}
     */
    recalc(s) {
        /** @type {?} */
        const o = s;
        for (const k in o) {
            o[k] = this.sanitizer.bypassSecurityTrustStyle(o[k]);
        }
        return o;
    }
    /**
     * @param {?} e
     * @param {?} s
     * @return {?}
     */
    setStyle(e, s) {
        console.log([e, s]);
        for (const k in s) {
            e.style[k] = this.sanitizer.bypassSecurityTrustStyle(s[k]);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
    /**
     * @return {?}
     */
    get segState() {
        /** @type {?} */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log({ 'init digit': this.digit });
    }
}
SevenSegDigitComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-seven-seg-digit',
                template: "\n<div #digitBed>\n <!-- <div class=\"seg-horizontal\" [class.display-bottom]=\"segState.A\"></div>\n  <div class=\"seg-vertical\" [class.display-right]=\"segState.F\"></div> -->\n  <div [class.display-left]  =\"segState.F\"\n       [class.display-top]   =\"segState.A\"\n       [class.display-right] =\"segState.B\"\n       [class.display-bottom]=\"segState.G\"\n       #box1>\n  </div>\n  <!--\n  <div class=\"set-vertical\" [class.display-left]=\"segState.B\"></div>\n  <div class=\"seg-vertical\" [class.display-right]=\"segState.E\"></div>\n  -->\n  <div [class.display-left]  =\"segState.E\"\n       [class.display-top]   =\"segState.G\"\n       [class.display-right] =\"segState.C\"\n       [class.display-bottom]=\"segState.D\"\n       #box2>\n  </div>\n  <!--\n  <div class=\"set-vertical\" [class.display-top]=\"segState.C\"></div>\n  <div class=\"seg-horizontal\" [class.display-bottom]=\"segState.D\"></div>\n  -->\n\n</div>\n\n<div class=\"point-bed\" [ngStyle]=\"{'width': sanitizer.bypassSecurityTrustStyle('calc(1.5*'+thickness+')'),\n    'padding':sanitizer.bypassSecurityTrustStyle('calc(0.5*'+thickness+')'),\n  'height': height}\">\n  <div class=\"point0\" [class.point-on]=\"segState[':']\"\n       [ngStyle]=\"{'background-color': color, 'width': thickness,'height': thickness,\n       'top':sanitizer.bypassSecurityTrustStyle('calc(2*'+thickness+')')}\"></div>\n  <div class=\"point1\" [class.point-on]=\"segState['.']\"\n       [ngStyle]=\"{'background-color': color, 'width': thickness,'height': thickness,\n       'top':sanitizer.bypassSecurityTrustStyle('calc(' + height + '-2*'+thickness+')')}\"></div>\n</div>\n",
                styles: ["div.bed{position:relative;display:inline-block;overflow:hidden;border:2px dashed #000;width:27px;height:42px}div#box1{width:15px;height:15px;position:inherit;top:0;border:6px solid transparent;border-bottom-width:3px;border-radius:0}div#box2{width:15px;height:15px;position:inherit;bottom:0;border:6px solid transparent;border-top-width:3px;border-radius:0}div.seg-horizontal{width:15px;height:0}div.seg-vertical{width:0;height:15px}div.seg-box{width:15px;height:15px;border:6px solid transparent}div.display-left{border-left-color:inherit}div.display-right{border-right-color:inherit}div.display-top{border-top-color:inherit}div.display-bottom{border-bottom-color:inherit}div.point-bed{position:inherit;border:0;margin:0;top:0;right:0;display:inline-block;width:10px;height:42px}div.point1{position:relative;top:20px;visibility:hidden}div.point0{position:relative;top:5px;visibility:hidden}div.point-on{visibility:visible}"]
            }] }
];
/** @nocollapse */
SevenSegDigitComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
SevenSegDigitComponent.propDecorators = {
    digit: [{ type: Input, args: ['digit',] }],
    color: [{ type: Input, args: ['color',] }],
    thickness: [{ type: Input, args: ['thickness',] }],
    width: [{ type: Input, args: ['width',] }],
    height: [{ type: Input, args: ['height',] }],
    box1: [{ type: ViewChild, args: ['box1',] }],
    box2: [{ type: ViewChild, args: ['box2',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import {sanitizeStyle} from '@angular/core/src/sanitization/sanitization';
class SevenSegCellComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this._digit = '';
        // Style and dimensions are not supposed to change all the time
        // and when they change there are a lot of properties of the html
        // elements that will change, thus instead of writing setters and
        // getters a global input change callback will be issued.
        this.color = 'black';
        this.spacing = 0;
        this.thickness = 6;
        this.width = 30;
        this.height = 34;
        this.segments = STANDARD_SEG_MAPPING;
        for (const k in this.segments) {
            if (!this.segments[k.toLowerCase()]) {
                this.segments[k.toLowerCase()] = this.segments[k];
            }
            if (!this.segments[k.toUpperCase()]) {
                this.segments[k.toUpperCase()] = this.segments[k];
            }
        }
    }
    /**
     * @param {?} digit
     * @return {?}
     */
    set digit(digit) {
        /** @type {?} */
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
        }
        else {
            for (const d of this._digit) {
                for (const k of this.segments[d]) {
                    s[k] = true;
                }
            }
        }
        this.segState = s;
    }
    /**
     * @return {?}
     */
    get digit() {
        return this._digit;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.fit();
    }
    /**
     * @return {?}
     */
    fit() {
        /** @type {?} */
        let el;
        /** @type {?} */
        const w = this.width;
        /** @type {?} */
        const t = this.thickness;
        /** @type {?} */
        const h = this.height;
        /** @type {?} */
        const elements = {};
        /** @type {?} */
        const styleMeasure = (/**
         * @param {?} d
         * @return {?}
         */
        (d) => d + 'px');
        this.bed.nativeElement.style.width = styleMeasure(w);
        this.bed.nativeElement.style.height = styleMeasure(h);
        this.bed.nativeElement.style.top = styleMeasure(0);
        this.bed.nativeElement.style.left = styleMeasure(0);
        // I did not find a way to iterate over elements, so I am doing using
        // native DOM method.
        for (el = (/** @type {?} */ (this.bed.nativeElement.firstChild)); el !== null; el = (/** @type {?} */ (el.nextSibling))) {
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
    /**
     * @param {?} s
     * @return {?}
     */
    recalc(s) {
        /** @type {?} */
        const o = s;
        for (const k in o) {
            o[k] = this.sanitizer.bypassSecurityTrustStyle(o[k]);
        }
        console.log(o);
        return o;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SevenSegCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-seven-seg-cell',
                template: "<div #bed class=\"bed\">\n  <div class=\"seg horizontal\" id=\"A\" [class.on]=\"segState['A']\">\n    <lib-hexagon [width]=\"horizontalW\" [height]=\"horizontalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg vertical\" id=\"B\" [class.on]=\"segState['B']\">\n    <lib-hexagon [width]=\"verticalW\" [height]=\"verticalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg vertical\" id=\"C\" [class.on]=\"segState['C']\">\n    <lib-hexagon [width]=\"verticalW\" [height]=\"verticalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg horizontal\" id=\"D\" [class.on]=\"segState['D']\">\n    <lib-hexagon [width]=\"horizontalW\" [height]=\"horizontalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg vertical\" id=\"E\" [class.on]=\"segState['E']\">\n    <lib-hexagon [width]=\"verticalW\" [height]=\"verticalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg vertical\" id=\"F\" [class.on]=\"segState['F']\">\n    <lib-hexagon [width]=\"verticalW\" [height]=\"verticalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg horizontal\" id=\"G\" [class.on]=\"segState['G']\">\n    <lib-hexagon [width]=\"horizontalW\" [height]=\"horizontalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg dot\" id=\".\" [class.on]=\"segState['.']\"></div>\n  <div class=\"seg colon\" id=\":\" [class.on]=\"segState[':']\"></div>\n  <div class=\"seg comma\" id=\",\" [class.on]=\"segState[',']\"></div>\n</div>\n",
                styles: ["div.bed{position:relative;display:inline-block;top:0;left:0;width:30px;height:40px}div.seg{position:absolute;display:block;background-color:#800;visibility:hidden}div.horizontal{width:20px;height:6px;left:0}div.vertical{width:6px;height:20px}div#A{top:0;left:0}div#B{left:14px;top:0}div#C{left:14px;top:14px}div#E,div#G{left:0;top:14px}div#D{left:0;top:28px}div#F{left:0;top:0}div.dot{top:28px;left:21.5px;width:6px;height:6px}div.colon{top:14px;left:21.5px;width:6px;height:6px}div.comma{top:34px;left:24px;width:3px;height:6px}div.on{visibility:visible}"]
            }] }
];
/** @nocollapse */
SevenSegCellComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
SevenSegCellComponent.propDecorators = {
    digit: [{ type: Input, args: ['digit',] }],
    color: [{ type: Input, args: ['color',] }],
    spacing: [{ type: Input, args: ['spacing',] }],
    thickness: [{ type: Input, args: ['thickness',] }],
    width: [{ type: Input, args: ['width',] }],
    height: [{ type: Input, args: ['height',] }],
    bed: [{ type: ViewChild, args: ['bed',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HexagonComponent {
    constructor() {
        this.s = 0;
        this.color = 'black';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set width(value) {
        this.w = value;
        this.fit();
    }
    /**
     * @return {?}
     */
    get width() { return this.w; }
    /**
     * @param {?} value
     * @return {?}
     */
    set height(value) {
        this.h = value;
        this.fit();
    }
    /**
     * @return {?}
     */
    get height() { return this.h; }
    /**
     * @return {?}
     */
    fit() {
        /** @type {?} */
        const w = this.w;
        /** @type {?} */
        const h = this.h;
        /** @type {?} */
        const s = this.s;
        /** @type {?} */
        let sw;
        /** @type {?} */
        let sh;
        /** @type {?} */
        let x0;
        /** @type {?} */
        let y0;
        /** @type {?} */
        let x1;
        /** @type {?} */
        let y1;
        /** @type {?} */
        let t;
        if (w < h) // vertical
         {
            t = w / 2;
            x0 = -t;
            x1 = t;
            y0 = t + s / 2;
            y1 = t + s / 2;
            sw = 0;
            sh = h - 4 * t - s;
        }
        else { // horizontal
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
        // console.log({w: w,h: h,t: t,x0: x0,y0: y0,x1: x1,y1: y1});
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.fit();
    }
}
HexagonComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-hexagon',
                template: "<div [style.borderColor]=\"color\" class=\"box\"\n     [ngStyle]=\"{width: w + 'px', height: h + 'px'}\" >\n  <div #s0 [style.top.px]=\"y0\" [style.left.px]=\"x0\"\n       class='vis'[class.vertical0]=\"(w < h)\" [class.horizontal0]=\"(w > h)\"\n       [ngStyle]=\"{top: (y0)+'px', left: (x0)+'px',\n       width:(sw)+'px',height:(sh)+'px', 'border-width': t+'px'}\"\n  ></div>\n  <div [style.top.px]=\"y1\" [style.left.px]=\"x1\"\n       class='vis' [class.vertical1]=\"(w < h)\" [class.horizontal1]=\"(w > h)\"\n       [ngStyle]=\"{top: (y1)+'px', left: (x1)+'px',\n       width:(sw)+'px',height:(sh)+'px', 'border-width': t+'px'}\"\n  ></div>\n</div>\n",
                styles: ["div.vis{border-style:solid;border-color:transparent;position:absolute}div.vertical0{left:-50%;border-right-color:inherit}div.vertical1{left:50%;border-left-color:inherit}div.horizontal0{top:-50%;border-bottom-color:inherit}div.horizontal1{top:50%;border-top-color:inherit}div.box{position:relative;display:inline-block;top:0;left:0;overflow:unset;vertical-align:top}"]
            }] }
];
/** @nocollapse */
HexagonComponent.ctorParameters = () => [];
HexagonComponent.propDecorators = {
    s: [{ type: Input, args: ['spacing',] }],
    color: [{ type: Input, args: ['color',] }],
    width: [{ type: Input, args: ['width',] }],
    height: [{ type: Input, args: ['height',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SevenSegModule {
}
SevenSegModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SevenSegComponent,
                    SevenSegDigitComponent,
                    SevenSegCellComponent,
                    HexagonComponent],
                imports: [
                    CommonModule
                ],
                exports: [SevenSegComponent, SevenSegCellComponent, HexagonComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SevenSegModule, SevenSegComponent, SevenSegDigitComponent, SevenSegCellComponent, HexagonComponent };

//# sourceMappingURL=seven-seg.js.map
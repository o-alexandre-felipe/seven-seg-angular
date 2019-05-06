/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { STANDARD_SEG_MAPPING } from '../seg-mapping';
// import {sanitizeStyle} from '@angular/core/src/sanitization/sanitization';
export class SevenSegCellComponent {
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
if (false) {
    /** @type {?} */
    SevenSegCellComponent.prototype.horizontalH;
    /** @type {?} */
    SevenSegCellComponent.prototype.horizontalW;
    /** @type {?} */
    SevenSegCellComponent.prototype.verticalW;
    /** @type {?} */
    SevenSegCellComponent.prototype.verticalH;
    /** @type {?} */
    SevenSegCellComponent.prototype.segState;
    /** @type {?} */
    SevenSegCellComponent.prototype._digit;
    /** @type {?} */
    SevenSegCellComponent.prototype.color;
    /** @type {?} */
    SevenSegCellComponent.prototype.spacing;
    /** @type {?} */
    SevenSegCellComponent.prototype.thickness;
    /** @type {?} */
    SevenSegCellComponent.prototype.width;
    /** @type {?} */
    SevenSegCellComponent.prototype.height;
    /** @type {?} */
    SevenSegCellComponent.prototype.bed;
    /**
     * @type {?}
     * @private
     */
    SevenSegCellComponent.prototype.segments;
    /**
     * @type {?}
     * @private
     */
    SevenSegCellComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V2ZW4tc2VnLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2V2ZW4tc2VnLyIsInNvdXJjZXMiOlsibGliL2NlbGwvc2V2ZW4tc2VnLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQW9DLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7O0FBU3BELE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFpS2hDLFlBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUF2SjNDLFdBQU0sR0FBRyxFQUFFLENBQUM7Ozs7O1FBa0NJLFVBQUssR0FBRyxPQUFPLENBQUM7UUFDZCxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNsQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1YsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQXNHckIsYUFBUSxHQUFHLG9CQUFvQixDQUFDO1FBWXRDLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25EO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxD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QUVSLENBQUM7OztZQXBMRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsbW9EQUE4Qzs7YUFFL0M7Ozs7WUFUTyxZQUFZOzs7b0JBcUJqQixLQUFLLFNBQUMsT0FBTztvQkFpQ2IsS0FBSyxTQUFDLE9BQU87c0JBQ2IsS0FBSyxTQUFDLFNBQVM7d0JBQ2YsS0FBSyxTQUFDLFdBQVc7b0JBQ2pCLEtBQUssU0FBQyxPQUFPO3FCQUNiLEtBQUssU0FBQyxRQUFRO2tCQUdkLFNBQVMsU0FBQyxLQUFLOzs7O0lBOUNoQiw0Q0FBb0I7O0lBQ3BCLDRDQUFvQjs7SUFDcEIsMENBQWtCOztJQUNsQiwwQ0FBa0I7O0lBQ2xCLHlDQUFtQzs7SUFDbkMsdUNBQVk7O0lBa0NaLHNDQUFnQzs7SUFDaEMsd0NBQThCOztJQUM5QiwwQ0FBa0M7O0lBQ2xDLHNDQUEyQjs7SUFDM0IsdUNBQTZCOztJQUc3QixvQ0FBa0Q7Ozs7O0lBbUdsRCx5Q0FBd0M7Ozs7O0lBVzVCLDBDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RvbVNhbml0aXplcn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge1NUQU5EQVJEX1NFR19NQVBQSU5HfSBmcm9tICcuLi9zZWctbWFwcGluZyc7XG5cbi8vIGltcG9ydCB7c2FuaXRpemVTdHlsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvc2FuaXRpemF0aW9uL3Nhbml0aXphdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zZXZlbi1zZWctY2VsbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZXZlbi1zZWctY2VsbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NldmVuLXNlZy1jZWxsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZXZlblNlZ0NlbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIC8qIFRoaXMgcHJvcGVydHkgc2V0dGVyIGludGVyY2VwdCBjaGFuZ2VzIGludCBkaWdpdC1zdGF0ZSBpbnB1dCxcbiAgICAgYW5kIGJ1aWxkIGEgZGljdGlvbmFyeSB3aXRoIGEgbG9naWNhbCBtYXNrIHRoYXQgc3BlY2lmeVxuICAgICB3aGF0IHNlZ21lbnRzIGFyZSB2aXNpYmxlLlxuICovXG4gIGhvcml6b250YWxIOiBudW1iZXI7XG4gIGhvcml6b250YWxXOiBudW1iZXI7XG4gIHZlcnRpY2FsVzogbnVtYmVyO1xuICB2ZXJ0aWNhbEg6IG51bWJlcjtcbiAgc2VnU3RhdGU6IHtba2V5OiBzdHJpbmddOmJvb2xlYW47fTtcbiAgX2RpZ2l0ID0gJyc7XG4gIEBJbnB1dCgnZGlnaXQnKSBzZXQgZGlnaXQoZGlnaXQ6IHN0cmluZykge1xuICAgIGNvbnN0IHMgPSB7fTtcbiAgICB0aGlzLl9kaWdpdCA9IGRpZ2l0O1xuICAgIGZvciAoY29uc3QgayBvZiAnQUJDREVGRy4sOicpIHtcbiAgICAgIHNba10gPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gdGhlIHVzZXIgbWF5IHNwZWNpZnkgYW55IGN1c3RvbSBjaGFyYWN0ZXIgdXNpbmcgYSBzaW50YXggc2ltaWxhciB0b1xuICAgIC8vIGVudGl0aWVzLCAmLio7IHRoZSBjaGFyYWN0ZXIgd2lsbCBiZSB0aGUgY29tYmluYXRpb24gb2YgYWxsIHRoZSBzZWdtZW50c1xuICAgIC8vIHdob3NlIGlkZW50aWZpZXIgaXMgcHJlc2VudCBpbiB0aGUgZW50aXR5LlxuICAgIGlmICh0aGlzLmRpZ2l0WzBdID09PSAnJicpIHtcbiAgICAgIGZvciAoY29uc3QgayBvZiB0aGlzLl9kaWdpdCkge1xuICAgICAgICBpZiAoayAhPT0gJzsnICYmIGsgIT09ICcmJykge1xuICAgICAgICAgIHNba10gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoY29uc3QgZCBvZiB0aGlzLl9kaWdpdCkge1xuICAgICAgICBmb3IgKGNvbnN0IGsgb2YgdGhpcy5zZWdtZW50c1tkXSkge1xuICAgICAgICAgIHNba10gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2VnU3RhdGUgPSBzO1xuICB9XG5cbiAgZ2V0IGRpZ2l0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2RpZ2l0O1xuICB9XG5cbiAgLy8gU3R5bGUgYW5kIGRpbWVuc2lvbnMgYXJlIG5vdCBzdXBwb3NlZCB0byBjaGFuZ2UgYWxsIHRoZSB0aW1lXG4gIC8vIGFuZCB3aGVuIHRoZXkgY2hhbmdlIHRoZXJlIGFyZSBhIGxvdCBvZiBwcm9wZXJ0aWVzIG9mIHRoZSBodG1sXG4gIC8vIGVsZW1lbnRzIHRoYXQgd2lsbCBjaGFuZ2UsIHRodXMgaW5zdGVhZCBvZiB3cml0aW5nIHNldHRlcnMgYW5kXG4gIC8vIGdldHRlcnMgYSBnbG9iYWwgaW5wdXQgY2hhbmdlIGNhbGxiYWNrIHdpbGwgYmUgaXNzdWVkLlxuICBASW5wdXQoJ2NvbG9yJykgY29sb3IgPSAnYmxhY2snO1xuICBASW5wdXQoJ3NwYWNpbmcnKSBzcGFjaW5nID0gMDtcbiAgQElucHV0KCd0aGlja25lc3MnKSB0aGlja25lc3MgPSA2O1xuICBASW5wdXQoJ3dpZHRoJykgd2lkdGggPSAzMDtcbiAgQElucHV0KCdoZWlnaHQnKSBoZWlnaHQgPSAzNDtcblxuICAvLyBnYXRoZXIgYWxsIHRoZVxuICBAVmlld0NoaWxkKCdiZWQnKSBiZWQ6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmZpdCgpO1xuICB9XG5cbiAgZml0KCk6IHZvaWQge1xuICAgIGxldCBlbDogSFRNTERpdkVsZW1lbnQ7XG4gICAgY29uc3QgdyA9IHRoaXMud2lkdGg7XG4gICAgY29uc3QgdCA9IHRoaXMudGhpY2tuZXNzO1xuICAgIGNvbnN0IGggPSB0aGlzLmhlaWdodDtcbiAgICBjb25zdCBlbGVtZW50cyA9IHt9O1xuICAgIGNvbnN0IHN0eWxlTWVhc3VyZSA9IChkOiBudW1iZXIpOiBzdHJpbmcgPT4gZCArICdweCc7XG5cbiAgICB0aGlzLmJlZC5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gc3R5bGVNZWFzdXJlKHcpO1xuICAgIHRoaXMuYmVkLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gc3R5bGVNZWFzdXJlKGgpO1xuICAgIHRoaXMuYmVkLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gc3R5bGVNZWFzdXJlKDApO1xuICAgIHRoaXMuYmVkLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9IHN0eWxlTWVhc3VyZSgwKTtcblxuICAgIC8vIEkgZGlkIG5vdCBmaW5kIGEgd2F5IHRvIGl0ZXJhdGUgb3ZlciBlbGVtZW50cywgc28gSSBhbSBkb2luZyB1c2luZ1xuICAgIC8vIG5hdGl2ZSBET00gbWV0aG9kLlxuICAgIGZvciAoZWwgPSB0aGlzLmJlZC5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgICBlbCAhPT0gbnVsbDsgZWwgPSBlbC5uZXh0U2libGluZyBhcyBIVE1MRGl2RWxlbWVudCkge1xuICAgICAgZWxlbWVudHNbZWwuaWRdID0gZWw7XG4gICAgfVxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gIFNldCBjb2xvclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgZm9yIChjb25zdCBpZCBvZiAnQUJDREVGRycpIHtcbiAgICAgIGVsZW1lbnRzW2lkXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGlkIG9mICcuOiwnKSB7XG4gICAgICBlbGVtZW50c1tpZF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5jb2xvcjtcbiAgICB9XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLy8gIFNldCBzaXplXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgdGhpcy5ob3Jpem9udGFsVyA9IHcgLSAxLjUgKiB0O1xuICAgIHRoaXMuaG9yaXpvbnRhbEggPSB0O1xuICAgIGZvciAoY29uc3QgaWQgb2YgJ0FERycpIC8vIGhvcml6b250YWwgZWxlbWVudHNcbiAgICB7XG4gICAgICBlbCA9IGVsZW1lbnRzW2lkXTtcbiAgICAgIGVsLnN0eWxlLndpZHRoID0gc3R5bGVNZWFzdXJlKHcgLSAxLjUgKiB0KTtcbiAgICAgIGVsLnN0eWxlLmhlaWdodCA9IHN0eWxlTWVhc3VyZSh0KTtcbiAgICB9XG4gICAgdGhpcy52ZXJ0aWNhbFcgPSB0O1xuICAgIHRoaXMudmVydGljYWxIID0gMC41ICogaDtcbiAgICBmb3IgKGNvbnN0IGlkIG9mICdCQ0VGJykgLy8gdmVydGljYWwgZWxlbWVudHNcbiAgICB7XG4gICAgICBlbCA9IGVsZW1lbnRzW2lkXTtcbiAgICAgIGVsLnN0eWxlLndpZHRoID0gc3R5bGVNZWFzdXJlKHQpO1xuICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gc3R5bGVNZWFzdXJlKDAuNSAqIGgpO1xuICAgIH1cbiAgICBlbGVtZW50c1snLiddLnN0eWxlLndpZHRoID0gc3R5bGVNZWFzdXJlKHQpO1xuICAgIGVsZW1lbnRzWycuJ10uc3R5bGUuaGVpZ2h0ID0gc3R5bGVNZWFzdXJlKHQpO1xuICAgIGVsZW1lbnRzWyc6J10uc3R5bGUud2lkdGggPSBzdHlsZU1lYXN1cmUodCk7XG4gICAgZWxlbWVudHNbJzonXS5zdHlsZS5oZWlnaHQgPSBzdHlsZU1lYXN1cmUodCk7XG4gICAgZWxlbWVudHNbJywnXS5zdHlsZS53aWR0aCA9IHN0eWxlTWVhc3VyZSgwLjUgKiB0KTtcbiAgICBlbGVtZW50c1snLCddLnN0eWxlLmhlaWdodCA9IHN0eWxlTWVhc3VyZSh0KTtcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8vIFNldCBwb3NpdGlvblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAvLyAqKiBsZWZ0XG5cbiAgICAvLyBBREVGRyBhbGwgaGF2ZSBsZWZ0ID0gMDtcbiAgICBmb3IgKGNvbnN0IGlkIG9mICdBREVGRycpIHtcbiAgICAgIGVsZW1lbnRzW2lkXS5zdHlsZS5sZWZ0ID0gc3R5bGVNZWFzdXJlKDApO1xuICAgIH1cbiAgICAvLyB0aGUgc2VnbWVudHMgb24gdGhlIHJpZ2h0IGhhbmQgc2lkZSAoMSlcbiAgICBmb3IgKGNvbnN0IGlkIG9mICdCQycpIC8vIHZlcnRpY2FsIGVsZW1lbnRzXG4gICAge1xuICAgICAgZWxlbWVudHNbaWRdLnN0eWxlLmxlZnQgPSBzdHlsZU1lYXN1cmUodyAtIDIuNSAqIHQpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGlkIG9mICcuOicpIHtcbiAgICAgIGVsZW1lbnRzW2lkXS5zdHlsZS5sZWZ0ID0gc3R5bGVNZWFzdXJlKHcgLSAxLjUgKiB0KTtcbiAgICB9XG4gICAgZWxlbWVudHNbJywnXS5zdHlsZS5sZWZ0ID0gc3R5bGVNZWFzdXJlKHcgLSB0KTtcblxuICAgIC8vICoqIHRvcFxuICAgIGZvciAoY29uc3QgaWQgb2YgJ0FCRicpIHtcbiAgICAgIGVsZW1lbnRzW2lkXS5zdHlsZS50b3AgPSBzdHlsZU1lYXN1cmUoMCk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgaWQgb2YgJ0NFRzonKSAvLyBzZWdtZW50cyBvZiBuXG4gICAge1xuICAgICAgZWxlbWVudHNbaWRdLnN0eWxlLnRvcCA9IHN0eWxlTWVhc3VyZSgwLjUgKiBoIC0gdCk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgaWQgb2YgJ0QuJykge1xuICAgICAgZWxlbWVudHNbaWRdLnN0eWxlLnRvcCA9IHN0eWxlTWVhc3VyZShoIC0gMiAqIHQpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhbdGhpcy5zcGFjaW5nLCB0aGlzLnRoaWNrbmVzcywgdGhpcy5ob3Jpem9udGFsSCwgdGhpcy5ob3Jpem9udGFsVywgdGhpcy52ZXJ0aWNhbFcsIHRoaXMudmVydGljYWxIXSk7XG4gICAgZWxlbWVudHNbJywnXS5zdHlsZS50b3AgPSBzdHlsZU1lYXN1cmUoaCAtIHQpO1xuICAgIGNvbnNvbGUubG9nKCdzdHlsZSBjaGFuZ2VkJyk7XG4gIH1cblxuXG4gIHByaXZhdGUgc2VnbWVudHMgPSBTVEFOREFSRF9TRUdfTUFQUElORztcblxuICByZWNhbGMoczogb2JqZWN0KTogb2JqZWN0IHtcbiAgICBjb25zdCBvID0gcztcbiAgICBmb3IgKGNvbnN0IGsgaW4gbykge1xuICAgICAgb1trXSA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShvW2tdKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cobyk7XG4gICAgcmV0dXJuIG87XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG4gICAgZm9yIChjb25zdCBrIGluIHRoaXMuc2VnbWVudHMpIHtcbiAgICAgIGlmICghdGhpcy5zZWdtZW50c1trLnRvTG93ZXJDYXNlKCldKSB7XG4gICAgICAgIHRoaXMuc2VnbWVudHNbay50b0xvd2VyQ2FzZSgpXSA9IHRoaXMuc2VnbWVudHNba107XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuc2VnbWVudHNbay50b1VwcGVyQ2FzZSgpXSkge1xuICAgICAgICB0aGlzLnNlZ21lbnRzW2sudG9VcHBlckNhc2UoKV0gPSB0aGlzLnNlZ21lbnRzW2tdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG59XG4iXX0=
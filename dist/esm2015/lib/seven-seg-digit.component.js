/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { STANDARD_SEG_MAPPING } from './seg-mapping';
export class SevenSegDigitComponent {
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
if (false) {
    /** @type {?} */
    SevenSegDigitComponent.prototype.digit;
    /** @type {?} */
    SevenSegDigitComponent.prototype.color;
    /** @type {?} */
    SevenSegDigitComponent.prototype.thickness;
    /** @type {?} */
    SevenSegDigitComponent.prototype.width;
    /** @type {?} */
    SevenSegDigitComponent.prototype.height;
    /** @type {?} */
    SevenSegDigitComponent.prototype.box1;
    /** @type {?} */
    SevenSegDigitComponent.prototype.box2;
    /** @type {?} */
    SevenSegDigitComponent.prototype.box1Style;
    /** @type {?} */
    SevenSegDigitComponent.prototype.box2Style;
    /**
     * @type {?}
     * @private
     */
    SevenSegDigitComponent.prototype.segments;
    /** @type {?} */
    SevenSegDigitComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V2ZW4tc2VnLWRpZ2l0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NldmVuLXNlZy8iLCJzb3VyY2VzIjpbImxpYi9zZXZlbi1zZWctZGlnaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQW9DLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBT25ELE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUF3RGpDLFlBQW1CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUF2RDFCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxVQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ1osY0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN2QixVQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2IsV0FBTSxHQUFHLE1BQU0sQ0FBQztRQUt6QixhQUFRLEdBQUcsb0JBQW9CLENBQUM7UUErQ3RDLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25EO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENB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QUMsTUFBTTttQkFDaEIsU0FBUyxTQUFDLE1BQU07Ozs7SUFOakIsdUNBQTJCOztJQUMzQix1Q0FBZ0M7O0lBQ2hDLDJDQUF1Qzs7SUFDdkMsdUNBQThCOztJQUM5Qix3Q0FBaUM7O0lBQ2pDLHNDQUFvRDs7SUFDcEQsc0NBQW9EOztJQUNwRCwyQ0FBa0I7O0lBQ2xCLDJDQUFrQjs7Ozs7SUFDbEIsMENBQXdDOztJQThDNUIsMkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RG9tU2FuaXRpemVyfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7U1RBTkRBUkRfU0VHX01BUFBJTkd9IGZyb20gJy4vc2VnLW1hcHBpbmcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2V2ZW4tc2VnLWRpZ2l0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NldmVuLXNlZy1kaWdpdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NldmVuLXNlZy1kaWdpdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2V2ZW5TZWdEaWdpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCdkaWdpdCcpIGRpZ2l0ID0gJyc7XG4gIEBJbnB1dCgnY29sb3InKSBjb2xvciA9ICdibGFjayc7XG4gIEBJbnB1dCgndGhpY2tuZXNzJykgdGhpY2tuZXNzID0gJzEycHgnO1xuICBASW5wdXQoJ3dpZHRoJykgd2lkdGggPSAnMHB4JztcbiAgQElucHV0KCdoZWlnaHQnKSBoZWlnaHQgPSAnMThweCc7XG4gIEBWaWV3Q2hpbGQoJ2JveDEnKSBib3gxOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnYm94MicpIGJveDI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBib3gxU3R5bGU6IG9iamVjdDtcbiAgYm94MlN0eWxlOiBvYmplY3Q7XG4gIHByaXZhdGUgc2VnbWVudHMgPSBTVEFOREFSRF9TRUdfTUFQUElORztcblxuICByZWNhbGMoczogb2JqZWN0KTogb2JqZWN0IHtcbiAgICBjb25zdCBvID0gcztcbiAgICBmb3IgKGNvbnN0IGsgaW4gbykge1xuICAgICAgb1trXSA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShvW2tdKTtcbiAgICB9XG4gICAgcmV0dXJuIG87XG4gIH1cblxuICBzZXRTdHlsZShlOiBIVE1MRWxlbWVudCwgczogb2JqZWN0KTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coW2UsIHNdKTtcbiAgICBmb3IgKGNvbnN0IGsgaW4gcykge1xuICAgICAgZS5zdHlsZVtrXSA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShzW2tdKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5zZXRTdHlsZSh0aGlzLmJveDEubmF0aXZlRWxlbWVudCwge1xuICAgICAgYm9yZGVyV2lkdGg6IHRoaXMudGhpY2tuZXNzICsgJyBzb2xpZCAgdHJhbnNwYXJlbnQnLFxuICAgICAgYm9yZGVyQm90dG9tV2lkdGg6ICdjYWxjKDAuNSonICsgdGhpcy50aGlja25lc3MgKyAnKScsXG4gICAgICB3aWR0aDogJ2NhbGMoJyArIHRoaXMud2lkdGggKyAnLTQqJyArIHRoaXMudGhpY2tuZXNzICsgJyknLFxuICAgICAgaGVpZ2h0OiAnY2FsYygwLjUqJyArIHRoaXMuaGVpZ2h0ICsgJy0xLjUqJyArIHRoaXMudGhpY2tuZXNzICsgJyknXG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdHlsZSh0aGlzLmJveDIubmF0aXZlRWxlbWVudCwge1xuICAgICAgYm9yZGVyOiB0aGlzLnRoaWNrbmVzcyArICcgc29saWQgJyArIHRoaXMuY29sb3IsXG4gICAgICBib3JkZXJUb3BXaWR0aDogJ2NhbGMoMC41KicgKyB0aGlzLnRoaWNrbmVzcyArICcpJyxcbiAgICAgIHdpZHRoOiAnY2FsYygnICsgdGhpcy53aWR0aCArICctNConICsgdGhpcy50aGlja25lc3MgKyAnKScsXG4gICAgICBoZWlnaHQ6ICdjYWxjKDAuNSonICsgdGhpcy5oZWlnaHQgKyAnLTEuNSonICsgdGhpcy50aGlja25lc3MgKyAnKSdcbiAgICB9KTtcbiAgfVxuXG5cbiAgZ2V0IHNlZ1N0YXRlKCk6IHtba2V5OiBzdHJpbmddOiBib29sZWFufSB7XG4gICAgY29uc3QgcyA9IHt9O1xuICAgIGZvciAoY29uc3QgayBvZiAnQUJDREVGRy4nKSB7XG4gICAgICBzW2tdID0gZmFsc2U7XG4gICAgfVxuICAgIGZvciAoY29uc3QgZCBvZiB0aGlzLmRpZ2l0KSB7XG4gICAgICBmb3IgKGNvbnN0IGsgb2YgdGhpcy5zZWdtZW50c1tkXSkge1xuICAgICAgICBzW2tdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcbiAgICBmb3IgKGNvbnN0IGsgaW4gdGhpcy5zZWdtZW50cykge1xuICAgICAgaWYgKCF0aGlzLnNlZ21lbnRzW2sudG9Mb3dlckNhc2UoKV0pIHtcbiAgICAgICAgdGhpcy5zZWdtZW50c1trLnRvTG93ZXJDYXNlKCldID0gdGhpcy5zZWdtZW50c1trXTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5zZWdtZW50c1trLnRvVXBwZXJDYXNlKCldKSB7XG4gICAgICAgIHRoaXMuc2VnbWVudHNbay50b1VwcGVyQ2FzZSgpXSA9IHRoaXMuc2VnbWVudHNba107XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh7J2luaXQgZGlnaXQnOiB0aGlzLmRpZ2l0fSk7XG4gIH1cblxufVxuIl19
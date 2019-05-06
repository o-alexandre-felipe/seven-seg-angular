/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { STANDARD_SEG_MAPPING } from './seg-mapping';
var SevenSegDigitComponent = /** @class */ (function () {
    function SevenSegDigitComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.digit = '';
        this.color = 'black';
        this.thickness = '12px';
        this.width = '0px';
        this.height = '18px';
        this.segments = STANDARD_SEG_MAPPING;
        for (var k in this.segments) {
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
    SevenSegDigitComponent.prototype.recalc = /**
     * @param {?} s
     * @return {?}
     */
    function (s) {
        /** @type {?} */
        var o = s;
        for (var k in o) {
            o[k] = this.sanitizer.bypassSecurityTrustStyle(o[k]);
        }
        return o;
    };
    /**
     * @param {?} e
     * @param {?} s
     * @return {?}
     */
    SevenSegDigitComponent.prototype.setStyle = /**
     * @param {?} e
     * @param {?} s
     * @return {?}
     */
    function (e, s) {
        console.log([e, s]);
        for (var k in s) {
            e.style[k] = this.sanitizer.bypassSecurityTrustStyle(s[k]);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SevenSegDigitComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
    };
    Object.defineProperty(SevenSegDigitComponent.prototype, "segState", {
        get: /**
         * @return {?}
         */
        function () {
            var e_1, _a, e_2, _b, e_3, _c;
            /** @type {?} */
            var s = {};
            try {
                for (var _d = tslib_1.__values('ABCDEFG.'), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var k = _e.value;
                    s[k] = false;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
            }
            try {
                for (var _f = tslib_1.__values(this.digit), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var d = _g.value;
                    try {
                        for (var _h = tslib_1.__values(this.segments[d]), _j = _h.next(); !_j.done; _j = _h.next()) {
                            var k = _j.value;
                            s[k] = true;
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return s;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SevenSegDigitComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log({ 'init digit': this.digit });
    };
    SevenSegDigitComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-seven-seg-digit',
                    template: "\n<div #digitBed>\n <!-- <div class=\"seg-horizontal\" [class.display-bottom]=\"segState.A\"></div>\n  <div class=\"seg-vertical\" [class.display-right]=\"segState.F\"></div> -->\n  <div [class.display-left]  =\"segState.F\"\n       [class.display-top]   =\"segState.A\"\n       [class.display-right] =\"segState.B\"\n       [class.display-bottom]=\"segState.G\"\n       #box1>\n  </div>\n  <!--\n  <div class=\"set-vertical\" [class.display-left]=\"segState.B\"></div>\n  <div class=\"seg-vertical\" [class.display-right]=\"segState.E\"></div>\n  -->\n  <div [class.display-left]  =\"segState.E\"\n       [class.display-top]   =\"segState.G\"\n       [class.display-right] =\"segState.C\"\n       [class.display-bottom]=\"segState.D\"\n       #box2>\n  </div>\n  <!--\n  <div class=\"set-vertical\" [class.display-top]=\"segState.C\"></div>\n  <div class=\"seg-horizontal\" [class.display-bottom]=\"segState.D\"></div>\n  -->\n\n</div>\n\n<div class=\"point-bed\" [ngStyle]=\"{'width': sanitizer.bypassSecurityTrustStyle('calc(1.5*'+thickness+')'),\n    'padding':sanitizer.bypassSecurityTrustStyle('calc(0.5*'+thickness+')'),\n  'height': height}\">\n  <div class=\"point0\" [class.point-on]=\"segState[':']\"\n       [ngStyle]=\"{'background-color': color, 'width': thickness,'height': thickness,\n       'top':sanitizer.bypassSecurityTrustStyle('calc(2*'+thickness+')')}\"></div>\n  <div class=\"point1\" [class.point-on]=\"segState['.']\"\n       [ngStyle]=\"{'background-color': color, 'width': thickness,'height': thickness,\n       'top':sanitizer.bypassSecurityTrustStyle('calc(' + height + '-2*'+thickness+')')}\"></div>\n</div>\n",
                    styles: ["div.bed{position:relative;display:inline-block;overflow:hidden;border:2px dashed #000;width:27px;height:42px}div#box1{width:15px;height:15px;position:inherit;top:0;border:6px solid transparent;border-bottom-width:3px;border-radius:0}div#box2{width:15px;height:15px;position:inherit;bottom:0;border:6px solid transparent;border-top-width:3px;border-radius:0}div.seg-horizontal{width:15px;height:0}div.seg-vertical{width:0;height:15px}div.seg-box{width:15px;height:15px;border:6px solid transparent}div.display-left{border-left-color:inherit}div.display-right{border-right-color:inherit}div.display-top{border-top-color:inherit}div.display-bottom{border-bottom-color:inherit}div.point-bed{position:inherit;border:0;margin:0;top:0;right:0;display:inline-block;width:10px;height:42px}div.point1{position:relative;top:20px;visibility:hidden}div.point0{position:relative;top:5px;visibility:hidden}div.point-on{visibility:visible}"]
                }] }
    ];
    /** @nocollapse */
    SevenSegDigitComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    SevenSegDigitComponent.propDecorators = {
        digit: [{ type: Input, args: ['digit',] }],
        color: [{ type: Input, args: ['color',] }],
        thickness: [{ type: Input, args: ['thickness',] }],
        width: [{ type: Input, args: ['width',] }],
        height: [{ type: Input, args: ['height',] }],
        box1: [{ type: ViewChild, args: ['box1',] }],
        box2: [{ type: ViewChild, args: ['box2',] }]
    };
    return SevenSegDigitComponent;
}());
export { SevenSegDigitComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V2ZW4tc2VnLWRpZ2l0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NldmVuLXNlZy8iLCJzb3VyY2VzIjpbImxpYi9zZXZlbi1zZWctZGlnaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFvQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVuRDtJQTZERSxnQ0FBbUIsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQXZEMUIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFVBQUssR0FBRyxPQUFPLENBQUM7UUFDWixjQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDYixXQUFNLEdBQUcsTUFBTSxDQUFDO1FBS3pCLGFBQVEsR0FBRyxvQkFBb0IsQ0FBQztRQStDdEMsS0FBSyxJQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFO2dCQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkQ7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25EO1NBQ0Y7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QVEsRUFBRSxxQkFBcUI7b0JBQy9CLG9uREFBK0M7O2lCQUVoRDs7OztnQkFQTyxZQUFZOzs7d0JBU2pCLEtBQUssU0FBQyxPQUFPO3dCQUNiLEtBQUssU0FBQyxPQUFPOzRCQUNiLEtBQUssU0FBQyxXQUFXO3dCQUNqQixLQUFLLFNBQUMsT0FBTzt5QkFDYixLQUFLLFNBQUMsUUFBUTt1QkFDZCxTQUFTLFNBQUMsTUFBTTt1QkFDaEIsU0FBUyxTQUFDLE1BQU07O0lBaUVuQiw2QkFBQztDQUFBLEFBN0VELElBNkVDO1NBeEVZLHNCQUFzQjs7O0lBQ2pDLHVDQUEyQjs7SUFDM0IsdUNBQWdDOztJQUNoQywyQ0FBdUM7O0lBQ3ZDLHVDQUE4Qjs7SUFDOUIsd0NBQWlDOztJQUNqQyxzQ0FBb0Q7O0lBQ3BELHNDQUFvRDs7SUFDcEQsMkNBQWtCOztJQUNsQiwyQ0FBa0I7Ozs7O0lBQ2xCLDBDQUF3Qzs7SUE4QzVCLDJDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RvbVNhbml0aXplcn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge1NUQU5EQVJEX1NFR19NQVBQSU5HfSBmcm9tICcuL3NlZy1tYXBwaW5nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNldmVuLXNlZy1kaWdpdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZXZlbi1zZWctZGlnaXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZXZlbi1zZWctZGlnaXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNldmVuU2VnRGlnaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgnZGlnaXQnKSBkaWdpdCA9ICcnO1xuICBASW5wdXQoJ2NvbG9yJykgY29sb3IgPSAnYmxhY2snO1xuICBASW5wdXQoJ3RoaWNrbmVzcycpIHRoaWNrbmVzcyA9ICcxMnB4JztcbiAgQElucHV0KCd3aWR0aCcpIHdpZHRoID0gJzBweCc7XG4gIEBJbnB1dCgnaGVpZ2h0JykgaGVpZ2h0ID0gJzE4cHgnO1xuICBAVmlld0NoaWxkKCdib3gxJykgYm94MTogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ2JveDInKSBib3gyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgYm94MVN0eWxlOiBvYmplY3Q7XG4gIGJveDJTdHlsZTogb2JqZWN0O1xuICBwcml2YXRlIHNlZ21lbnRzID0gU1RBTkRBUkRfU0VHX01BUFBJTkc7XG5cbiAgcmVjYWxjKHM6IG9iamVjdCk6IG9iamVjdCB7XG4gICAgY29uc3QgbyA9IHM7XG4gICAgZm9yIChjb25zdCBrIGluIG8pIHtcbiAgICAgIG9ba10gPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUob1trXSk7XG4gICAgfVxuICAgIHJldHVybiBvO1xuICB9XG5cbiAgc2V0U3R5bGUoZTogSFRNTEVsZW1lbnQsIHM6IG9iamVjdCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKFtlLCBzXSk7XG4gICAgZm9yIChjb25zdCBrIGluIHMpIHtcbiAgICAgIGUuc3R5bGVba10gPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoc1trXSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMuc2V0U3R5bGUodGhpcy5ib3gxLm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgIGJvcmRlcldpZHRoOiB0aGlzLnRoaWNrbmVzcyArICcgc29saWQgIHRyYW5zcGFyZW50JyxcbiAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAnY2FsYygwLjUqJyArIHRoaXMudGhpY2tuZXNzICsgJyknLFxuICAgICAgd2lkdGg6ICdjYWxjKCcgKyB0aGlzLndpZHRoICsgJy00KicgKyB0aGlzLnRoaWNrbmVzcyArICcpJyxcbiAgICAgIGhlaWdodDogJ2NhbGMoMC41KicgKyB0aGlzLmhlaWdodCArICctMS41KicgKyB0aGlzLnRoaWNrbmVzcyArICcpJ1xuICAgIH0pO1xuICAgIHRoaXMuc2V0U3R5bGUodGhpcy5ib3gyLm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgIGJvcmRlcjogdGhpcy50aGlja25lc3MgKyAnIHNvbGlkICcgKyB0aGlzLmNvbG9yLFxuICAgICAgYm9yZGVyVG9wV2lkdGg6ICdjYWxjKDAuNSonICsgdGhpcy50aGlja25lc3MgKyAnKScsXG4gICAgICB3aWR0aDogJ2NhbGMoJyArIHRoaXMud2lkdGggKyAnLTQqJyArIHRoaXMudGhpY2tuZXNzICsgJyknLFxuICAgICAgaGVpZ2h0OiAnY2FsYygwLjUqJyArIHRoaXMuaGVpZ2h0ICsgJy0xLjUqJyArIHRoaXMudGhpY2tuZXNzICsgJyknXG4gICAgfSk7XG4gIH1cblxuXG4gIGdldCBzZWdTdGF0ZSgpOiB7W2tleTogc3RyaW5nXTogYm9vbGVhbn0ge1xuICAgIGNvbnN0IHMgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGsgb2YgJ0FCQ0RFRkcuJykge1xuICAgICAgc1trXSA9IGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGQgb2YgdGhpcy5kaWdpdCkge1xuICAgICAgZm9yIChjb25zdCBrIG9mIHRoaXMuc2VnbWVudHNbZF0pIHtcbiAgICAgICAgc1trXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG4gICAgZm9yIChjb25zdCBrIGluIHRoaXMuc2VnbWVudHMpIHtcbiAgICAgIGlmICghdGhpcy5zZWdtZW50c1trLnRvTG93ZXJDYXNlKCldKSB7XG4gICAgICAgIHRoaXMuc2VnbWVudHNbay50b0xvd2VyQ2FzZSgpXSA9IHRoaXMuc2VnbWVudHNba107XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuc2VnbWVudHNbay50b1VwcGVyQ2FzZSgpXSkge1xuICAgICAgICB0aGlzLnNlZ21lbnRzW2sudG9VcHBlckNhc2UoKV0gPSB0aGlzLnNlZ21lbnRzW2tdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2coeydpbml0IGRpZ2l0JzogdGhpcy5kaWdpdH0pO1xuICB9XG5cbn1cbiJdfQ==
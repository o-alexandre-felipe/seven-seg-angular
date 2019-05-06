/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { STANDARD_SEG_MAPPING } from '../seg-mapping';
// import {sanitizeStyle} from '@angular/core/src/sanitization/sanitization';
var SevenSegCellComponent = /** @class */ (function () {
    function SevenSegCellComponent(sanitizer) {
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
        for (var k in this.segments) {
            if (!this.segments[k.toLowerCase()]) {
                this.segments[k.toLowerCase()] = this.segments[k];
            }
            if (!this.segments[k.toUpperCase()]) {
                this.segments[k.toUpperCase()] = this.segments[k];
            }
        }
    }
    Object.defineProperty(SevenSegCellComponent.prototype, "digit", {
        get: /**
         * @return {?}
         */
        function () {
            return this._digit;
        },
        set: /**
         * @param {?} digit
         * @return {?}
         */
        function (digit) {
            var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
            /** @type {?} */
            var s = {};
            this._digit = digit;
            try {
                for (var _e = tslib_1.__values('ABCDEFG.,:'), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var k = _f.value;
                    s[k] = false;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
                }
                finally { if (e_1) throw e_1.error; }
            }
            // the user may specify any custom character using a sintax similar to
            // entities, &.*; the character will be the combination of all the segments
            // whose identifier is present in the entity.
            if (this.digit[0] === '&') {
                try {
                    for (var _g = tslib_1.__values(this._digit), _h = _g.next(); !_h.done; _h = _g.next()) {
                        var k = _h.value;
                        if (k !== ';' && k !== '&') {
                            s[k] = true;
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            else {
                try {
                    for (var _j = tslib_1.__values(this._digit), _k = _j.next(); !_k.done; _k = _j.next()) {
                        var d = _k.value;
                        try {
                            for (var _l = tslib_1.__values(this.segments[d]), _m = _l.next(); !_m.done; _m = _l.next()) {
                                var k = _m.value;
                                s[k] = true;
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_m && !_m.done && (_d = _l.return)) _d.call(_l);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_k && !_k.done && (_c = _j.return)) _c.call(_j);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
            this.segState = s;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    SevenSegCellComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.fit();
    };
    /**
     * @return {?}
     */
    SevenSegCellComponent.prototype.fit = /**
     * @return {?}
     */
    function () {
        var e_5, _a, e_6, _b, e_7, _c, e_8, _d, e_9, _e, e_10, _f, e_11, _g, e_12, _h, e_13, _j, e_14, _k;
        /** @type {?} */
        var el;
        /** @type {?} */
        var w = this.width;
        /** @type {?} */
        var t = this.thickness;
        /** @type {?} */
        var h = this.height;
        /** @type {?} */
        var elements = {};
        /** @type {?} */
        var styleMeasure = (/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return d + 'px'; });
        this.bed.nativeElement.style.width = styleMeasure(w);
        this.bed.nativeElement.style.height = styleMeasure(h);
        this.bed.nativeElement.style.top = styleMeasure(0);
        this.bed.nativeElement.style.left = styleMeasure(0);
        // I did not find a way to iterate over elements, so I am doing using
        // native DOM method.
        for (el = (/** @type {?} */ (this.bed.nativeElement.firstChild)); el !== null; el = (/** @type {?} */ (el.nextSibling))) {
            elements[el.id] = el;
        }
        try {
            ///////////////////////////////////////////////////////////////
            //  Set color
            //////////////////////////////////////////////////////////////
            for (var _l = tslib_1.__values('ABCDEFG'), _m = _l.next(); !_m.done; _m = _l.next()) {
                var id = _m.value;
                elements[id].style.backgroundColor = 'transparent';
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_m && !_m.done && (_a = _l.return)) _a.call(_l);
            }
            finally { if (e_5) throw e_5.error; }
        }
        try {
            for (var _o = tslib_1.__values('.:,'), _p = _o.next(); !_p.done; _p = _o.next()) {
                var id = _p.value;
                elements[id].style.backgroundColor = this.color;
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_p && !_p.done && (_b = _o.return)) _b.call(_o);
            }
            finally { if (e_6) throw e_6.error; }
        }
        ///////////////////////////////////////////////////////////////
        ///  Set size
        ///////////////////////////////////////////////////////////////
        this.horizontalW = w - 1.5 * t;
        this.horizontalH = t;
        try {
            for (var _q = tslib_1.__values('ADG'), _r = _q.next(); !_r.done; _r = _q.next()) {
                var id = _r.value;
                el = elements[id];
                el.style.width = styleMeasure(w - 1.5 * t);
                el.style.height = styleMeasure(t);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_r && !_r.done && (_c = _q.return)) _c.call(_q);
            }
            finally { if (e_7) throw e_7.error; }
        }
        this.verticalW = t;
        this.verticalH = 0.5 * h;
        try {
            for (var _s = tslib_1.__values('BCEF'), _t = _s.next(); !_t.done; _t = _s.next()) {
                var id = _t.value;
                el = elements[id];
                el.style.width = styleMeasure(t);
                el.style.height = styleMeasure(0.5 * h);
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_t && !_t.done && (_d = _s.return)) _d.call(_s);
            }
            finally { if (e_8) throw e_8.error; }
        }
        elements['.'].style.width = styleMeasure(t);
        elements['.'].style.height = styleMeasure(t);
        elements[':'].style.width = styleMeasure(t);
        elements[':'].style.height = styleMeasure(t);
        elements[','].style.width = styleMeasure(0.5 * t);
        elements[','].style.height = styleMeasure(t);
        try {
            ///////////////////////////////////////////////////////////
            /// Set position
            ///////////////////////////////////////////////////////////
            // ** left
            // ADEFG all have left = 0;
            for (var _u = tslib_1.__values('ADEFG'), _v = _u.next(); !_v.done; _v = _u.next()) {
                var id = _v.value;
                elements[id].style.left = styleMeasure(0);
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (_v && !_v.done && (_e = _u.return)) _e.call(_u);
            }
            finally { if (e_9) throw e_9.error; }
        }
        try {
            // the segments on the right hand side (1)
            for (var _w = tslib_1.__values('BC'), _x = _w.next(); !_x.done; _x = _w.next()) {
                var id = _x.value;
                elements[id].style.left = styleMeasure(w - 2.5 * t);
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_x && !_x.done && (_f = _w.return)) _f.call(_w);
            }
            finally { if (e_10) throw e_10.error; }
        }
        try {
            for (var _y = tslib_1.__values('.:'), _z = _y.next(); !_z.done; _z = _y.next()) {
                var id = _z.value;
                elements[id].style.left = styleMeasure(w - 1.5 * t);
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (_z && !_z.done && (_g = _y.return)) _g.call(_y);
            }
            finally { if (e_11) throw e_11.error; }
        }
        elements[','].style.left = styleMeasure(w - t);
        try {
            // ** top
            for (var _0 = tslib_1.__values('ABF'), _1 = _0.next(); !_1.done; _1 = _0.next()) {
                var id = _1.value;
                elements[id].style.top = styleMeasure(0);
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_1 && !_1.done && (_h = _0.return)) _h.call(_0);
            }
            finally { if (e_12) throw e_12.error; }
        }
        try {
            for (var _2 = tslib_1.__values('CEG:'), _3 = _2.next(); !_3.done; _3 = _2.next()) {
                var id = _3.value;
                elements[id].style.top = styleMeasure(0.5 * h - t);
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (_3 && !_3.done && (_j = _2.return)) _j.call(_2);
            }
            finally { if (e_13) throw e_13.error; }
        }
        try {
            for (var _4 = tslib_1.__values('D.'), _5 = _4.next(); !_5.done; _5 = _4.next()) {
                var id = _5.value;
                elements[id].style.top = styleMeasure(h - 2 * t);
            }
        }
        catch (e_14_1) { e_14 = { error: e_14_1 }; }
        finally {
            try {
                if (_5 && !_5.done && (_k = _4.return)) _k.call(_4);
            }
            finally { if (e_14) throw e_14.error; }
        }
        console.log([this.spacing, this.thickness, this.horizontalH, this.horizontalW, this.verticalW, this.verticalH]);
        elements[','].style.top = styleMeasure(h - t);
        console.log('style changed');
    };
    /**
     * @param {?} s
     * @return {?}
     */
    SevenSegCellComponent.prototype.recalc = /**
     * @param {?} s
     * @return {?}
     */
    function (s) {
        /** @type {?} */
        var o = s;
        for (var k in o) {
            o[k] = this.sanitizer.bypassSecurityTrustStyle(o[k]);
        }
        console.log(o);
        return o;
    };
    /**
     * @return {?}
     */
    SevenSegCellComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SevenSegCellComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-seven-seg-cell',
                    template: "<div #bed class=\"bed\">\n  <div class=\"seg horizontal\" id=\"A\" [class.on]=\"segState['A']\">\n    <lib-hexagon [width]=\"horizontalW\" [height]=\"horizontalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg vertical\" id=\"B\" [class.on]=\"segState['B']\">\n    <lib-hexagon [width]=\"verticalW\" [height]=\"verticalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg vertical\" id=\"C\" [class.on]=\"segState['C']\">\n    <lib-hexagon [width]=\"verticalW\" [height]=\"verticalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg horizontal\" id=\"D\" [class.on]=\"segState['D']\">\n    <lib-hexagon [width]=\"horizontalW\" [height]=\"horizontalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg vertical\" id=\"E\" [class.on]=\"segState['E']\">\n    <lib-hexagon [width]=\"verticalW\" [height]=\"verticalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg vertical\" id=\"F\" [class.on]=\"segState['F']\">\n    <lib-hexagon [width]=\"verticalW\" [height]=\"verticalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg horizontal\" id=\"G\" [class.on]=\"segState['G']\">\n    <lib-hexagon [width]=\"horizontalW\" [height]=\"horizontalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg dot\" id=\".\" [class.on]=\"segState['.']\"></div>\n  <div class=\"seg colon\" id=\":\" [class.on]=\"segState[':']\"></div>\n  <div class=\"seg comma\" id=\",\" [class.on]=\"segState[',']\"></div>\n</div>\n",
                    styles: ["div.bed{position:relative;display:inline-block;top:0;left:0;width:30px;height:40px}div.seg{position:absolute;display:block;background-color:#800;visibility:hidden}div.horizontal{width:20px;height:6px;left:0}div.vertical{width:6px;height:20px}div#A{top:0;left:0}div#B{left:14px;top:0}div#C{left:14px;top:14px}div#E,div#G{left:0;top:14px}div#D{left:0;top:28px}div#F{left:0;top:0}div.dot{top:28px;left:21.5px;width:6px;height:6px}div.colon{top:14px;left:21.5px;width:6px;height:6px}div.comma{top:34px;left:24px;width:3px;height:6px}div.on{visibility:visible}"]
                }] }
    ];
    /** @nocollapse */
    SevenSegCellComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    SevenSegCellComponent.propDecorators = {
        digit: [{ type: Input, args: ['digit',] }],
        color: [{ type: Input, args: ['color',] }],
        spacing: [{ type: Input, args: ['spacing',] }],
        thickness: [{ type: Input, args: ['thickness',] }],
        width: [{ type: Input, args: ['width',] }],
        height: [{ type: Input, args: ['height',] }],
        bed: [{ type: ViewChild, args: ['bed',] }]
    };
    return SevenSegCellComponent;
}());
export { SevenSegCellComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V2ZW4tc2VnLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2V2ZW4tc2VnLyIsInNvdXJjZXMiOlsibGliL2NlbGwvc2V2ZW4tc2VnLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFvQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdCQUFnQixDQUFDOztBQUlwRDtJQXNLRSwrQkFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQXZKM0MsV0FBTSxHQUFHLEVBQUUsQ0FBQzs7Ozs7UUFrQ0ksVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUNkLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDVixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDVixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBc0dyQixhQUFRLEdBQUcsb0JBQW9CLENBQUM7UUFZdEMsS0FBSyxJQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFO2dCQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkQ7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMs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QkFBcUI7OztJQUtoQyw0Q0FBb0I7O0lBQ3BCLDRDQUFvQjs7SUFDcEIsMENBQWtCOztJQUNsQiwwQ0FBa0I7O0lBQ2xCLHlDQUFtQzs7SUFDbkMsdUNBQVk7O0lBa0NaLHNDQUFnQzs7SUFDaEMsd0NBQThCOztJQUM5QiwwQ0FBa0M7O0lBQ2xDLHNDQUEyQjs7SUFDM0IsdUNBQTZCOztJQUc3QixvQ0FBa0Q7Ozs7O0lBbUdsRCx5Q0FBd0M7Ozs7O0lBVzVCLDBDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RvbVNhbml0aXplcn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge1NUQU5EQVJEX1NFR19NQVBQSU5HfSBmcm9tICcuLi9zZWctbWFwcGluZyc7XG5cbi8vIGltcG9ydCB7c2FuaXRpemVTdHlsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvc2FuaXRpemF0aW9uL3Nhbml0aXphdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zZXZlbi1zZWctY2VsbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZXZlbi1zZWctY2VsbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NldmVuLXNlZy1jZWxsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZXZlblNlZ0NlbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIC8qIFRoaXMgcHJvcGVydHkgc2V0dGVyIGludGVyY2VwdCBjaGFuZ2VzIGludCBkaWdpdC1zdGF0ZSBpbnB1dCxcbiAgICAgYW5kIGJ1aWxkIGEgZGljdGlvbmFyeSB3aXRoIGEgbG9naWNhbCBtYXNrIHRoYXQgc3BlY2lmeVxuICAgICB3aGF0IHNlZ21lbnRzIGFyZSB2aXNpYmxlLlxuICovXG4gIGhvcml6b250YWxIOiBudW1iZXI7XG4gIGhvcml6b250YWxXOiBudW1iZXI7XG4gIHZlcnRpY2FsVzogbnVtYmVyO1xuICB2ZXJ0aWNhbEg6IG51bWJlcjtcbiAgc2VnU3RhdGU6IHtba2V5OiBzdHJpbmddOmJvb2xlYW47fTtcbiAgX2RpZ2l0ID0gJyc7XG4gIEBJbnB1dCgnZGlnaXQnKSBzZXQgZGlnaXQoZGlnaXQ6IHN0cmluZykge1xuICAgIGNvbnN0IHMgPSB7fTtcbiAgICB0aGlzLl9kaWdpdCA9IGRpZ2l0O1xuICAgIGZvciAoY29uc3QgayBvZiAnQUJDREVGRy4sOicpIHtcbiAgICAgIHNba10gPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gdGhlIHVzZXIgbWF5IHNwZWNpZnkgYW55IGN1c3RvbSBjaGFyYWN0ZXIgdXNpbmcgYSBzaW50YXggc2ltaWxhciB0b1xuICAgIC8vIGVudGl0aWVzLCAmLio7IHRoZSBjaGFyYWN0ZXIgd2lsbCBiZSB0aGUgY29tYmluYXRpb24gb2YgYWxsIHRoZSBzZWdtZW50c1xuICAgIC8vIHdob3NlIGlkZW50aWZpZXIgaXMgcHJlc2VudCBpbiB0aGUgZW50aXR5LlxuICAgIGlmICh0aGlzLmRpZ2l0WzBdID09PSAnJicpIHtcbiAgICAgIGZvciAoY29uc3QgayBvZiB0aGlzLl9kaWdpdCkge1xuICAgICAgICBpZiAoayAhPT0gJzsnICYmIGsgIT09ICcmJykge1xuICAgICAgICAgIHNba10gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoY29uc3QgZCBvZiB0aGlzLl9kaWdpdCkge1xuICAgICAgICBmb3IgKGNvbnN0IGsgb2YgdGhpcy5zZWdtZW50c1tkXSkge1xuICAgICAgICAgIHNba10gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2VnU3RhdGUgPSBzO1xuICB9XG5cbiAgZ2V0IGRpZ2l0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2RpZ2l0O1xuICB9XG5cbiAgLy8gU3R5bGUgYW5kIGRpbWVuc2lvbnMgYXJlIG5vdCBzdXBwb3NlZCB0byBjaGFuZ2UgYWxsIHRoZSB0aW1lXG4gIC8vIGFuZCB3aGVuIHRoZXkgY2hhbmdlIHRoZXJlIGFyZSBhIGxvdCBvZiBwcm9wZXJ0aWVzIG9mIHRoZSBodG1sXG4gIC8vIGVsZW1lbnRzIHRoYXQgd2lsbCBjaGFuZ2UsIHRodXMgaW5zdGVhZCBvZiB3cml0aW5nIHNldHRlcnMgYW5kXG4gIC8vIGdldHRlcnMgYSBnbG9iYWwgaW5wdXQgY2hhbmdlIGNhbGxiYWNrIHdpbGwgYmUgaXNzdWVkLlxuICBASW5wdXQoJ2NvbG9yJykgY29sb3IgPSAnYmxhY2snO1xuICBASW5wdXQoJ3NwYWNpbmcnKSBzcGFjaW5nID0gMDtcbiAgQElucHV0KCd0aGlja25lc3MnKSB0aGlja25lc3MgPSA2O1xuICBASW5wdXQoJ3dpZHRoJykgd2lkdGggPSAzMDtcbiAgQElucHV0KCdoZWlnaHQnKSBoZWlnaHQgPSAzNDtcblxuICAvLyBnYXRoZXIgYWxsIHRoZVxuICBAVmlld0NoaWxkKCdiZWQnKSBiZWQ6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmZpdCgpO1xuICB9XG5cbiAgZml0KCk6IHZvaWQge1xuICAgIGxldCBlbDogSFRNTERpdkVsZW1lbnQ7XG4gICAgY29uc3QgdyA9IHRoaXMud2lkdGg7XG4gICAgY29uc3QgdCA9IHRoaXMudGhpY2tuZXNzO1xuICAgIGNvbnN0IGggPSB0aGlzLmhlaWdodDtcbiAgICBjb25zdCBlbGVtZW50cyA9IHt9O1xuICAgIGNvbnN0IHN0eWxlTWVhc3VyZSA9IChkOiBudW1iZXIpOiBzdHJpbmcgPT4gZCArICdweCc7XG5cbiAgICB0aGlzLmJlZC5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gc3R5bGVNZWFzdXJlKHcpO1xuICAgIHRoaXMuYmVkLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gc3R5bGVNZWFzdXJlKGgpO1xuICAgIHRoaXMuYmVkLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gc3R5bGVNZWFzdXJlKDApO1xuICAgIHRoaXMuYmVkLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9IHN0eWxlTWVhc3VyZSgwKTtcblxuICAgIC8vIEkgZGlkIG5vdCBmaW5kIGEgd2F5IHRvIGl0ZXJhdGUgb3ZlciBlbGVtZW50cywgc28gSSBhbSBkb2luZyB1c2luZ1xuICAgIC8vIG5hdGl2ZSBET00gbWV0aG9kLlxuICAgIGZvciAoZWwgPSB0aGlzLmJlZC5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgICBlbCAhPT0gbnVsbDsgZWwgPSBlbC5uZXh0U2libGluZyBhcyBIVE1MRGl2RWxlbWVudCkge1xuICAgICAgZWxlbWVudHNbZWwuaWRdID0gZWw7XG4gICAgfVxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gIFNldCBjb2xvclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgZm9yIChjb25zdCBpZCBvZiAnQUJDREVGRycpIHtcbiAgICAgIGVsZW1lbnRzW2lkXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGlkIG9mICcuOiwnKSB7XG4gICAgICBlbGVtZW50c1tpZF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5jb2xvcjtcbiAgICB9XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLy8gIFNldCBzaXplXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgdGhpcy5ob3Jpem9udGFsVyA9IHcgLSAxLjUgKiB0O1xuICAgIHRoaXMuaG9yaXpvbnRhbEggPSB0O1xuICAgIGZvciAoY29uc3QgaWQgb2YgJ0FERycpIC8vIGhvcml6b250YWwgZWxlbWVudHNcbiAgICB7XG4gICAgICBlbCA9IGVsZW1lbnRzW2lkXTtcbiAgICAgIGVsLnN0eWxlLndpZHRoID0gc3R5bGVNZWFzdXJlKHcgLSAxLjUgKiB0KTtcbiAgICAgIGVsLnN0eWxlLmhlaWdodCA9IHN0eWxlTWVhc3VyZSh0KTtcbiAgICB9XG4gICAgdGhpcy52ZXJ0aWNhbFcgPSB0O1xuICAgIHRoaXMudmVydGljYWxIID0gMC41ICogaDtcbiAgICBmb3IgKGNvbnN0IGlkIG9mICdCQ0VGJykgLy8gdmVydGljYWwgZWxlbWVudHNcbiAgICB7XG4gICAgICBlbCA9IGVsZW1lbnRzW2lkXTtcbiAgICAgIGVsLnN0eWxlLndpZHRoID0gc3R5bGVNZWFzdXJlKHQpO1xuICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gc3R5bGVNZWFzdXJlKDAuNSAqIGgpO1xuICAgIH1cbiAgICBlbGVtZW50c1snLiddLnN0eWxlLndpZHRoID0gc3R5bGVNZWFzdXJlKHQpO1xuICAgIGVsZW1lbnRzWycuJ10uc3R5bGUuaGVpZ2h0ID0gc3R5bGVNZWFzdXJlKHQpO1xuICAgIGVsZW1lbnRzWyc6J10uc3R5bGUud2lkdGggPSBzdHlsZU1lYXN1cmUodCk7XG4gICAgZWxlbWVudHNbJzonXS5zdHlsZS5oZWlnaHQgPSBzdHlsZU1lYXN1cmUodCk7XG4gICAgZWxlbWVudHNbJywnXS5zdHlsZS53aWR0aCA9IHN0eWxlTWVhc3VyZSgwLjUgKiB0KTtcbiAgICBlbGVtZW50c1snLCddLnN0eWxlLmhlaWdodCA9IHN0eWxlTWVhc3VyZSh0KTtcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8vIFNldCBwb3NpdGlvblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAvLyAqKiBsZWZ0XG5cbiAgICAvLyBBREVGRyBhbGwgaGF2ZSBsZWZ0ID0gMDtcbiAgICBmb3IgKGNvbnN0IGlkIG9mICdBREVGRycpIHtcbiAgICAgIGVsZW1lbnRzW2lkXS5zdHlsZS5sZWZ0ID0gc3R5bGVNZWFzdXJlKDApO1xuICAgIH1cbiAgICAvLyB0aGUgc2VnbWVudHMgb24gdGhlIHJpZ2h0IGhhbmQgc2lkZSAoMSlcbiAgICBmb3IgKGNvbnN0IGlkIG9mICdCQycpIC8vIHZlcnRpY2FsIGVsZW1lbnRzXG4gICAge1xuICAgICAgZWxlbWVudHNbaWRdLnN0eWxlLmxlZnQgPSBzdHlsZU1lYXN1cmUodyAtIDIuNSAqIHQpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGlkIG9mICcuOicpIHtcbiAgICAgIGVsZW1lbnRzW2lkXS5zdHlsZS5sZWZ0ID0gc3R5bGVNZWFzdXJlKHcgLSAxLjUgKiB0KTtcbiAgICB9XG4gICAgZWxlbWVudHNbJywnXS5zdHlsZS5sZWZ0ID0gc3R5bGVNZWFzdXJlKHcgLSB0KTtcblxuICAgIC8vICoqIHRvcFxuICAgIGZvciAoY29uc3QgaWQgb2YgJ0FCRicpIHtcbiAgICAgIGVsZW1lbnRzW2lkXS5zdHlsZS50b3AgPSBzdHlsZU1lYXN1cmUoMCk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgaWQgb2YgJ0NFRzonKSAvLyBzZWdtZW50cyBvZiBuXG4gICAge1xuICAgICAgZWxlbWVudHNbaWRdLnN0eWxlLnRvcCA9IHN0eWxlTWVhc3VyZSgwLjUgKiBoIC0gdCk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgaWQgb2YgJ0QuJykge1xuICAgICAgZWxlbWVudHNbaWRdLnN0eWxlLnRvcCA9IHN0eWxlTWVhc3VyZShoIC0gMiAqIHQpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhbdGhpcy5zcGFjaW5nLCB0aGlzLnRoaWNrbmVzcywgdGhpcy5ob3Jpem9udGFsSCwgdGhpcy5ob3Jpem9udGFsVywgdGhpcy52ZXJ0aWNhbFcsIHRoaXMudmVydGljYWxIXSk7XG4gICAgZWxlbWVudHNbJywnXS5zdHlsZS50b3AgPSBzdHlsZU1lYXN1cmUoaCAtIHQpO1xuICAgIGNvbnNvbGUubG9nKCdzdHlsZSBjaGFuZ2VkJyk7XG4gIH1cblxuXG4gIHByaXZhdGUgc2VnbWVudHMgPSBTVEFOREFSRF9TRUdfTUFQUElORztcblxuICByZWNhbGMoczogb2JqZWN0KTogb2JqZWN0IHtcbiAgICBjb25zdCBvID0gcztcbiAgICBmb3IgKGNvbnN0IGsgaW4gbykge1xuICAgICAgb1trXSA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShvW2tdKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cobyk7XG4gICAgcmV0dXJuIG87XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG4gICAgZm9yIChjb25zdCBrIGluIHRoaXMuc2VnbWVudHMpIHtcbiAgICAgIGlmICghdGhpcy5zZWdtZW50c1trLnRvTG93ZXJDYXNlKCldKSB7XG4gICAgICAgIHRoaXMuc2VnbWVudHNbay50b0xvd2VyQ2FzZSgpXSA9IHRoaXMuc2VnbWVudHNba107XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuc2VnbWVudHNbay50b1VwcGVyQ2FzZSgpXSkge1xuICAgICAgICB0aGlzLnNlZ21lbnRzW2sudG9VcHBlckNhc2UoKV0gPSB0aGlzLnNlZ21lbnRzW2tdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG59XG4iXX0=
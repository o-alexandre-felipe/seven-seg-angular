(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/platform-browser'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('seven-seg', ['exports', '@angular/common', '@angular/platform-browser', '@angular/core'], factory) :
    (factory((global['seven-seg'] = {}),global.ng.common,global.ng.platformBrowser,global.ng.core));
}(this, (function (exports,common,platformBrowser,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SevenSegComponent = /** @class */ (function () {
        function SevenSegComponent() {
            this.nDigs = 8;
            this.value = '';
            this.thickness = 3;
            this.width = 18;
            this.height = 42;
            this.color = 'black';
            this.spacing = 0.5;
        }
        Object.defineProperty(SevenSegComponent.prototype, "digitState", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var m = this.value.match(/(&[^;]*;?|.)([.,:;]?)/g);
                /** @type {?} */
                var result = [];
                for (var i = 0; i < this.nDigs; ++i) {
                    if (i + m.length < this.nDigs) {
                        result.push('');
                    }
                    else {
                        result.push(m[i + m.length - this.nDigs]);
                    }
                }
                return result;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SevenSegComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SevenSegComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-seven-seg',
                        template: "\n    <span *ngFor=\"let d of digitState\">\n      <lib-seven-seg-cell [digit]=\"d\" [color]=\"color\"\n        [width]=\"width\" [height]=\"height\"\n        [spacing]=\"spacing\" [thickness]=\"thickness\"></lib-seven-seg-cell>\n    </span>\n  "
                    }] }
        ];
        /** @nocollapse */
        SevenSegComponent.ctorParameters = function () { return []; };
        SevenSegComponent.propDecorators = {
            nDigs: [{ type: core.Input, args: ['count',] }],
            value: [{ type: core.Input, args: ['chars',] }],
            thickness: [{ type: core.Input, args: ['thickness',] }],
            width: [{ type: core.Input, args: ['char-width',] }],
            height: [{ type: core.Input, args: ['char-height',] }],
            color: [{ type: core.Input, args: ['color',] }],
            spacing: [{ type: core.Input, args: ['spacing',] }]
        };
        return SevenSegComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STANDARD_SEG_MAPPING = {
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
             */ function () {
                var e_1, _a, e_2, _b, e_3, _c;
                /** @type {?} */
                var s = {};
                try {
                    for (var _d = __values('ABCDEFG.'), _e = _d.next(); !_e.done; _e = _d.next()) {
                        var k = _e.value;
                        s[k] = false;
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_e && !_e.done && (_a = _d.return))
                            _a.call(_d);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                try {
                    for (var _f = __values(this.digit), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var d = _g.value;
                        try {
                            for (var _h = __values(this.segments[d]), _j = _h.next(); !_j.done; _j = _h.next()) {
                                var k = _j.value;
                                s[k] = true;
                            }
                        }
                        catch (e_3_1) {
                            e_3 = { error: e_3_1 };
                        }
                        finally {
                            try {
                                if (_j && !_j.done && (_c = _h.return))
                                    _c.call(_h);
                            }
                            finally {
                                if (e_3)
                                    throw e_3.error;
                            }
                        }
                    }
                }
                catch (e_2_1) {
                    e_2 = { error: e_2_1 };
                }
                finally {
                    try {
                        if (_g && !_g.done && (_b = _f.return))
                            _b.call(_f);
                    }
                    finally {
                        if (e_2)
                            throw e_2.error;
                    }
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
            { type: core.Component, args: [{
                        selector: 'lib-seven-seg-digit',
                        template: "\n<div #digitBed>\n <!-- <div class=\"seg-horizontal\" [class.display-bottom]=\"segState.A\"></div>\n  <div class=\"seg-vertical\" [class.display-right]=\"segState.F\"></div> -->\n  <div [class.display-left]  =\"segState.F\"\n       [class.display-top]   =\"segState.A\"\n       [class.display-right] =\"segState.B\"\n       [class.display-bottom]=\"segState.G\"\n       #box1>\n  </div>\n  <!--\n  <div class=\"set-vertical\" [class.display-left]=\"segState.B\"></div>\n  <div class=\"seg-vertical\" [class.display-right]=\"segState.E\"></div>\n  -->\n  <div [class.display-left]  =\"segState.E\"\n       [class.display-top]   =\"segState.G\"\n       [class.display-right] =\"segState.C\"\n       [class.display-bottom]=\"segState.D\"\n       #box2>\n  </div>\n  <!--\n  <div class=\"set-vertical\" [class.display-top]=\"segState.C\"></div>\n  <div class=\"seg-horizontal\" [class.display-bottom]=\"segState.D\"></div>\n  -->\n\n</div>\n\n<div class=\"point-bed\" [ngStyle]=\"{'width': sanitizer.bypassSecurityTrustStyle('calc(1.5*'+thickness+')'),\n    'padding':sanitizer.bypassSecurityTrustStyle('calc(0.5*'+thickness+')'),\n  'height': height}\">\n  <div class=\"point0\" [class.point-on]=\"segState[':']\"\n       [ngStyle]=\"{'background-color': color, 'width': thickness,'height': thickness,\n       'top':sanitizer.bypassSecurityTrustStyle('calc(2*'+thickness+')')}\"></div>\n  <div class=\"point1\" [class.point-on]=\"segState['.']\"\n       [ngStyle]=\"{'background-color': color, 'width': thickness,'height': thickness,\n       'top':sanitizer.bypassSecurityTrustStyle('calc(' + height + '-2*'+thickness+')')}\"></div>\n</div>\n",
                        styles: ["div.bed{position:relative;display:inline-block;overflow:hidden;border:2px dashed #000;width:27px;height:42px}div#box1{width:15px;height:15px;position:inherit;top:0;border:6px solid transparent;border-bottom-width:3px;border-radius:0}div#box2{width:15px;height:15px;position:inherit;bottom:0;border:6px solid transparent;border-top-width:3px;border-radius:0}div.seg-horizontal{width:15px;height:0}div.seg-vertical{width:0;height:15px}div.seg-box{width:15px;height:15px;border:6px solid transparent}div.display-left{border-left-color:inherit}div.display-right{border-right-color:inherit}div.display-top{border-top-color:inherit}div.display-bottom{border-bottom-color:inherit}div.point-bed{position:inherit;border:0;margin:0;top:0;right:0;display:inline-block;width:10px;height:42px}div.point1{position:relative;top:20px;visibility:hidden}div.point0{position:relative;top:5px;visibility:hidden}div.point-on{visibility:visible}"]
                    }] }
        ];
        /** @nocollapse */
        SevenSegDigitComponent.ctorParameters = function () {
            return [
                { type: platformBrowser.DomSanitizer }
            ];
        };
        SevenSegDigitComponent.propDecorators = {
            digit: [{ type: core.Input, args: ['digit',] }],
            color: [{ type: core.Input, args: ['color',] }],
            thickness: [{ type: core.Input, args: ['thickness',] }],
            width: [{ type: core.Input, args: ['width',] }],
            height: [{ type: core.Input, args: ['height',] }],
            box1: [{ type: core.ViewChild, args: ['box1',] }],
            box2: [{ type: core.ViewChild, args: ['box2',] }]
        };
        return SevenSegDigitComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
             */ function () {
                return this._digit;
            },
            set: /**
             * @param {?} digit
             * @return {?}
             */ function (digit) {
                var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
                /** @type {?} */
                var s = {};
                this._digit = digit;
                try {
                    for (var _e = __values('ABCDEFG.,:'), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var k = _f.value;
                        s[k] = false;
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_f && !_f.done && (_a = _e.return))
                            _a.call(_e);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                // the user may specify any custom character using a sintax similar to
                // entities, &.*; the character will be the combination of all the segments
                // whose identifier is present in the entity.
                if (this.digit[0] === '&') {
                    try {
                        for (var _g = __values(this._digit), _h = _g.next(); !_h.done; _h = _g.next()) {
                            var k = _h.value;
                            if (k !== ';' && k !== '&') {
                                s[k] = true;
                            }
                        }
                    }
                    catch (e_2_1) {
                        e_2 = { error: e_2_1 };
                    }
                    finally {
                        try {
                            if (_h && !_h.done && (_b = _g.return))
                                _b.call(_g);
                        }
                        finally {
                            if (e_2)
                                throw e_2.error;
                        }
                    }
                }
                else {
                    try {
                        for (var _j = __values(this._digit), _k = _j.next(); !_k.done; _k = _j.next()) {
                            var d = _k.value;
                            try {
                                for (var _l = __values(this.segments[d]), _m = _l.next(); !_m.done; _m = _l.next()) {
                                    var k = _m.value;
                                    s[k] = true;
                                }
                            }
                            catch (e_4_1) {
                                e_4 = { error: e_4_1 };
                            }
                            finally {
                                try {
                                    if (_m && !_m.done && (_d = _l.return))
                                        _d.call(_l);
                                }
                                finally {
                                    if (e_4)
                                        throw e_4.error;
                                }
                            }
                        }
                    }
                    catch (e_3_1) {
                        e_3 = { error: e_3_1 };
                    }
                    finally {
                        try {
                            if (_k && !_k.done && (_c = _j.return))
                                _c.call(_j);
                        }
                        finally {
                            if (e_3)
                                throw e_3.error;
                        }
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
                var styleMeasure = ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) { return d + 'px'; });
                this.bed.nativeElement.style.width = styleMeasure(w);
                this.bed.nativeElement.style.height = styleMeasure(h);
                this.bed.nativeElement.style.top = styleMeasure(0);
                this.bed.nativeElement.style.left = styleMeasure(0);
                // I did not find a way to iterate over elements, so I am doing using
                // native DOM method.
                for (el = ( /** @type {?} */(this.bed.nativeElement.firstChild)); el !== null; el = ( /** @type {?} */(el.nextSibling))) {
                    elements[el.id] = el;
                }
                try {
                    ///////////////////////////////////////////////////////////////
                    //  Set color
                    //////////////////////////////////////////////////////////////
                    for (var _l = __values('ABCDEFG'), _m = _l.next(); !_m.done; _m = _l.next()) {
                        var id = _m.value;
                        elements[id].style.backgroundColor = 'transparent';
                    }
                }
                catch (e_5_1) {
                    e_5 = { error: e_5_1 };
                }
                finally {
                    try {
                        if (_m && !_m.done && (_a = _l.return))
                            _a.call(_l);
                    }
                    finally {
                        if (e_5)
                            throw e_5.error;
                    }
                }
                try {
                    for (var _o = __values('.:,'), _p = _o.next(); !_p.done; _p = _o.next()) {
                        var id = _p.value;
                        elements[id].style.backgroundColor = this.color;
                    }
                }
                catch (e_6_1) {
                    e_6 = { error: e_6_1 };
                }
                finally {
                    try {
                        if (_p && !_p.done && (_b = _o.return))
                            _b.call(_o);
                    }
                    finally {
                        if (e_6)
                            throw e_6.error;
                    }
                }
                ///////////////////////////////////////////////////////////////
                ///  Set size
                ///////////////////////////////////////////////////////////////
                this.horizontalW = w - 1.5 * t;
                this.horizontalH = t;
                try {
                    for (var _q = __values('ADG'), _r = _q.next(); !_r.done; _r = _q.next()) {
                        var id = _r.value;
                        el = elements[id];
                        el.style.width = styleMeasure(w - 1.5 * t);
                        el.style.height = styleMeasure(t);
                    }
                }
                catch (e_7_1) {
                    e_7 = { error: e_7_1 };
                }
                finally {
                    try {
                        if (_r && !_r.done && (_c = _q.return))
                            _c.call(_q);
                    }
                    finally {
                        if (e_7)
                            throw e_7.error;
                    }
                }
                this.verticalW = t;
                this.verticalH = 0.5 * h;
                try {
                    for (var _s = __values('BCEF'), _t = _s.next(); !_t.done; _t = _s.next()) {
                        var id = _t.value;
                        el = elements[id];
                        el.style.width = styleMeasure(t);
                        el.style.height = styleMeasure(0.5 * h);
                    }
                }
                catch (e_8_1) {
                    e_8 = { error: e_8_1 };
                }
                finally {
                    try {
                        if (_t && !_t.done && (_d = _s.return))
                            _d.call(_s);
                    }
                    finally {
                        if (e_8)
                            throw e_8.error;
                    }
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
                    for (var _u = __values('ADEFG'), _v = _u.next(); !_v.done; _v = _u.next()) {
                        var id = _v.value;
                        elements[id].style.left = styleMeasure(0);
                    }
                }
                catch (e_9_1) {
                    e_9 = { error: e_9_1 };
                }
                finally {
                    try {
                        if (_v && !_v.done && (_e = _u.return))
                            _e.call(_u);
                    }
                    finally {
                        if (e_9)
                            throw e_9.error;
                    }
                }
                try {
                    // the segments on the right hand side (1)
                    for (var _w = __values('BC'), _x = _w.next(); !_x.done; _x = _w.next()) {
                        var id = _x.value;
                        elements[id].style.left = styleMeasure(w - 2.5 * t);
                    }
                }
                catch (e_10_1) {
                    e_10 = { error: e_10_1 };
                }
                finally {
                    try {
                        if (_x && !_x.done && (_f = _w.return))
                            _f.call(_w);
                    }
                    finally {
                        if (e_10)
                            throw e_10.error;
                    }
                }
                try {
                    for (var _y = __values('.:'), _z = _y.next(); !_z.done; _z = _y.next()) {
                        var id = _z.value;
                        elements[id].style.left = styleMeasure(w - 1.5 * t);
                    }
                }
                catch (e_11_1) {
                    e_11 = { error: e_11_1 };
                }
                finally {
                    try {
                        if (_z && !_z.done && (_g = _y.return))
                            _g.call(_y);
                    }
                    finally {
                        if (e_11)
                            throw e_11.error;
                    }
                }
                elements[','].style.left = styleMeasure(w - t);
                try {
                    // ** top
                    for (var _0 = __values('ABF'), _1 = _0.next(); !_1.done; _1 = _0.next()) {
                        var id = _1.value;
                        elements[id].style.top = styleMeasure(0);
                    }
                }
                catch (e_12_1) {
                    e_12 = { error: e_12_1 };
                }
                finally {
                    try {
                        if (_1 && !_1.done && (_h = _0.return))
                            _h.call(_0);
                    }
                    finally {
                        if (e_12)
                            throw e_12.error;
                    }
                }
                try {
                    for (var _2 = __values('CEG:'), _3 = _2.next(); !_3.done; _3 = _2.next()) {
                        var id = _3.value;
                        elements[id].style.top = styleMeasure(0.5 * h - t);
                    }
                }
                catch (e_13_1) {
                    e_13 = { error: e_13_1 };
                }
                finally {
                    try {
                        if (_3 && !_3.done && (_j = _2.return))
                            _j.call(_2);
                    }
                    finally {
                        if (e_13)
                            throw e_13.error;
                    }
                }
                try {
                    for (var _4 = __values('D.'), _5 = _4.next(); !_5.done; _5 = _4.next()) {
                        var id = _5.value;
                        elements[id].style.top = styleMeasure(h - 2 * t);
                    }
                }
                catch (e_14_1) {
                    e_14 = { error: e_14_1 };
                }
                finally {
                    try {
                        if (_5 && !_5.done && (_k = _4.return))
                            _k.call(_4);
                    }
                    finally {
                        if (e_14)
                            throw e_14.error;
                    }
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
            { type: core.Component, args: [{
                        selector: 'lib-seven-seg-cell',
                        template: "<div #bed class=\"bed\">\n  <div class=\"seg horizontal\" id=\"A\" [class.on]=\"segState['A']\">\n    <lib-hexagon [width]=\"horizontalW\" [height]=\"horizontalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg vertical\" id=\"B\" [class.on]=\"segState['B']\">\n    <lib-hexagon [width]=\"verticalW\" [height]=\"verticalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg vertical\" id=\"C\" [class.on]=\"segState['C']\">\n    <lib-hexagon [width]=\"verticalW\" [height]=\"verticalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg horizontal\" id=\"D\" [class.on]=\"segState['D']\">\n    <lib-hexagon [width]=\"horizontalW\" [height]=\"horizontalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg vertical\" id=\"E\" [class.on]=\"segState['E']\">\n    <lib-hexagon [width]=\"verticalW\" [height]=\"verticalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg vertical\" id=\"F\" [class.on]=\"segState['F']\">\n    <lib-hexagon [width]=\"verticalW\" [height]=\"verticalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg horizontal\" id=\"G\" [class.on]=\"segState['G']\">\n    <lib-hexagon [width]=\"horizontalW\" [height]=\"horizontalH\" [color]=\"color\" [spacing]=\"spacing\"></lib-hexagon>\n  </div>\n  <div class=\"seg dot\" id=\".\" [class.on]=\"segState['.']\"></div>\n  <div class=\"seg colon\" id=\":\" [class.on]=\"segState[':']\"></div>\n  <div class=\"seg comma\" id=\",\" [class.on]=\"segState[',']\"></div>\n</div>\n",
                        styles: ["div.bed{position:relative;display:inline-block;top:0;left:0;width:30px;height:40px}div.seg{position:absolute;display:block;background-color:#800;visibility:hidden}div.horizontal{width:20px;height:6px;left:0}div.vertical{width:6px;height:20px}div#A{top:0;left:0}div#B{left:14px;top:0}div#C{left:14px;top:14px}div#E,div#G{left:0;top:14px}div#D{left:0;top:28px}div#F{left:0;top:0}div.dot{top:28px;left:21.5px;width:6px;height:6px}div.colon{top:14px;left:21.5px;width:6px;height:6px}div.comma{top:34px;left:24px;width:3px;height:6px}div.on{visibility:visible}"]
                    }] }
        ];
        /** @nocollapse */
        SevenSegCellComponent.ctorParameters = function () {
            return [
                { type: platformBrowser.DomSanitizer }
            ];
        };
        SevenSegCellComponent.propDecorators = {
            digit: [{ type: core.Input, args: ['digit',] }],
            color: [{ type: core.Input, args: ['color',] }],
            spacing: [{ type: core.Input, args: ['spacing',] }],
            thickness: [{ type: core.Input, args: ['thickness',] }],
            width: [{ type: core.Input, args: ['width',] }],
            height: [{ type: core.Input, args: ['height',] }],
            bed: [{ type: core.ViewChild, args: ['bed',] }]
        };
        return SevenSegCellComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HexagonComponent = /** @class */ (function () {
        function HexagonComponent() {
            this.s = 0;
            this.color = 'black';
        }
        Object.defineProperty(HexagonComponent.prototype, "width", {
            get: /**
             * @return {?}
             */ function () { return this.w; },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.w = value;
                this.fit();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HexagonComponent.prototype, "height", {
            get: /**
             * @return {?}
             */ function () { return this.h; },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.h = value;
                this.fit();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        HexagonComponent.prototype.fit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var w = this.w;
                /** @type {?} */
                var h = this.h;
                /** @type {?} */
                var s = this.s;
                /** @type {?} */
                var sw;
                /** @type {?} */
                var sh;
                /** @type {?} */
                var x0;
                /** @type {?} */
                var y0;
                /** @type {?} */
                var x1;
                /** @type {?} */
                var y1;
                /** @type {?} */
                var t;
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
            };
        /**
         * @return {?}
         */
        HexagonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.fit();
            };
        HexagonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-hexagon',
                        template: "<div [style.borderColor]=\"color\" class=\"box\"\n     [ngStyle]=\"{width: w + 'px', height: h + 'px'}\" >\n  <div #s0 [style.top.px]=\"y0\" [style.left.px]=\"x0\"\n       class='vis'[class.vertical0]=\"(w < h)\" [class.horizontal0]=\"(w > h)\"\n       [ngStyle]=\"{top: (y0)+'px', left: (x0)+'px',\n       width:(sw)+'px',height:(sh)+'px', 'border-width': t+'px'}\"\n  ></div>\n  <div [style.top.px]=\"y1\" [style.left.px]=\"x1\"\n       class='vis' [class.vertical1]=\"(w < h)\" [class.horizontal1]=\"(w > h)\"\n       [ngStyle]=\"{top: (y1)+'px', left: (x1)+'px',\n       width:(sw)+'px',height:(sh)+'px', 'border-width': t+'px'}\"\n  ></div>\n</div>\n",
                        styles: ["div.vis{border-style:solid;border-color:transparent;position:absolute}div.vertical0{left:-50%;border-right-color:inherit}div.vertical1{left:50%;border-left-color:inherit}div.horizontal0{top:-50%;border-bottom-color:inherit}div.horizontal1{top:50%;border-top-color:inherit}div.box{position:relative;display:inline-block;top:0;left:0;overflow:unset;vertical-align:top}"]
                    }] }
        ];
        /** @nocollapse */
        HexagonComponent.ctorParameters = function () { return []; };
        HexagonComponent.propDecorators = {
            s: [{ type: core.Input, args: ['spacing',] }],
            color: [{ type: core.Input, args: ['color',] }],
            width: [{ type: core.Input, args: ['width',] }],
            height: [{ type: core.Input, args: ['height',] }]
        };
        return HexagonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SevenSegModule = /** @class */ (function () {
        function SevenSegModule() {
        }
        SevenSegModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [SevenSegComponent,
                            SevenSegDigitComponent,
                            SevenSegCellComponent,
                            HexagonComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [SevenSegComponent, SevenSegCellComponent, HexagonComponent]
                    },] }
        ];
        return SevenSegModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.SevenSegModule = SevenSegModule;
    exports.SevenSegComponent = SevenSegComponent;
    exports.SevenSegDigitComponent = SevenSegDigitComponent;
    exports.SevenSegCellComponent = SevenSegCellComponent;
    exports.HexagonComponent = HexagonComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=seven-seg.umd.js.map
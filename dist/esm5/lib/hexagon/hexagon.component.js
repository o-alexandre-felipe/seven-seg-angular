/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var HexagonComponent = /** @class */ (function () {
    function HexagonComponent() {
        this.s = 0;
        this.color = 'black';
    }
    Object.defineProperty(HexagonComponent.prototype, "width", {
        get: /**
         * @return {?}
         */
        function () { return this.w; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.w = value;
            this.fit();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HexagonComponent.prototype, "height", {
        get: /**
         * @return {?}
         */
        function () { return this.h; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        { type: Component, args: [{
                    selector: 'lib-hexagon',
                    template: "<div [style.borderColor]=\"color\" class=\"box\"\n     [ngStyle]=\"{width: w + 'px', height: h + 'px'}\" >\n  <div #s0 [style.top.px]=\"y0\" [style.left.px]=\"x0\"\n       class='vis'[class.vertical0]=\"(w < h)\" [class.horizontal0]=\"(w > h)\"\n       [ngStyle]=\"{top: (y0)+'px', left: (x0)+'px',\n       width:(sw)+'px',height:(sh)+'px', 'border-width': t+'px'}\"\n  ></div>\n  <div [style.top.px]=\"y1\" [style.left.px]=\"x1\"\n       class='vis' [class.vertical1]=\"(w < h)\" [class.horizontal1]=\"(w > h)\"\n       [ngStyle]=\"{top: (y1)+'px', left: (x1)+'px',\n       width:(sw)+'px',height:(sh)+'px', 'border-width': t+'px'}\"\n  ></div>\n</div>\n",
                    styles: ["div.vis{border-style:solid;border-color:transparent;position:absolute}div.vertical0{left:-50%;border-right-color:inherit}div.vertical1{left:50%;border-left-color:inherit}div.horizontal0{top:-50%;border-bottom-color:inherit}div.horizontal1{top:50%;border-top-color:inherit}div.box{position:relative;display:inline-block;top:0;left:0;overflow:unset;vertical-align:top}"]
                }] }
    ];
    /** @nocollapse */
    HexagonComponent.ctorParameters = function () { return []; };
    HexagonComponent.propDecorators = {
        s: [{ type: Input, args: ['spacing',] }],
        color: [{ type: Input, args: ['color',] }],
        width: [{ type: Input, args: ['width',] }],
        height: [{ type: Input, args: ['height',] }]
    };
    return HexagonComponent;
}());
export { HexagonComponent };
if (false) {
    /** @type {?} */
    HexagonComponent.prototype.s;
    /** @type {?} */
    HexagonComponent.prototype.color;
    /** @type {?} */
    HexagonComponent.prototype.h;
    /** @type {?} */
    HexagonComponent.prototype.w;
    /** @type {?} */
    HexagonComponent.prototype.t;
    /** @type {?} */
    HexagonComponent.prototype.sw;
    /** @type {?} */
    HexagonComponent.prototype.sh;
    /** @type {?} */
    HexagonComponent.prototype.x0;
    /** @type {?} */
    HexagonComponent.prototype.y0;
    /** @type {?} */
    HexagonComponent.prototype.x1;
    /** @type {?} */
    HexagonComponent.prototype.y1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGV4YWdvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZXZlbi1zZWcvIiwic291cmNlcyI6WyJsaWIvaGV4YWdvbi9oZXhhZ29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFdkQ7SUFvRUU7UUE5RGtCLE1BQUMsR0FBRyxDQUFDLENBQUM7UUFDUixVQUFLLEdBQUcsT0FBTyxDQUFDO0lBNkRoQixDQUFDO0lBNURqQixzQkFBb0IsbUNBQUs7Ozs7UUFJekIsY0FBc0IsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7UUFKdEMsVUFBMEIsS0FBYTtZQUNyQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNmLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNiLENBQUM7OztPQUFBO0lBR0Qsc0JBQXFCLG9DQUFNOzs7O1FBSTNCLGNBQXVCLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7O1FBSnZDLFVBQTRCLEtBQWE7WUFDdkMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDZixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDYixDQUFDOzs7T0FBQTs7OztJQWFELDhCQUFHOzs7SUFBSDs7WUFDUSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7O1lBQ1YsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDOztZQUNWLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQzs7WUFDWixFQUFVOztZQUNWLEVBQVU7O1lBQ1YsRUFBVTs7WUFDVixFQUFVOztZQUNWLEVBQVU7O1lBQ1YsRUFBVTs7WUFDVixDQUFTO1FBQ2IsSUFBSyxDQUFDLEdBQUcsQ0FBQyxFQUFHLFdBQVc7U0FDeEI7WUFDRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNWLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNSLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDUCxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZixFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ1AsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQjthQUFNLEVBQUUsYUFBYTtZQUNwQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNWLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNmLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNmLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNSLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDUCxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDUjtRQUNELElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsNkRBQTZEO0lBQy9ELENBQUM7Ozs7SUFHRCxtQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixDQUFDOztnQkF4RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QiwycEJBQXVDOztpQkFFeEM7Ozs7O29CQUVFLEtBQUssU0FBQyxTQUFTO3dCQUNmLEtBQUssU0FBQyxPQUFPO3dCQUNiLEtBQUssU0FBQyxPQUFPO3lCQU1iLEtBQUssU0FBQyxRQUFROztJQTREakIsdUJBQUM7Q0FBQSxBQTFFRCxJQTBFQztTQXJFWSxnQkFBZ0I7OztJQUMzQiw2QkFBd0I7O0lBQ3hCLGlDQUFnQzs7SUFhaEMsNkJBQVU7O0lBQ1YsNkJBQVU7O0lBQ1YsNkJBQVU7O0lBQ1YsOEJBQVc7O0lBQ1gsOEJBQVc7O0lBQ1gsOEJBQVc7O0lBQ1gsOEJBQVc7O0lBQ1gsOEJBQVc7O0lBQ1gsOEJBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1oZXhhZ29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hleGFnb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oZXhhZ29uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIZXhhZ29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdzcGFjaW5nJykgcyA9IDA7XG4gIEBJbnB1dCgnY29sb3InKSBjb2xvciA9ICdibGFjayc7XG4gIEBJbnB1dCgnd2lkdGgnKSBzZXQgd2lkdGgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMudyA9IHZhbHVlO1xuICAgIHRoaXMuZml0KCk7XG4gIH1cbiAgZ2V0IHdpZHRoKCk6IG51bWJlciB7IHJldHVybiB0aGlzLnc7IH1cblxuICBASW5wdXQoJ2hlaWdodCcpIHNldCBoZWlnaHQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuaCA9IHZhbHVlO1xuICAgIHRoaXMuZml0KCk7XG4gIH1cbiAgZ2V0IGhlaWdodCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5oOyB9XG5cbiAgaDogbnVtYmVyO1xuICB3OiBudW1iZXI7XG4gIHQ6IG51bWJlcjtcbiAgc3c6IG51bWJlcjtcbiAgc2g6IG51bWJlcjtcbiAgeDA6IG51bWJlcjtcbiAgeTA6IG51bWJlcjtcbiAgeDE6IG51bWJlcjtcbiAgeTE6IG51bWJlcjtcblxuICBmaXQoKTogdm9pZCB7XG4gICAgY29uc3QgdyA9IHRoaXMudztcbiAgICBjb25zdCBoID0gdGhpcy5oO1xuICAgIGNvbnN0IHMgPSB0aGlzLnM7XG4gICAgbGV0IHN3OiBudW1iZXI7XG4gICAgbGV0IHNoOiBudW1iZXI7XG4gICAgbGV0IHgwOiBudW1iZXI7XG4gICAgbGV0IHkwOiBudW1iZXI7XG4gICAgbGV0IHgxOiBudW1iZXI7XG4gICAgbGV0IHkxOiBudW1iZXI7XG4gICAgbGV0IHQ6IG51bWJlcjtcbiAgICBpZiAoIHcgPCBoKSAgLy8gdmVydGljYWxcbiAgICB7XG4gICAgICB0ID0gdyAvIDI7XG4gICAgICB4MCA9IC10O1xuICAgICAgeDEgPSB0O1xuICAgICAgeTAgPSB0ICsgcyAvIDI7XG4gICAgICB5MSA9IHQgKyBzIC8gMjtcbiAgICAgIHN3ID0gMDtcbiAgICAgIHNoID0gaCAtIDQgKiB0IC0gcztcbiAgICB9IGVsc2UgeyAvLyBob3Jpem9udGFsXG4gICAgICB0ID0gaCAvIDI7XG4gICAgICB4MCA9IHQgKyBzIC8gMjtcbiAgICAgIHgxID0gdCArIHMgLyAyO1xuICAgICAgeTAgPSAtdDtcbiAgICAgIHkxID0gdDtcbiAgICAgIHN3ID0gdyAtIDQgKiB0IC0gcztcbiAgICAgIHNoID0gMDtcbiAgICB9XG4gICAgdGhpcy50ID0gdDtcbiAgICB0aGlzLngwID0geDA7XG4gICAgdGhpcy55MCA9IHkwO1xuICAgIHRoaXMueDEgPSB4MTtcbiAgICB0aGlzLnkxID0geTE7XG4gICAgdGhpcy5zdyA9IHN3O1xuICAgIHRoaXMuc2ggPSBzaDtcbiAgICAvLyBjb25zb2xlLmxvZyh7dzogdyxoOiBoLHQ6IHQseDA6IHgwLHkwOiB5MCx4MTogeDEseTE6IHkxfSk7XG4gIH1cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZpdCgpO1xuICB9XG5cbn1cbiJdfQ==
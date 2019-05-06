/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
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
         */
        function () {
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
        { type: Component, args: [{
                    selector: 'lib-seven-seg',
                    template: "\n    <span *ngFor=\"let d of digitState\">\n      <lib-seven-seg-cell [digit]=\"d\" [color]=\"color\"\n        [width]=\"width\" [height]=\"height\"\n        [spacing]=\"spacing\" [thickness]=\"thickness\"></lib-seven-seg-cell>\n    </span>\n  "
                }] }
    ];
    /** @nocollapse */
    SevenSegComponent.ctorParameters = function () { return []; };
    SevenSegComponent.propDecorators = {
        nDigs: [{ type: Input, args: ['count',] }],
        value: [{ type: Input, args: ['chars',] }],
        thickness: [{ type: Input, args: ['thickness',] }],
        width: [{ type: Input, args: ['char-width',] }],
        height: [{ type: Input, args: ['char-height',] }],
        color: [{ type: Input, args: ['color',] }],
        spacing: [{ type: Input, args: ['spacing',] }]
    };
    return SevenSegComponent;
}());
export { SevenSegComponent };
if (false) {
    /** @type {?} */
    SevenSegComponent.prototype.nDigs;
    /** @type {?} */
    SevenSegComponent.prototype.value;
    /** @type {?} */
    SevenSegComponent.prototype.thickness;
    /** @type {?} */
    SevenSegComponent.prototype.width;
    /** @type {?} */
    SevenSegComponent.prototype.height;
    /** @type {?} */
    SevenSegComponent.prototype.color;
    /** @type {?} */
    SevenSegComponent.prototype.spacing;
    /** @type {?} */
    SevenSegComponent.prototype.indices;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V2ZW4tc2VnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NldmVuLXNlZy8iLCJzb3VyY2VzIjpbImxpYi9zZXZlbi1zZWcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFVLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV2RDtJQWlDRTtRQXBCZ0IsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDUCxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNWLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUNkLFlBQU8sR0FBRyxHQUFHLENBQUM7SUFlaEMsQ0FBQztJQWRELHNCQUFJLHlDQUFVOzs7O1FBQWQ7O2dCQUNRLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQzs7Z0JBQzlDLE1BQU0sR0FBRyxFQUFFO1lBQ2pCLEtBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFHO2dCQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ2pCO3FCQUFNO29CQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUMzQzthQUNGO1lBQ0QsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQzs7O09BQUE7Ozs7SUFLRCxvQ0FBUTs7O0lBQVIsY0FBYSxDQUFDOztnQkFwQ2YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsdVBBTVQ7aUJBRUY7Ozs7O3dCQUdFLEtBQUssU0FBQyxPQUFPO3dCQUNiLEtBQUssU0FBQyxPQUFPOzRCQUNiLEtBQUssU0FBQyxXQUFXO3dCQUNqQixLQUFLLFNBQUMsWUFBWTt5QkFDbEIsS0FBSyxTQUFDLGFBQWE7d0JBQ25CLEtBQUssU0FBQyxPQUFPOzBCQUNiLEtBQUssU0FBQyxTQUFTOztJQW1CbEIsd0JBQUM7Q0FBQSxBQXRDRCxJQXNDQztTQTFCWSxpQkFBaUI7OztJQUM1QixrQ0FBMEI7O0lBQzFCLGtDQUEyQjs7SUFDM0Isc0NBQWtDOztJQUNsQyxrQ0FBZ0M7O0lBQ2hDLG1DQUFrQzs7SUFDbEMsa0NBQWdDOztJQUNoQyxvQ0FBZ0M7O0lBYWhDLG9DQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNldmVuLXNlZycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW4gKm5nRm9yPVwibGV0IGQgb2YgZGlnaXRTdGF0ZVwiPlxuICAgICAgPGxpYi1zZXZlbi1zZWctY2VsbCBbZGlnaXRdPVwiZFwiIFtjb2xvcl09XCJjb2xvclwiXG4gICAgICAgIFt3aWR0aF09XCJ3aWR0aFwiIFtoZWlnaHRdPVwiaGVpZ2h0XCJcbiAgICAgICAgW3NwYWNpbmddPVwic3BhY2luZ1wiIFt0aGlja25lc3NdPVwidGhpY2tuZXNzXCI+PC9saWItc2V2ZW4tc2VnLWNlbGw+XG4gICAgPC9zcGFuPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuXG5leHBvcnQgY2xhc3MgU2V2ZW5TZWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ2NvdW50JykgbkRpZ3MgPSA4O1xuICBASW5wdXQoJ2NoYXJzJykgdmFsdWUgPSAnJztcbiAgQElucHV0KCd0aGlja25lc3MnKSB0aGlja25lc3MgPSAzO1xuICBASW5wdXQoJ2NoYXItd2lkdGgnKSB3aWR0aCA9IDE4O1xuICBASW5wdXQoJ2NoYXItaGVpZ2h0JykgaGVpZ2h0ID0gNDI7XG4gIEBJbnB1dCgnY29sb3InKSBjb2xvciA9ICdibGFjayc7XG4gIEBJbnB1dCgnc3BhY2luZycpIHNwYWNpbmcgPSAwLjU7XG4gIGdldCBkaWdpdFN0YXRlKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBtID0gdGhpcy52YWx1ZS5tYXRjaCgvKCZbXjtdKjs/fC4pKFsuLDo7XT8pL2cpO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMubkRpZ3M7ICsraSApIHtcbiAgICAgIGlmIChpICsgbS5sZW5ndGggPCB0aGlzLm5EaWdzKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKCcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKG1baSArIG0ubGVuZ3RoIC0gdGhpcy5uRGlnc10pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGluZGljZXM6IG51bWJlciBbXTtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG59XG4iXX0=
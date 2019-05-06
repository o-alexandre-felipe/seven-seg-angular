/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SevenSegComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V2ZW4tc2VnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NldmVuLXNlZy8iLCJzb3VyY2VzIjpbImxpYi9zZXZlbi1zZWcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFVLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQWN2RCxNQUFNLE9BQU8saUJBQWlCO0lBcUI1QjtRQXBCZ0IsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDUCxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNWLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUNkLFlBQU8sR0FBRyxHQUFHLENBQUM7SUFlaEMsQ0FBQzs7OztJQWRELElBQUksVUFBVTs7Y0FDTixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7O2NBQzlDLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLEtBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFHO1lBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNqQjtpQkFBTTtnQkFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUMzQztTQUNGO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7OztJQUtELFFBQVEsS0FBSyxDQUFDOzs7WUFwQ2YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7Ozs7OztHQU1UO2FBRUY7Ozs7O29CQUdFLEtBQUssU0FBQyxPQUFPO29CQUNiLEtBQUssU0FBQyxPQUFPO3dCQUNiLEtBQUssU0FBQyxXQUFXO29CQUNqQixLQUFLLFNBQUMsWUFBWTtxQkFDbEIsS0FBSyxTQUFDLGFBQWE7b0JBQ25CLEtBQUssU0FBQyxPQUFPO3NCQUNiLEtBQUssU0FBQyxTQUFTOzs7O0lBTmhCLGtDQUEwQjs7SUFDMUIsa0NBQTJCOztJQUMzQixzQ0FBa0M7O0lBQ2xDLGtDQUFnQzs7SUFDaEMsbUNBQWtDOztJQUNsQyxrQ0FBZ0M7O0lBQ2hDLG9DQUFnQzs7SUFhaEMsb0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2V2ZW4tc2VnJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiAqbmdGb3I9XCJsZXQgZCBvZiBkaWdpdFN0YXRlXCI+XG4gICAgICA8bGliLXNldmVuLXNlZy1jZWxsIFtkaWdpdF09XCJkXCIgW2NvbG9yXT1cImNvbG9yXCJcbiAgICAgICAgW3dpZHRoXT1cIndpZHRoXCIgW2hlaWdodF09XCJoZWlnaHRcIlxuICAgICAgICBbc3BhY2luZ109XCJzcGFjaW5nXCIgW3RoaWNrbmVzc109XCJ0aGlja25lc3NcIj48L2xpYi1zZXZlbi1zZWctY2VsbD5cbiAgICA8L3NwYW4+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTZXZlblNlZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnY291bnQnKSBuRGlncyA9IDg7XG4gIEBJbnB1dCgnY2hhcnMnKSB2YWx1ZSA9ICcnO1xuICBASW5wdXQoJ3RoaWNrbmVzcycpIHRoaWNrbmVzcyA9IDM7XG4gIEBJbnB1dCgnY2hhci13aWR0aCcpIHdpZHRoID0gMTg7XG4gIEBJbnB1dCgnY2hhci1oZWlnaHQnKSBoZWlnaHQgPSA0MjtcbiAgQElucHV0KCdjb2xvcicpIGNvbG9yID0gJ2JsYWNrJztcbiAgQElucHV0KCdzcGFjaW5nJykgc3BhY2luZyA9IDAuNTtcbiAgZ2V0IGRpZ2l0U3RhdGUoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IG0gPSB0aGlzLnZhbHVlLm1hdGNoKC8oJlteO10qOz98LikoWy4sOjtdPykvZyk7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5uRGlnczsgKytpICkge1xuICAgICAgaWYgKGkgKyBtLmxlbmd0aCA8IHRoaXMubkRpZ3MpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnB1c2gobVtpICsgbS5sZW5ndGggLSB0aGlzLm5EaWdzXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaW5kaWNlczogbnVtYmVyIFtdO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbn1cbiJdfQ==
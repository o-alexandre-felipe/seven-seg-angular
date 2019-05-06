import { ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export declare class SevenSegCellComponent implements OnInit, OnChanges {
    private sanitizer;
    horizontalH: number;
    horizontalW: number;
    verticalW: number;
    verticalH: number;
    segState: {
        [key: string]: boolean;
    };
    _digit: string;
    digit: string;
    color: string;
    spacing: number;
    thickness: number;
    width: number;
    height: number;
    bed: ElementRef<HTMLDivElement>;
    ngOnChanges(changes: SimpleChanges): void;
    fit(): void;
    private segments;
    recalc(s: object): object;
    constructor(sanitizer: DomSanitizer);
    ngOnInit(): void;
}

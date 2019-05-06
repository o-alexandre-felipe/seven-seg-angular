import { ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export declare class SevenSegDigitComponent implements OnInit, OnChanges {
    sanitizer: DomSanitizer;
    digit: string;
    color: string;
    thickness: string;
    width: string;
    height: string;
    box1: ElementRef<HTMLDivElement>;
    box2: ElementRef<HTMLDivElement>;
    box1Style: object;
    box2Style: object;
    private segments;
    recalc(s: object): object;
    setStyle(e: HTMLElement, s: object): void;
    ngOnChanges(changes: SimpleChanges): void;
    readonly segState: {
        [key: string]: boolean;
    };
    constructor(sanitizer: DomSanitizer);
    ngOnInit(): void;
}

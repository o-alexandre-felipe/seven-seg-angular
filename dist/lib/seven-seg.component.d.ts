import { OnInit } from '@angular/core';
export declare class SevenSegComponent implements OnInit {
    nDigs: number;
    value: string;
    thickness: number;
    width: number;
    height: number;
    color: string;
    spacing: number;
    readonly digitState: string[];
    indices: number[];
    constructor();
    ngOnInit(): void;
}

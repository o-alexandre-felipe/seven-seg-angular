import { NgModule } from '@angular/core';
import { SevenSegComponent } from './seven-seg.component';
import {SevenSegDigitComponent} from './seven-seg-digit.component';
import {CommonModule} from '@angular/common';
import {SevenSegCellComponent} from './cell/seven-seg-cell.component';
import { HexagonComponent } from './hexagon/hexagon.component';

@NgModule({
  declarations: [SevenSegComponent,
    SevenSegDigitComponent,
    SevenSegCellComponent,
    HexagonComponent],
  imports: [
    CommonModule
  ],
  exports: [SevenSegComponent, SevenSegCellComponent, HexagonComponent]
})
export class SevenSegModule { }


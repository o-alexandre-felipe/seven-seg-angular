import {NgModule} from '@angular/core';
import {SevenSegComponent} from './seven-seg.component';
import {SevenSegDigitComponent} from './seven-seg-digit.component';
import {CommonModule} from '@angular/common';
import {SevenSegCellComponent} from './cell/seven-seg-cell.component';
import {HexagonComponent} from './hexagon/hexagon.component';
import {SegSettingsComponent} from './seg-settings/seg-settings.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SevenSegComponent,
    SevenSegDigitComponent,
    SevenSegCellComponent,
    HexagonComponent,
    SegSettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SevenSegComponent,
    SevenSegCellComponent,
    HexagonComponent,
    SegSettingsComponent
  ]
})
export class SevenSegModule {
}


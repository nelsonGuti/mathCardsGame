import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberSelectComponent } from './number-select.component';
import { NumberInputComponent } from './number-input/number-input.component';

@NgModule({
    imports: [CommonModule, NumberSelectComponent, NumberInputComponent],
    exports: [NumberSelectComponent, NumberInputComponent]
})
export class NumberSelectModule {}

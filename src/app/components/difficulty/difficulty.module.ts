import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DifficultyComponent } from './difficulty.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, MatRadioModule, FormsModule, DifficultyComponent],
    exports: [DifficultyComponent]
})
export class DifficultyModule {}

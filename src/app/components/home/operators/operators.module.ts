import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OperatorsComponent } from './operators.component';

@NgModule({
    imports: [CommonModule, FontAwesomeModule, OperatorsComponent],
    exports: [OperatorsComponent]
})
export class OperatorsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardComponent } from './flip-card.component';
import { FlipCardBackDirective } from './flip-card-back.directive';
import { FlipCardFrontDirective } from './flip-card-front.directive';

@NgModule({
    exports: [FlipCardComponent, FlipCardBackDirective, FlipCardFrontDirective],
    imports: [CommonModule, FlipCardComponent,
        FlipCardBackDirective,
        FlipCardFrontDirective]
})
export class FlipCardModule {}

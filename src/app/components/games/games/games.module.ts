import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { QuestionCardModule } from '../../home/question-card/question-card.module';
import { OperatorsModule } from '../../home/operators/operators.module';
import { NumberSelectModule } from '../number-select/number-select.module';

@NgModule({
  declarations: [GamesComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    CommonModule,
    QuestionCardModule,
    OperatorsModule,
    NumberSelectModule,
  ],
  exports: [GamesComponent],
})
export class GamesModule {}

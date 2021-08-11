import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeModule } from '../../home/home.module';
import { QuestionCardModule } from '../../home/question-card/question-card.module';
import { OperatorsModule } from '../../home/operators/operators.module';

@NgModule({
  declarations: [GamesComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    CommonModule,
    QuestionCardModule,
    OperatorsModule,
  ],
  exports: [GamesComponent],
})
export class GamesModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnswerCardComponent } from './answer-card/answer-card.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { FlipCardModule } from './flip-card/flip-card.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { QuestionCardModule } from './question-card/question-card.module';
import { OperatorsModule } from './operators/operators.module';
@NgModule({
  imports: [
    CommonModule,
    FlipCardModule,
    FontAwesomeModule,
    AppRoutingModule,
    QuestionCardModule,
    OperatorsModule,
  ],
  declarations: [
    AnswerCardComponent,
    CardContainerComponent,
    FooterComponent,
    HeaderComponent,
  ],
  exports: [
    AnswerCardComponent,
    CardContainerComponent,
    FooterComponent,
    HeaderComponent,
  ],
})
export class HomeModule {}

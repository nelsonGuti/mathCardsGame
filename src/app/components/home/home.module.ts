import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnswerCardComponent } from './answer-card/answer-card.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { FlipCardModule } from './flip-card/flip-card.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { OperatorsComponent } from './operators/operators.component';
import { QuestionCardComponent } from './question-card/question-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from 'src/app/app-routing.module';
@NgModule({
  imports: [CommonModule, FlipCardModule, FontAwesomeModule, AppRoutingModule],
  declarations: [
    AnswerCardComponent,
    CardContainerComponent,
    FooterComponent,
    HeaderComponent,
    OperatorsComponent,
    QuestionCardComponent,
  ],
  exports: [
    AnswerCardComponent,
    CardContainerComponent,
    FooterComponent,
    HeaderComponent,
    OperatorsComponent,
    QuestionCardComponent,
  ],
})
export class HomeModule {}

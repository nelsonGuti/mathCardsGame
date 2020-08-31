import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardContainerComponent } from './components/card-container/card-container.component';

import { FlipCardComponent } from './components/flip-card/flip-card.component';
import { AnswerCardComponent } from './components/answer-card/answer-card.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { FlipCardBackDirective } from './components/flip-card/flip-card-back.directive';
import { FlipCardFrontDirective } from './components/flip-card/flip-card-front.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardContainerComponent,
    FlipCardComponent,
    AnswerCardComponent,
    QuestionCardComponent,
    FlipCardBackDirective,
    FlipCardFrontDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

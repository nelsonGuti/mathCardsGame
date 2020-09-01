import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardContainerComponent } from './components/card-container/card-container.component';

import { AnswerCardComponent } from './components/answer-card/answer-card.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';

import { FlipCardModule } from './components/flip-card/flip-card.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardContainerComponent,
    AnswerCardComponent,
    QuestionCardComponent,
  ],
  imports: [BrowserModule, FlipCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardContainerComponent } from './components/card-container/card-container.component';

import { AnswerCardComponent } from './components/answer-card/answer-card.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';

import { FlipCardModule } from './components/flip-card/flip-card.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OperatorsComponent } from './components/operators/operators.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardContainerComponent,
    AnswerCardComponent,
    QuestionCardComponent,
    OperatorsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, FlipCardModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

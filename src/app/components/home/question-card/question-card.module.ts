import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuestionCardComponent } from './question-card.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [QuestionCardComponent],
  exports: [QuestionCardComponent],
})
export class QuestionCardModule {}

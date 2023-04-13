import { Component, Input } from '@angular/core';
import { Operation } from 'src/app/models/Operation';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgClass, NgIf } from '@angular/common';

@Component({
    selector: 'app-question-card',
    templateUrl: './question-card.component.html',
    styleUrls: ['./question-card.component.scss'],
    standalone: true,
    imports: [NgClass, NgIf, FontAwesomeModule]
})
export class QuestionCardComponent {
  @Input() firstNumerator: number;
  @Input() secondNumerator: number;
  @Input() operation: Operation;
  @Input() gameMode = false;
  @Input() userInput: number;
  @Input() answer: number;
  @Input() status;
}

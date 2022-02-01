import { Component, Input } from '@angular/core';
import { Operation } from 'src/app/models/Operation';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
})
export class QuestionCardComponent {
  @Input() firstNumerator: number;
  @Input() secondNumerator: number;
  @Input() operation: Operation;
  @Input() gameMode = false;
  @Input() userInput: number;
}

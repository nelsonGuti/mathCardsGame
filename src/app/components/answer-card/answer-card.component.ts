import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-answer-card',
  templateUrl: './answer-card.component.html',
  styleUrls: ['./answer-card.component.scss'],
})
export class AnswerCardComponent implements OnChanges {
  @Input() answer: number;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      this.answer = changes.answer.currentValue;
    }, 1000);
    this.answer = null;
  }
}

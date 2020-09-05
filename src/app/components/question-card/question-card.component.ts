import { Component, OnInit, Input } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
})
export class QuestionCardComponent implements OnInit {
  @Input() firstNumerator: number;
  @Input() secondNumerator: number;
  @Input() operator: string;

  operatorIcon = faPlus;

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CalculationsService } from 'src/app/services/calculations.service';
import { Operation } from 'src/app/models/Operation';
import { Operator } from 'src/app/models/Operator';
import { faPlus, faRedo } from '@fortawesome/free-solid-svg-icons';
import { AnswerCardComponent } from '../answer-card/answer-card.component';
import { FlipCardBackDirective } from '../flip-card/flip-card-back.directive';
import { QuestionCardComponent } from '../question-card/question-card.component';
import { FlipCardFrontDirective } from '../flip-card/flip-card-front.directive';
import { FlipCardComponent } from '../flip-card/flip-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OperatorsComponent } from '../operators/operators.component';

export interface CardsValues {
  firstNum: number;
  secondNum: number;
  answer: number;
}

@Component({
    selector: 'app-card-container',
    templateUrl: './card-container.component.html',
    styleUrls: ['./card-container.component.scss'],
    standalone: true,
    imports: [OperatorsComponent, FontAwesomeModule, FlipCardComponent, FlipCardFrontDirective, QuestionCardComponent, FlipCardBackDirective, AnswerCardComponent]
})
export class CardContainerComponent implements OnInit {
  reset = false;
  faRedo = faRedo;

  operation: Operation = {
    icon: faPlus,
    name: Operator.ADDITION,
    disabled: false,
  };

  cardValues: CardsValues = {
    firstNum: 1,
    secondNum: 1,
    answer: 2,
  };

  constructor(private calculationsService: CalculationsService) {}

  ngOnInit(): void {}

  getNewCards() {
    switch (this.operation.name) {
      case Operator.ADDITION:
        this.cardValues = this.calculationsService.createAdditionCard();
        break;
      case Operator.SUBTRACTION:
        this.cardValues = this.calculationsService.createSubtractionCard();
        break;
      case Operator.MULTIPLICATION:
        this.cardValues = this.calculationsService.createMultiplicationCard();
        break;
      case Operator.DIVISION:
        this.cardValues = this.calculationsService.createDivisionCard();
        break;
      default:
        this.cardValues = { firstNum: null, secondNum: null, answer: null };
    }

    this.reset = !this.reset;
  }

  getSelectedOperation(operation): void {
    this.operation = operation;
    this.getNewCards();
  }
}

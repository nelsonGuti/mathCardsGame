import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CalculationsService } from 'src/app/services/calculations.service';
import { Operation } from 'src/app/models/Operation';
import { faPlus, faRedo } from '@fortawesome/free-solid-svg-icons';
import { Operator } from 'src/app/models/Operator';

interface CardsValues {
  firstNum: number;
  secondNum: number;
  answer: number;
}

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
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

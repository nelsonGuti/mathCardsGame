import { Component, HostListener, OnInit } from '@angular/core';
import {
  faDivide,
  faMinus,
  faPlus,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { Operation } from 'src/app/models/Operation';
import { Operator } from 'src/app/models/Operator';
import { CalculationsService } from 'src/app/services/calculations.service';
import { CardsValues } from '../../home/card-container/card-container.component';

const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  operation: Operation = {
    icon: faPlus,
    name: Operator.ADDITION,
    disabled: false,
  };
  cardStatus: 'correct' | 'wrong' | 'not-answered' = 'not-answered';

  answer: number;
  answerArray = [];
  cardValues: CardsValues = {
    firstNum: 1,
    secondNum: 1,
    answer: 2,
  };

  gameStarted = false;

  constructor(private calculationsService: CalculationsService) {}

  ngOnInit(): void {}

  getSelectedOperation(operation): void {
    this.operation = operation;
    this.getNewCards();
  }

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

    // this.reset = !this.reset;
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyboardEvent(e: KeyboardEvent) {
    if (e.key === 'Backspace') {
      this.deleteAnswer();
    }

    if (e.key === 'Enter') {
      this.onEnter();
    }

    if (NUMBERS.includes(e.key)) {
      const num = Number(e.key);
      this.userInput(num);
    }
  }

  userInput(num) {
    if (this.answerArray.length > 1) {
      return;
    }

    this.answerArray.push(num);
    this.answer = Number(this.answerArray.join(''));
  }

  deleteAnswer() {
    if (this.answerArray.length === 1) {
      this.answerArray = [];
      this.answer = null;
    }

    if (this.answerArray.length) {
      this.answerArray.pop();
      this.answer = Number(this.answerArray.join(''));
    }
  }

  onEnter() {
    if (this.answer === this.cardValues.answer) {
      this.cardStatus = 'correct';
      setTimeout(() => {
        this.nextCard();
      }, 1500);
    } else {
      this.cardStatus = 'wrong';
      setTimeout(() => {
        this.reset();
      }, 1000);
    }
  }

  reset() {
    this.answer = null;
    this.answerArray = [];
    this.cardStatus = 'not-answered';
  }

  nextCard() {
    this.reset();
    this.getNewCards();
  }

  endGame() {
    this.gameStarted = !this.gameStarted;
    this.reset();
    this.getNewCards();
  }
}

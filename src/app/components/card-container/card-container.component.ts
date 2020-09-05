import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
  operator = '+';

  cardValues: CardsValues = {
    firstNum: 1,
    secondNum: 1,
    answer: 2,
  };
  constructor() {}

  ngOnInit(): void {}

  getNewCards(event) {
    console.log('event: ', event);
    setTimeout(() => {
      const firstNum = this.generateRandomNumber(1, 10);
      const secondNum = this.generateRandomNumber(1, 10);
      const answer = firstNum + secondNum;
      this.cardValues.firstNum = firstNum;
      this.cardValues.secondNum = secondNum;
      this.cardValues.answer = answer;
      this.operator = '+';
    }, 1000);

    this.cardValues.firstNum = null;
    this.cardValues.secondNum = null;
    this.cardValues.answer = null;
    this.operator = null;
    this.reset = !this.reset;
  }

  generateRandomNumber(min, max): number {
    const randomNum = Math.random() * (max - min) + min;
    return Math.floor(randomNum);
  }
}

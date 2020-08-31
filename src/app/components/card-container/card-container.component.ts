import { Component, OnInit } from '@angular/core';

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
  cardValues: CardsValues = {
    firstNum: 1,
    secondNum: 1,
    answer: 2,
  };
  constructor() {}

  ngOnInit(): void {}

  getNewCards(event) {
    console.log('event: ', event);
    const firstNum = this.generateRandomNumber(1, 10);
    const secondNum = this.generateRandomNumber(1, 10);
    const answer = firstNum + secondNum;
    this.cardValues.firstNum = firstNum;
    this.cardValues.secondNum = secondNum;
    this.cardValues.answer = answer;
  }

  generateRandomNumber(min, max): number {
    const randomNum = Math.random() * (max - min) + min;
    return Math.floor(randomNum);
  }
}

import { Injectable } from '@angular/core';
import { CardNumbers } from '../models/CardNumbers';

@Injectable({
  providedIn: 'root',
})
export class CalculationsService {
  constructor() {}

  generateRandomNumber(min: number, max: number): number {
    const randomNum = Math.random() * (max - min) + min;
    return Math.floor(randomNum);
  }

  createAdditionCard(): CardNumbers {
    const firstNum = this.generateRandomNumber(0, 18);
    const secondNum = this.generateRandomNumber(0, 9);
    const answer = firstNum + secondNum;
    return { firstNum, secondNum, answer };
  }

  createSubtractionCard(): CardNumbers {
    const firstNum = this.generateRandomNumber(1, 18);
    const secondNum = this.generateRandomNumber(0, 9);
    const answer = firstNum - secondNum;
    return { firstNum, secondNum, answer };
  }

  createMultiplicationCard(): CardNumbers {
    const firstNum = this.generateRandomNumber(1, 8);
    const secondNum = this.generateRandomNumber(1, 8);
    const answer = firstNum * secondNum;
    return { firstNum, secondNum, answer };
  }

  createDivisionCard(): CardNumbers {
    const {
      firstNum,
      secondNum,
      answer: product,
    } = this.createMultiplicationCard();
    return { firstNum: product, secondNum, answer: firstNum };
  }
}

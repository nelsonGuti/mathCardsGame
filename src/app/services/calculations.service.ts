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
    const firstNum = this.generateRandomNumber(1, 10);
    const secondNum = this.generateRandomNumber(1, 10);
    const answer = firstNum + secondNum;
    return { firstNum, secondNum, answer };
  }

  createSubtractionCard(): CardNumbers {
    const firstNum = this.generateRandomNumber(1, 10);
    const secondNum = this.generateRandomNumber(0, firstNum);
    const answer = firstNum - secondNum;
    return { firstNum, secondNum, answer };
  }
}

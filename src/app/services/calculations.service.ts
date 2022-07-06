import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CardNumbers } from '../models/CardNumbers';

export enum Difficulty {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

@Injectable({
  providedIn: 'root',
})
export class CalculationsService {
  $difficulty = new BehaviorSubject<Difficulty>(Difficulty.Easy);
  // difficulty$ = this.$difficulty.asObservable();

  generateRandomNumber(min: number, max: number): number {
    const randomNum = Math.random() * (max - min) + min;
    return Math.floor(randomNum);
  }

  createAdditionCard(): CardNumbers {
    const maxNumber = this.adjustCardByDifficulty();
    const firstNum = this.generateRandomNumber(0, maxNumber);
    const secondNum = this.generateRandomNumber(0, maxNumber - 1);
    const answer = firstNum + secondNum;
    return { firstNum, secondNum, answer };
  }

  createSubtractionCard(): CardNumbers {
    const maxNumber = this.adjustCardByDifficulty();
    const firstNum = this.generateRandomNumber(1, maxNumber);
    const secondNum = this.generateRandomNumber(0, firstNum);
    const answer = firstNum - secondNum;
    return { firstNum, secondNum, answer };
  }

  createMultiplicationCard(): CardNumbers {
    const maxNumber = this.adjustCardByDifficulty();
    const firstNum = this.generateRandomNumber(1, maxNumber);
    const secondNum = this.generateRandomNumber(1, maxNumber);
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

  updateDifficulty(difficulty: Difficulty): void {
    this.$difficulty.next(difficulty);
  }

  getDifficulty(): Difficulty {
    return this.$difficulty.getValue();
  }

  adjustCardByDifficulty() {
    const difficulty = this.getDifficulty();
    if (difficulty === Difficulty.Easy) {
      return 5;
    }
    if (difficulty === Difficulty.Medium) {
      return 7;
    }
    if (difficulty === Difficulty.Hard) {
      return 10;
    }
  }
}

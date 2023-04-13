import { Component, OnInit } from '@angular/core';
import {
  CalculationsService,
  Difficulty,
} from 'src/app/services/calculations.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
    selector: 'app-difficulty',
    templateUrl: './difficulty.component.html',
    styleUrls: ['./difficulty.component.scss'],
    standalone: true,
    imports: [MatRadioModule, FormsModule, NgFor]
})
export class DifficultyComponent implements OnInit {
  difficulty = Difficulty.Easy;
  difficulties = [Difficulty.Easy, Difficulty.Medium, Difficulty.Hard];
  constructor(private calculationService: CalculationsService) {}

  ngOnInit() {
    this.calculationService.updateDifficulty(this.difficulty);
  }

  onDifficultyChange({ value }: { value: Difficulty }) {
    console.log('value: ', value);
    this.calculationService.updateDifficulty(value);
  }
}

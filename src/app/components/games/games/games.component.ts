import { Component, OnInit } from '@angular/core';
import {
  faDivide,
  faMinus,
  faPlus,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { Operation } from 'src/app/models/Operation';
import { Operator } from 'src/app/models/Operator';

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

  constructor() {}

  ngOnInit(): void {}

  getSelectedOperation(operation): void {
    this.operation = operation;
    console.log('this.operation: ', this.operation);
  }
}

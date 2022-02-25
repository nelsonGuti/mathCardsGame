import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Operator } from 'src/app/models/Operator';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faDivide } from '@fortawesome/free-solid-svg-icons';
import { Operation } from 'src/app/models/Operation';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss'],
})
export class OperatorsComponent implements OnInit {
  @Output() operationChange = new EventEmitter();
  operations: Operation[] = [
    { icon: faPlus, name: Operator.ADDITION, disabled: false },
    { icon: faMinus, name: Operator.SUBTRACTION, disabled: false },
    { icon: faTimes, name: Operator.MULTIPLICATION, disabled: false },
    // { icon: faDivide, name: Operator.DIVISION, disabled: false },
  ];
  selectedOperation = Operator.ADDITION;
  constructor() {}

  ngOnInit(): void {}

  selectOperation(e, operation) {
    if (operation.disabled) {
      return;
    }

    this.selectedOperation = operation.name;
    this.operationChange.emit(operation);
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NumberInputComponent } from './number-input/number-input.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-number-select',
    templateUrl: './number-select.component.html',
    styleUrls: ['./number-select.component.scss'],
    standalone: true,
    imports: [NgFor, NumberInputComponent]
})
export class NumberSelectComponent implements OnInit {
  @Output() numberInput = new EventEmitter<number>();

  ngOnInit(): void {}

  onUserInput(num: number) {
    this.numberInput.emit(num);
  }
}

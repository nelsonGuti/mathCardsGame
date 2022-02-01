import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-number-select',
  templateUrl: './number-select.component.html',
  styleUrls: ['./number-select.component.scss'],
})
export class NumberSelectComponent implements OnInit {
  @Output() numberInput = new EventEmitter<number>();

  ngOnInit(): void {}

  onUserInput(num: number) {
    this.numberInput.emit(num);
  }
}

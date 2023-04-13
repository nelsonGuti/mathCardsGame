import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-number-input',
    templateUrl: './number-input.component.html',
    styleUrls: ['./number-input.component.scss'],
    standalone: true
})
export class NumberInputComponent implements OnInit {
  @Input() number: number;
  @Output() numberChosen = new EventEmitter<number>();

  ngOnInit(): void {}

  numberClicked() {
    this.numberChosen.emit(this.number);
  }
}

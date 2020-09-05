import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faDivide } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss'],
})
export class OperatorsComponent implements OnInit {
  faPlus = faPlus;
  faMinus = faMinus;
  faDivide = faDivide;
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}
}

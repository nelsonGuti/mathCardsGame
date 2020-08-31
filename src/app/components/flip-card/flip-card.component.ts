import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  ContentChild,
  AfterContentInit,
} from '@angular/core';

import { FlipCardBackDirective } from './flip-card-back.directive';
import { FlipCardFrontDirective } from './flip-card-front.directive';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss'],
})
export class FlipCardComponent implements OnInit, AfterContentInit {
  @ContentChild(FlipCardBackDirective, { read: TemplateRef, static: true })
  backCardTpl: TemplateRef<any>;

  @ContentChild(FlipCardFrontDirective, { read: TemplateRef, static: true })
  frontCardTpl: TemplateRef<any>;

  flipped = false;
  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit() {}
}

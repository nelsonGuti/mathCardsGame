import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  ContentChild,
  AfterContentInit,
  SimpleChanges,
} from '@angular/core';

import { FlipCardBackDirective } from './flip-card-back.directive';
import { FlipCardFrontDirective } from './flip-card-front.directive';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss'],
})
export class FlipCardComponent implements AfterContentInit {
  @ContentChild(FlipCardBackDirective, { read: TemplateRef, static: true })
  backCardTpl: TemplateRef<any>;

  @ContentChild(FlipCardFrontDirective, { read: TemplateRef, static: true })
  frontCardTpl: TemplateRef<any>;

  @Input() reset;
  flipped = false;
  constructor() {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges) {
    if (this.flipped) {
      this.flipped = false;
    }
  }

  ngAfterContentInit() {}
}

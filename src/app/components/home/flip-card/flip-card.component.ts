import {
  Component,
  Input,
  TemplateRef,
  ContentChild,
  OnChanges,
} from '@angular/core';

import { FlipCardBackDirective } from './flip-card-back.directive';
import { FlipCardFrontDirective } from './flip-card-front.directive';
import { NgClass, NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'app-flip-card',
    templateUrl: './flip-card.component.html',
    styleUrls: ['./flip-card.component.scss'],
    standalone: true,
    imports: [NgClass, NgTemplateOutlet]
})
export class FlipCardComponent implements OnChanges {
  @ContentChild(FlipCardBackDirective, { read: TemplateRef, static: true })
  backCardTpl: TemplateRef<any>;

  @ContentChild(FlipCardFrontDirective, { read: TemplateRef, static: true })
  frontCardTpl: TemplateRef<any>;

  @Input() reset;
  flipped = false;
  constructor() {}

  ngOnChanges() {
    if (this.flipped) {
      this.flipped = false;
    }
  }
}

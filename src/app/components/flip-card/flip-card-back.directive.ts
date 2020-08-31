import { Directive, TemplateRef } from '@angular/core';

@Directive({
  exportAs: 'appFlipCardBackTemplate',
  // tslint:disable-next-line: directive-selector
  selector: '[app-flip-card-back]',
})
export class FlipCardBackDirective {
  constructor(readonly template: TemplateRef<any>) {}
}

import { Directive, TemplateRef } from '@angular/core';

@Directive({
  exportAs: 'appFlipCardFrontTemplate',
  // tslint:disable-next-line: directive-selector
  selector: '[app-flip-card-front]',
})
export class FlipCardFrontDirective {
  constructor(readonly template: TemplateRef<any>) {}
}

import { Directive, TemplateRef } from '@angular/core';

@Directive({
  exportAs: 'appFlipCardFrontTemplate',
  selector: '[appFlipCardFront]',
})
export class FlipCardFrontDirective {
  constructor(readonly template: TemplateRef<any>) {}
}

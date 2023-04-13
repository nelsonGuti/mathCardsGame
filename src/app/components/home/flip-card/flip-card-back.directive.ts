import { Directive, TemplateRef } from '@angular/core';

@Directive({
    exportAs: 'appFlipCardBackTemplate',
    selector: '[appFlipCardBack]',
    standalone: true
})
export class FlipCardBackDirective {
  constructor(readonly template: TemplateRef<any>) {}
}

import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: 'display',
  standalone: true,
})
export class IfCustomDirective {
  // step 1: Get accesss to the dom element which we want to add/remove
  //step 2: Place from where we want to add or remove Dom element
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set display(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}

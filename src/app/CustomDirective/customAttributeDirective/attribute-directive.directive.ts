import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAttributeDirective]',
  standalone: true,
})
//register it in app modulce
export class AttributeDirectiveDirective implements OnInit {
  constructor(private element: ElementRef) {}
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = 'cornflowerblue';
    this.element.nativeElement.style.color = 'white';
  }
}

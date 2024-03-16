import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRender2]',
  standalone: true,
})
export class Render2Directive implements OnInit {
  constructor(private element: ElementRef, private render2: Renderer2) {}

  ngOnInit(): void {
    this.render2.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      '#f194BA'
    );
    this.render2.setStyle(
      this.element.nativeElement,
      'border',
      'blue 3px solid'
    );
  }
}

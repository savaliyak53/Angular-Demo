import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appApphover]',
  standalone: true,
})
export class ApphoverDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  @HostBinding('style.backgroundColor') backGround: string = 'black';
  @HostBinding('style.color') textColor: string = 'white';
  @HostBinding('style.border') border: string = 'gray 5px solid';

  @HostListener('mouseenter') mouseEnter() {
    this.backGround = 'white';
    this.textColor = 'black';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.backGround = 'black';
    this.textColor = 'white';
  }
}

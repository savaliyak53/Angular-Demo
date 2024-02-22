import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHigh]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}
  appHighs = '';
  @Input() set appHigh(color: string) {
    this.appHighs = color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.appHighs || 'red';
  }
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('yellow', 'white');
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight('black', 'blue');
  // }

  private highlight(bg: string, text: string) {
    this.el.nativeElement.style.backgroundColor = bg;
    this.el.nativeElement.style.color = text;
  }
}

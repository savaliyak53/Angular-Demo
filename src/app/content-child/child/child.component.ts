import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  QueryList,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  constructor(private renderer: Renderer2) {}
  @ContentChild('usesof', { read: ElementRef }) divEle: ElementRef | undefined;

  @ContentChildren('liselect') liEle: QueryList<ElementRef> | undefined;

  onClick() {
    if (this.divEle) {
      this.renderer.setStyle(this.divEle.nativeElement, 'color', 'red');
      if (this.liEle) {
        this.liEle.forEach((item) =>
          this.renderer.setStyle(item.nativeElement, 'color', 'black')
        );
      }
    }
  }

  onClickchidren() {
    if (this.liEle) {
      this.liEle.forEach((item) =>
        this.renderer.setStyle(item.nativeElement, 'color', 'blue')
      );
      if (this.divEle) {
        this.renderer.setStyle(this.divEle.nativeElement, 'color', 'black');
      }
    }
  }
}

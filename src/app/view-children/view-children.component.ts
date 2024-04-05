import {
  Component,
  ElementRef,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-view-children',
  standalone: true,
  imports: [],
  templateUrl: './view-children.component.html',
  styleUrl: './view-children.component.css',
})
export class ViewChildrenComponent {
  @ViewChildren('inputEle') inputElement: QueryList<ElementRef> | undefined;
  fullName: string = '';
  constructor(private renderer: Renderer2) {}
  show() {
    this.inputElement?.forEach((ele: ElementRef) => {
      this.fullName += ele.nativeElement.value + ' ';
    });
    let h2Element = document.querySelector('#changeText');
    if (h2Element) {
      this.renderer.setProperty(h2Element, 'textContent', this.fullName);
    }
  }
}

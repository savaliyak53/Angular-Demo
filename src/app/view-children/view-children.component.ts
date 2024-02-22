import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

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
  show() {
    this.inputElement?.forEach((ele: ElementRef) => {
      this.fullName += ele.nativeElement.value + ' ';
    });
    this.fullName.trim();
  }
}

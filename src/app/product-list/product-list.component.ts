import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  @ViewChild('addbtn') addbtn: ElementRef | undefined;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    let count: number = 0;
    fromEvent(this.addbtn?.nativeElement, 'click').subscribe(() => {
      const data: string = 'Product' + ++count;
      this.print(data);
    });
  }

  print(data: string): void {
    const li = document.createElement('li');
    li.innerText = data;
    document.getElementById('ulid')?.appendChild(li);
  }
}

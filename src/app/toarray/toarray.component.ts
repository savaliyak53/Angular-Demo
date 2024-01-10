import { Component, OnInit } from '@angular/core';
import { Subscription, interval, take, toArray } from 'rxjs';

@Component({
  selector: 'app-toarray',
  standalone: true,
  imports: [],
  templateUrl: './toarray.component.html',
  styleUrl: './toarray.component.css',
})

// use pipe for toArray
// it make array
// ex-1
export class ToarrayComponent implements OnInit {
  constructor() {}
  sourceSub: Subscription | undefined;
  ngOnInit(): void {
    const source = interval(100);
    this.sourceSub = source.pipe(take(5), toArray()).subscribe((res) => {
      this.print(res);
    });
  }

  print(data: any): void {
    const li = document.createElement('li');
    li.innerText = data;
    document.getElementById('ulid')?.appendChild(li);
  }
}

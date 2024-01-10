import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, take, takeLast, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take',
  standalone: true,
  imports: [],
  templateUrl: './take.component.html',
  styleUrl: './take.component.css',
})
export class TakeComponent implements OnInit {
  Arr = [
    'photos',
    'youtube',
    'phone',
    'translate',
    'digi',
    'messgaes',
    'insta',
    'chrome',
  ];
  ngOnInit(): void {
    const source = from(this.Arr);
    const source1 = interval(1000);

    source.pipe(take(5)).subscribe((res) => {
      this.showdata(res, 'takeid');
    });

    source.pipe(takeLast(5)).subscribe((res) => {
      console.log(res);
      this.showdata(res, 'takelastid');
    });

    let consdition1 = fromEvent(document, 'click');

    source1.pipe(takeUntil(consdition1)).subscribe((res) => {
      this.showdata(res, 'takeuntillid');
    });
  }

  showdata(res: any, id: string): void {
    let li = document.createElement('li');
    li.innerText = res;
    document.getElementById(id)?.appendChild(li);
  }
}

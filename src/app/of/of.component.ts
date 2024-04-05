import { Component, OnInit } from '@angular/core';
import { filter, from, map, of } from 'rxjs';

@Component({
  selector: 'app-of',
  standalone: true,
  imports: [],
  templateUrl: './of.component.html',
  styleUrl: './of.component.css',
})
export class OfComponent implements OnInit {
  ngOnInit(): void {
    const promise = new Promise((resolve) =>
      resolve(['johnalex', 'baba', 'yogesh', 'jaimin'])
    );

    // exmaple of
    const obs1 = of('yash', 'baba', 'yogesh', 'jaimin');
    obs1.subscribe((res: any) => {
      this.showdata(res, 'ulid');
    });

    //example from1
    const obs2 = from(promise);
    obs2.subscribe((res: any) => {
      this.showdata(res, 'ulid1');
    });

    //example from2
    const obs3 = from('ALEX JOHN');
    obs3.subscribe((res: any) => {
      this.showdata(res, 'ulid2');
    });

    //example map

    const obs4 = from([12, 131, 14, 12, 112, 121]);
    const mapped = obs4.pipe(
      map((res: any) => {
        return res * res;
      })
    );
    mapped.subscribe((res: any) => {
      this.showdata(res, 'ulid3');
    });

    //example filter
    const filterred = obs4.pipe(
      filter((res: any) => {
        return 1000 < res * res;
      })
    );
    filterred.subscribe((res: any) => {
      this.showdata(res * res, 'ulid4');
    });
  }

  showdata(res: any, id: string): void {
    let li = document.createElement('li');
    li.innerText = res;
    document.getElementById(id)?.appendChild(li);
  }
}

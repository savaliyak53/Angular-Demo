import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of',
  standalone: true,
  imports: [],
  templateUrl: './of.component.html',
  styleUrl: './of.component.css',
})
export class OfComponent implements OnInit {
  ngOnInit(): void {
    // exmaple of
    const obs1 = of('yash', 'baba', 'yogesh', 'jaimin');
    obs1.subscribe((res: any) => {
      this.showdata(res, 'ulid');
    });

    const obs2 = from(['john', 'alex', 'yogesh', 'resolve']);
    obs2.subscribe((res: any) => {
      this.showdata(res, 'ulid1');
    });
  }

  showdata(res: any, id: string): void {
    let li = document.createElement('li');
    li.innerText = res;
    document.getElementById(id)?.appendChild(li);
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { error } from 'console';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css',
})
export class ObservableComponent {
  data: number[] = [];
  data2: number[] = [];

  // Observable
  myObservable = new Observable((observable) => {
    observable.next([1, 2, 3, 4, 5, 6]);
    observable.complete;
  });

  myObser = new Observable((observable) => {
    setTimeout(() => {
      observable.next(11);
    }, 1000);
    setTimeout(() => {
      observable.next(111);
    }, 2000);
    setTimeout(() => {
      observable.next(1111);
    }, 3000);
    // setTimeout(() => {
    //   observable.error(
    //     new Error('Some thing went wrong, please try again later')
    //   );
    // }, 4000);
    setTimeout(() => {
      observable.next(1111);
    }, 5000);
    setTimeout(() => {
      observable.next(111);
    }, 6000);
    setTimeout(() => {
      observable.complete();
    }, 7000);
  });

  // Observer
  // next, error, complete
  getAsyncData() {
    this.myObservable.subscribe((Data: number[] | any) => {
      if (Data) {
        this.data = Data;
      }
    });
  }

  getAsync() {
    this.myObser.subscribe({
      next: (Data: number[] | any) => {
        if (Data) {
          this.data2.push(Data);
        }
      },
      error: (er) => {
        alert(er.message);
      },
      complete: () => {
        alert('All the data executed');
      },
    });
  }
}

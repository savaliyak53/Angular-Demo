import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  standalone: true,
  imports: [],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.css',
})
export class IntervalComponent implements OnInit {
  obsmsg: string | undefined;
  videoSubscription: Subscription | undefined;
  constructor() {}

  ngOnInit(): void {
    // const broadCastVideo = interval(2000);
    const broadCastVideo = timer(500, 2000);

    this.videoSubscription = broadCastVideo.subscribe((res) => {
      this.obsmsg = 'Interval ' + res;
      if (res >= 5) {
        this.videoSubscription?.unsubscribe();
      }
    });
  }
}

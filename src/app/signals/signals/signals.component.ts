import { CommonModule } from '@angular/common';
import { Component, DoCheck, computed, signal, effect } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
})
export class SignalsComponent implements DoCheck {
  counter = signal<number>(0);
  message = signal<number[]>([]);
  doubleCounter = computed(() => this.counter() * 10);

  constructor() {
    effect(() => console.log('NEW COunter value is: ', this.counter()));
  }

  increment() {
    // this.counter.set(this.counter() + 1); //set method
    this.counter.update((prevValue) => prevValue + 1); //update method
    // this.message.update((prevValue) => [
    //   ...prevValue,
    //   'Current value of counter is: ' + this.counter(),
    // ]);
    this.message().push(this.counter());
  }

  decrement() {
    // this.counter.set(this.counter() - 1);
    this.counter.update((prevValue) => prevValue - 1);
  }

  ngDoCheck(): void {
    console.log('Angular change detection called');
  }
}

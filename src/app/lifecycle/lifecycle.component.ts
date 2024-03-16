import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ChildCycleComponent } from './child-cycle/child-cycle.component';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
  imports: [ChildCycleComponent],
})
export class LifecycleComponent implements OnChanges {
  inputData: string | undefined;

  inputChange(event: any) {
    this.inputData = (event.target as HTMLInputElement).value;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('called on changes');
  }
}

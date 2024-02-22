import { Component } from '@angular/core';
import { CustomerComponent } from '../customer/customer.component';

@Component({
  selector: 'app-trv',
  standalone: true,
  imports: [CustomerComponent],
  templateUrl: './trv.component.html',
  styleUrl: './trv.component.css',
})
export class TRVComponent {
  sayHello(myVariableData: HTMLInputElement) {
    alert('Hello ' + myVariableData.value);
  }
}

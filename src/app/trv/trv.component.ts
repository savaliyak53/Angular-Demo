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
    if (myVariableData.value) {
      alert('Hello ' + myVariableData.value);
    } else {
      myVariableData.focus();
      alert('search something');
    }
  }
}

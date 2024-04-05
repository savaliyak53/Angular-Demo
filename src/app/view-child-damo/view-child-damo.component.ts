import { Component } from '@angular/core';

@Component({
  selector: 'app-view-child-damo',
  standalone: true,
  imports: [],
  templateUrl: './view-child-damo.component.html',
  styleUrl: './view-child-damo.component.css',
})
export class ViewChildDamoComponent {
  formChild = 'This section comes from child component';
  count: number = 0;
  sayHello() {
    this.count += 1;
  }
}

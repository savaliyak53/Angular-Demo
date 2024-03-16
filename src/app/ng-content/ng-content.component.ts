import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-ng-content',
  standalone: true,
  templateUrl: './ng-content.component.html',
  styleUrl: './ng-content.component.css',
  imports: [ProductComponent],
})
export class NgContentComponent {}

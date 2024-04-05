import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-ng-content',
  standalone: true,
  templateUrl: './ng-content.component.html',
  styleUrl: './ng-content.component.css',
  imports: [ProductComponent, LoginComponent],
})
export class NgContentComponent {}

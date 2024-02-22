import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent {
  user: any;
  customers = [
    {
      name: 'John Smith',
      age: 35,
      email: 'john@example.com',
      address: '123 Main St, Anytown, USA',
      phone: '555-123-4567',
    },
    {
      name: 'Emily Johnson',
      age: 28,
      email: 'emily@example.com',
      address: '456 Oak Ave, Springfield, USA',
      phone: '555-987-6543',
    },
    {
      name: 'Michael Brown',
      age: 45,
      email: 'michael@example.com',
      address: '789 Elm St, Metro City, USA',
      phone: '555-555-5555',
    },
    {
      name: 'Sarah Davis',
      age: 30,
      email: 'sarah@example.com',
      address: '321 Pine Rd, Lakeside, USA',
      phone: '555-222-3333',
    },
    {
      name: 'David Wilson',
      age: 40,
      email: 'david@example.com',
      address: '567 Cedar Ln, Mountainville, USA',
      phone: '555-888-9999',
    },
  ];
}

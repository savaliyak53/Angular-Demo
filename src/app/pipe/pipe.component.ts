import { Component } from '@angular/core';
import { AgePipe } from '../CustomDirective/pipe/age.pipe';
import { User } from '../dataType';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [AgePipe, CommonModule],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css',
})

// user.interface.ts
export class PipeComponent {
  users: User[] = [];

  ngOnInit(): void {
    // Sample user data
    this.users = [
      { id: 1, name: 'John', age: 30, surname: 'Doe', location: 'New York' },
      {
        id: 2,
        name: 'Alice',
        age: 25,
        surname: 'Smith',
        location: 'Los Angeles',
      },
      { id: 3, name: 'Bob', age: 35, surname: 'Johnson', location: 'Chicago' },
    ];
  }
}

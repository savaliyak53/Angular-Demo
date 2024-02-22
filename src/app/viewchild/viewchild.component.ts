import { Component, ElementRef, ViewChild } from '@angular/core';
import { ViewChildDamoComponent } from '../view-child-damo/view-child-damo.component';

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [ViewChildDamoComponent],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css',
})
export class ViewchildComponent {
  title = 'ViewChild';
  @ViewChild('dobInput') dataOfBirth: ElementRef | undefined;
  @ViewChild('ageInput') ageOfuser: ElementRef | undefined;
  age: any;

  @ViewChild(ViewChildDamoComponent, { static: true }) demoComp:
    | ViewChildDamoComponent
    | undefined;

  calculateDate() {
    let birthYear = new Date(
      this.dataOfBirth?.nativeElement.value
    ).getFullYear();

    let currentYear = new Date().getFullYear();
    this.age = currentYear - birthYear;
    if (this.ageOfuser) {
      this.ageOfuser.nativeElement.value = this.age;
    }
  }
}

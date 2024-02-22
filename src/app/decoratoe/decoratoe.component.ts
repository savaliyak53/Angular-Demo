import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-decoratoe',
  standalone: true,
  imports: [],
  templateUrl: './decoratoe.component.html',
  styleUrl: './decoratoe.component.css',
})
export class DecoratoeComponent {
  // here useAlias and Mydaata both ara same
  @Input({ alias: 'useAlias', required: true })
  MyDaata: string | undefined;

  @Input() childFunction!: Function;

  callParentFunction() {
    this.childFunction('Hello from child!');
  }

  // Output Decoretor
  @Output() outData = new EventEmitter<string>();

  onOutPut = () => {
    this.outData.emit('DATA PASSING FROM CHILD TO PARENT');
  };
}

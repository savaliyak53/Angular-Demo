import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone: true,
  pure: false, //Impure pipe
})
export class AgePipe implements PipeTransform {
  transform(value: number, args: string): string {
    console.log(value, args);
    return `Age of ${args} is ${value}`;
  }
}

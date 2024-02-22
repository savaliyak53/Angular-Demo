import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone: true,
})
export class AgePipe implements PipeTransform {
  transform(value: number, args: string): string {
    return 'pipe' + value + ' pipe';
  }
}

import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-child-cycle',
  standalone: true,
  imports: [],
  templateUrl: './child-cycle.component.html',
  styleUrl: './child-cycle.component.css',
})
export class ChildCycleComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input({ alias: 'onchange', required: true }) OnChange: string | undefined;
  constructorCycle: string | undefined;

  constructor() {
    this.constructorCycle = 'Constructor';
    console.log('1 = constructor', this.constructorCycle);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('2 = ngOnChages ', changes);
  }

  ngOnInit(): void {
    console.log('3 = ngOninit');
  }

  ngDoCheck(): void {
    console.log('4 = Do check');
  }

  ngAfterContentInit(): void {
    console.log('5 = After content init');
  }

  ngAfterContentChecked(): void {
    console.log('6 = After content checked');
  }

  ngAfterViewInit(): void {
    console.log('7 = After  view init');
  }

  ngAfterViewChecked(): void {
    console.log('8 = After view checked');
  }

  ngOnDestroy(): void {
    console.log('9 = destroy');
  }
}

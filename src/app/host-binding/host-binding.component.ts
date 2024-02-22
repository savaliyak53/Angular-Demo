import { Component } from '@angular/core';
import { ApphoverDirective } from '../CustomDirective/hostBinding/apphover.directive';

@Component({
  selector: 'app-host-binding',
  standalone: true,
  imports: [ApphoverDirective],
  templateUrl: './host-binding.component.html',
  styleUrl: './host-binding.component.css',
})
export class HostBindingComponent {}

import { Component } from '@angular/core';
import { HighlightDirective } from '../CustomDirective/attributedirective';
import { CommonModule } from '@angular/common';
import { UnlessDirective } from '../CustomDirective/structuralDirective';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [HighlightDirective, CommonModule, UnlessDirective],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css',
})
export class DirectiveComponent {
  condition = false;
  color = '';
}

import { Component } from '@angular/core';
import { AttributeDirectiveDirective } from '../CustomDirective/customAttributeDirective/attribute-directive.directive';
import { IfCustomDirective } from '../CustomDirective/customStructuralDirective/customStructuralDirective';
import { Render2Directive } from '../CustomDirective/render2/render2.directive';
@Component({
  selector: 'app-create-custom-directive',
  standalone: true,
  imports: [AttributeDirectiveDirective, IfCustomDirective, Render2Directive],
  templateUrl: './create-custom-directive.component.html',
  styleUrl: './create-custom-directive.component.css',
})
export class CreateCustomDirectiveComponent {}

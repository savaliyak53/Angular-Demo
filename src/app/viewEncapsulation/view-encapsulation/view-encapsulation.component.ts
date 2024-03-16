import { Component, ViewEncapsulation } from '@angular/core';
import { ComoneComponent } from '../comone/comone.component';
import { ComtwoComponent } from '../comtwo/comtwo.component';

@Component({
  selector: 'app-view-encapsulation',
  standalone: true,
  templateUrl: './view-encapsulation.component.html',
  styleUrl: './view-encapsulation.component.css',
  imports: [ComoneComponent, ComtwoComponent],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ViewEncapsulationComponent {}

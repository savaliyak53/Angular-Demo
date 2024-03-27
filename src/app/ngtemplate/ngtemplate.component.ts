import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngtemplate',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './ngtemplate.component.html',
  styleUrl: './ngtemplate.component.css',
})
export class NgtemplateComponent {}

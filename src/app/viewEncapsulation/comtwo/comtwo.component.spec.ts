import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComtwoComponent } from './comtwo.component';

describe('ComtwoComponent', () => {
  let component: ComtwoComponent;
  let fixture: ComponentFixture<ComtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComtwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratoeComponent } from './decoratoe.component';

describe('DecoratoeComponent', () => {
  let component: DecoratoeComponent;
  let fixture: ComponentFixture<DecoratoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecoratoeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DecoratoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

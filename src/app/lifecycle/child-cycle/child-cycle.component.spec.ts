import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCycleComponent } from './child-cycle.component';

describe('ChildCycleComponent', () => {
  let component: ChildCycleComponent;
  let fixture: ComponentFixture<ChildCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildCycleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

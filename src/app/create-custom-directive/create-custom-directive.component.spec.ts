import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomDirectiveComponent } from './create-custom-directive.component';

describe('CreateCustomDirectiveComponent', () => {
  let component: CreateCustomDirectiveComponent;
  let fixture: ComponentFixture<CreateCustomDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCustomDirectiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCustomDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

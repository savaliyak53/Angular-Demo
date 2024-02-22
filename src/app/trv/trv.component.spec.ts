import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TRVComponent } from './trv.component';

describe('TRVComponent', () => {
  let component: TRVComponent;
  let fixture: ComponentFixture<TRVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TRVComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TRVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

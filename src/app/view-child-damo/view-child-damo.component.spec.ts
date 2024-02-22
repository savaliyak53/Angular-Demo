import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildDamoComponent } from './view-child-damo.component';

describe('ViewChildDamoComponent', () => {
  let component: ViewChildDamoComponent;
  let fixture: ComponentFixture<ViewChildDamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildDamoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewChildDamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

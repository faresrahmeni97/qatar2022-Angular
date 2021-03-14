import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormStaffComponent } from './add-form-staff.component';

describe('AddFormStaffComponent', () => {
  let component: AddFormStaffComponent;
  let fixture: ComponentFixture<AddFormStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

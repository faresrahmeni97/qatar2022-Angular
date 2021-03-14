import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormEquipeComponent } from './add-form-equipe.component';

describe('AddFormEquipeComponent', () => {
  let component: AddFormEquipeComponent;
  let fixture: ComponentFixture<AddFormEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormEquipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

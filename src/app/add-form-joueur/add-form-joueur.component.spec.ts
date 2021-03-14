import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormJoueurComponent } from './add-form-joueur.component';

describe('AddFormJoueurComponent', () => {
  let component: AddFormJoueurComponent;
  let fixture: ComponentFixture<AddFormJoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormJoueurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoueurlistComponent } from './joueurlist.component';

describe('JoueurlistComponent', () => {
  let component: JoueurlistComponent;
  let fixture: ComponentFixture<JoueurlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoueurlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoueurlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
